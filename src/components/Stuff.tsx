'use client';

import { Canvas, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { Float, OrbitControls, Environment } from '@react-three/drei';
import gsap from 'gsap';
import dynamic from 'next/dynamic';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

function CameraControls() {
  const { camera } = useThree();
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const initialPosition: [number, number, number] = [2, 2, 5];
  const initialTarget: [number, number, number] = [0, 0, 0];

  useEffect(() => {
    camera.position.set(...initialPosition);
    camera.lookAt(...initialTarget);
  }, [camera]);

  useEffect(() => {
    const controls = controlsRef.current;
    let cameraAnimation: gsap.core.Tween | undefined;
    let targetAnimation: gsap.core.Tween | undefined;
  
    const handleEnd = () => {
      if (!controls) return;
  
      cameraAnimation = gsap.to(camera.position, {
        x: initialPosition[0],
        y: initialPosition[1],
        z: initialPosition[2],
        duration: 1.2,
        ease: 'power3.out',
        onUpdate: () => {
          camera.lookAt(...initialTarget);
          controls.update();
        },
        onComplete: () => {
          controls.enabled = true;
          if (cameraAnimation) cameraAnimation.kill();
        },
      });
  
      if (controls.target) {
        targetAnimation = gsap.to(controls.target, {
          x: initialTarget[0],
          y: initialTarget[1],
          z: initialTarget[2],
          duration: 1.2,
          ease: 'power3.out',
          onUpdate: () => controls.update(),
          onComplete: () => {
            if (targetAnimation) targetAnimation.kill();
          },
        });
      }
  
      controls.enabled = false;
    };
  
    const handleTouchStart = (event: TouchEvent) => {
      if (controls) {
        controls.enabled = event.touches.length === 2;
      }
    };
  
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
  
   
    (controls as unknown as { addEventListener: (type: string, listener: EventListener) => void })
      .addEventListener('end', handleEnd as EventListener);
  
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      (controls as unknown as { removeEventListener: (type: string, listener: EventListener) => void })
        .removeEventListener('end', handleEnd as EventListener);
    };
  }, [camera, initialPosition, initialTarget]);
  
  
  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableZoom={false}
      maxPolarAngle={Math.PI / 2 + Math.PI / 10}
      maxAzimuthAngle={Math.PI / 3 + Math.PI / 10}
      minAzimuthAngle={-Math.PI / 3 - Math.PI / 10}
    />
  );
}

const Stuff: React.FC = () => {
  const [startY, setStartY] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const lastDeltaYRef = useRef<number>(0);
  const momentumRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  if (typeof window === 'undefined') return null;

  const model = useLoader(GLTFLoader, '/models/LowPolyComputer.glb');

  const handleTouchStart = (e: TouchEvent) => {
    if (!canvasRef.current?.contains(e.target as Node)) return;
    e.preventDefault();
    if (e.touches.length === 1) {
      setStartY(e.touches[0].clientY);
      setIsSwiping(true);
      cancelMomentumScroll();
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!canvasRef.current?.contains(e.target as Node)) return;
    e.preventDefault();
    if (isSwiping) {
      const deltaY = startY - e.touches[0].clientY;
      const scrollSpeedFactor = 2;
      window.scrollBy(0, deltaY * scrollSpeedFactor);
      setStartY(e.touches[0].clientY);
      lastDeltaYRef.current = deltaY;
    }
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (!canvasRef.current?.contains(e.target as Node)) return;
    setIsSwiping(false);
    startMomentumScroll(lastDeltaYRef.current);
  };

  const startMomentumScroll = (initialVelocity: number) => {
    const friction = 0.95;
    let velocity = initialVelocity;

    const animate = () => {
      if (Math.abs(velocity) > 0.5) {
        window.scrollBy(0, velocity);
        velocity *= friction;
        momentumRef.current = requestAnimationFrame(animate);
      }
    };

    momentumRef.current = requestAnimationFrame(animate);
  };

  const cancelMomentumScroll = () => {
    if (momentumRef.current) {
      cancelAnimationFrame(momentumRef.current);
      momentumRef.current = 0;
    }
  };

  useEffect(() => {
    const options = { passive: false };

    window.addEventListener('touchstart', handleTouchStart, options);
    window.addEventListener('touchmove', handleTouchMove, options);
    window.addEventListener('touchend', handleTouchEnd, options);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <Canvas
      ref={canvasRef}
      style={{ touchAction: 'none', WebkitUserSelect: 'none', WebkitTapHighlightColor: 'transparent' }}
      onTouchStart={handleTouchStart as any}
      onTouchMove={handleTouchMove as any}
      onTouchEnd={handleTouchEnd as any}
    >
      <CameraControls />
      <directionalLight castShadow position={[2, 3, 4]} intensity={3} />
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <Float speed={1.4} rotationIntensity={0.7} floatIntensity={1.5} floatingRange={[-0.15, 0.15]}>
        <primitive
          object={model.scene}
          scale={1}
          position-y={-1.6}
          position-x={0.1}
          rotation-y={Math.PI * 1.47}
          rotation-z={Math.PI * 2}
          rotation-x={Math.PI * 2}
        />
      </Float>
    </Canvas>
  );
};

export default dynamic(() => Promise.resolve(Stuff), { ssr: false });
