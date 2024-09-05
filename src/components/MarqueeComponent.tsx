"use client";

import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeComponent: React.FC = () => {
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <div style={{ backgroundColor: '#D9D9D9', width: '50%', height: '10px' }}></div>
        <div style={{ backgroundColor: '#D9D9D9', width: '50%', height: '10px' }}></div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <div style={{ backgroundColor: 'black', width: '50%', height: '10px' }}></div>
        <div style={{ backgroundColor: 'black', width: '50%', height: '10px' }}></div>
      </div>
      <Marquee speed={80} gradient={false} style={{ backgroundColor: "#D9D9D9" ,border: '1px solid #ccc', padding: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div style={{ width: '100%', textAlign: 'center', padding: '30px', wordSpacing: '20px', fontWeight: "700" , fontSize: "64px", fontFamily: "IBM plex Mono" }}>
            CLUEMINATI AND COOKOFF DO REGISTER  CLUEMINATI AND COOKOFF DO REGISTER.  CLUEMINATI AND COOKOFF DO REGISTER.  CLUEMINATI AND COOKOFF DO REGISTER.  CLUEMINATI AND COOKOFF DO REGISTER.
          </div>
        </div>
      </Marquee>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <div style={{ backgroundColor: 'black', width: '50%', height: '10px' }}></div>
        <div style={{ backgroundColor: 'black', width: '50%', height: '10px' }}></div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <div style={{ backgroundColor: 'white', width: '50%', height: '10px' }}></div>
        <div style={{ backgroundColor: 'white', width: '50%', height: '10px' }}></div>
      </div>
      
    </div>
  );
};

export default MarqueeComponent;
