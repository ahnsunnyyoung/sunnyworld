import React from 'react';
import { theme } from '../../styles';


export default function MainSection() {
  return (
    <section id='home'>
      <div className='main-section'>

        <div className='flex justify-center' id='main-text-container'>
          <div id='main-text'>Hello, I'm</div>
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
            src="/profile_1.png"
            alt="Picture of Sunny"
            id='main-img'
          />
        </div>

        
        <div className='mx-4'>
          <p id='sub-text-title'>Frontend Developer,</p>
          <p id='sub-text-detail'>who is sharing <span id='highlight'>happy</span> & <span id='highlight'>interactive</span> & <span id='highlight'>meaningful</span> experiences.</p>
        </div>

      </div>
    </section>
  )
}
