'use client';

import { Canvas, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { Float } from '@react-three/drei';


import { Environment } from '@react-three/drei';
function CameraControls() {
    const { camera } = useThree();

    useEffect(() => {

        camera.position.set(2, 2, 5);

        camera.lookAt(0, -1, 0);
    }, [camera]);

    return null;
}

export default function StuffMobile() {
    const model = useLoader(GLTFLoader, '/models/LowPolyComputer.glb');
    console.log(model);

    return (
        <>
            <Canvas>

                <CameraControls />
                <directionalLight castShadow position={[2, 3, 4]} intensity={3} />
                <ambientLight intensity={0.5} />
                <Environment preset='city'></Environment>

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
                {/* <EffectComposer> --added this in case if we want a glitch effect
               
                <Glitch
                    delay={[2.5, 4]} // min and max glitch delay
                    duration={[0.5, 1]} // min and max glitch duration
                    strength={[0.1, .2]} // min and max glitch strength
                    mode={GlitchMode.SPORADIC} // glitch mode
                    active // turn on/off the effect
                    ratio={0.05} // glitch effect coverage
                />
            </EffectComposer> */}
            </Canvas>
        </>
    );
}