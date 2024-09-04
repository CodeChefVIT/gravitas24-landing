import React from 'react';

const StickyStack: React.FC = () => {
  const topLeftStackData = [
    { src: "/image1.png", alt: 'Image 1' },
    { src: "/image2.png", alt: 'Image 2' },
  ];

  const topRightStackData = [
    { src: "/image3.png", alt: 'Image 3' },
    { src: "/image4.png", alt: 'Image 4' },
  ];

  const bottomLeftStackData = [
    { src: "/image1.png", alt: 'Image 1' },
    { src: "/image2.png", alt: 'Image 2' },
  ];

  const bottomRightStackData = [
    { src: "/image3.png", alt: 'Image 3' },
    { src: "/image4.png", alt: 'Image 4' },
  ];

  return (
    <div className="relative">
      {/* Top Stacks */}
      <div className="flex">
        {/* Vertical Text for Cookoff */}
       

        {/* Top Left Stack */}
        <div className="flex-1 relative">
          {topLeftStackData.map((card, index) => (
            <div
              key={index}
              className="h-screen sticky top-0 flex items-center justify-center"
              style={{ zIndex: index + 1 }}
            >
              <img
                src={card.src}
                alt={card.alt}
                style={{
                  width: '554px',
                  height: '369px',
                }
                }
                className="w-1/2 h-auto max-h-[60%] object-cover rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="sticky top-0 flex items-center justify-center w-10 h-screen">
        <div
              className="text-black flex flex-col justify-center items-center"
              style={{
                fontFamily: 'IBM Plex Mono',
                fontSize: '64px',
                fontWeight: 700,
                lineHeight: '60px',
                textAlign: 'center',
              }}
            >
            <span> C</span>
            <span> O</span>
            <span> O</span>
            <span> K</span>
            <span> O</span>
            <span> F</span>
            <span> F</span>
          </div>
        </div>
        {/* Spacer */}
        <div className="w-20"></div>

        {/* Top Right Stack */}
        <div className="flex-1 relative">
          {topRightStackData.map((card, index) => (
            <div
              key={index}
              className="h-screen sticky top-0 flex items-center justify-center"
              style={{ zIndex: index + 1 }}
            >
              <img
                src={card.src}
                alt={card.alt}
                style={{
                  width: '554px',
                  height: '369px',
                }
                }
                className="w-1/2 h-auto max-h-[60%] object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Bottom Stacks */}
     <div className = "bg-[#B7AB98]">
     <div className="flex mt-10">
        {/* Bottom Left Stack */}
        <div className="flex-1 relative">
          {bottomLeftStackData.map((card, index) => (
            <div
              key={index}
              className="h-screen sticky top-0 flex items-center justify-center"
              style={{ zIndex: index + 1 }}
            >
              <img
                src={card.src}
                alt={card.alt}
                style={{
                  width: '554px',
                  height: '369px',
                }
                }
                className="w-1/2 h-auto max-h-[60%] object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Vertical Text for ClueMinati */}
        <div className="sticky top-0 flex items-center justify-center w-10 h-screen">
        <div
              className="text-black flex flex-col justify-center items-center"
              style={{
                fontFamily: 'IBM Plex Mono',
                fontSize: '64px',
                fontWeight: 700,
                lineHeight: '60px',
                textAlign: 'center',
              }}
            >
            <span>C</span>
            <span>L</span>
            <span>U</span>
            <span>E</span>
            <span>M</span>
            <span>I</span>
            <span>N</span>
            <span>A</span>
            <span>T</span>
            <span>I</span>
          </div>
        </div>

        {/* Bottom Right Stack */}
        <div className="flex-1 relative">
          {bottomRightStackData.map((card, index) => (
            <div
              key={index}
              className="h-screen sticky top-0 flex items-center justify-center"
              style={{ zIndex: index + 1 }}
            >
              <img
                src={card.src}
                alt={card.alt}
                style={{
                  width: '554px',
                  height: '369px',
                }
                }
                className="w-1/2 h-auto max-h-[60%] object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
     </div>
  );
};

export default StickyStack;
