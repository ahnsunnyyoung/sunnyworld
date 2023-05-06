import { useState, useEffect, useRef } from 'react';
import { theme } from '../../styles';

export default function MainSection() {
  const images = ["/profile_1.png", "/profile_2.png", "/profile_3.png"];
  const [currentImg, setCurrentImg] = useState(0);

  let switchImages = () => {
    if (currentImg < images.length - 1) {
      setCurrentImg(currentImg + 1);
    } else {
      setCurrentImg(0);
    }
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      switchImages();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section id='home'>
      <div id='main-container'>

        <div className='flex justify-center' id='main-text-container'>
          <div id='main-text'>Hello, I&apos;m</div>
          <div id='main-text-name'>
            <div>
              <span>SUN</span><span style={{color:theme.palette.darkpink}}>N</span><span>Y</span>
            </div>
            
            <div>
              <div id='main-text-name-sub'>oung ahn</div>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <img
            src={images[currentImg]}
            alt="Picture of Sunny"
            id='main-img'
          />
        </div>

        
        <div className='mx-4' id='sub-text'>
          <p className='solid-font' id='sub-text-title'>Frontend Developer,</p>
          <p className='solid-font' id='sub-text-detail'>who is sharing <span className='solid-font'  id='highlight'>happy</span>, <span className='solid-font'  id='highlight'>interactive</span> and <span className='solid-font'  id='highlight'>meaningful</span> experiences.</p>
        </div>

      </div>
    </section>
  )
}
