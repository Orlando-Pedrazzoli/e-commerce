import React from 'react';
import '../Hero/Hero.css';
import hand_icon from '../../assets/hand_icon.png';
import arrow_icon from '../../assets/arrow.png';
import hero_image from '../../assets/kelly-slater-nova.png';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className='hero-hand-icon'>
            <p>surf shop</p>
            <img src={hand_icon} alt='' />
          </div>
          <p>for a lifetime of discovery.</p>
        </div>
        <div className='hero-latest-btn'>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt='' />
        </div>
      </div>
      <div className='hero-right'>
        <img src={hero_image} alt='' />
      </div>
    </div>
  );
}

export default Hero;
