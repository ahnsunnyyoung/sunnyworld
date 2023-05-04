import { GiStairsGoal, GiArtificialHive } from 'react-icons/gi';
import { BsBarChartSteps } from 'react-icons/bs';
import { theme } from '../../styles';

export default function FirstSection() {
  
  
  return (
    <section id='belief'>
        <div className="slide reveal">
          <div className="text-container">
            <div className="text-box">
              <div className="icon-box">
                <GiStairsGoal color={theme.palette.white} size='50%'/>
              </div>
              <p className='text-title'>
                Goal Oriented
              </p>
              <p className='text-description'>
                My goal is to create visually stunning and intuitive 
                user interfaces that not only meet but exceed client expectations.
              </p>
            </div>
            <div className="text-box">
              <div className="icon-box">
                <BsBarChartSteps color={theme.palette.white} size='50%'/>
              </div>
              <p className='text-title'>
                Solid Basic
              </p>
              <p className='text-description'>
                From HTML, CSS, and JavaScript to responsive design and cross-browser compatibility.
              </p>
            </div>
            <div className="text-box">
              <div className="icon-box">
                <GiArtificialHive color={theme.palette.white} size='50%'/>
              </div>
              <p className='text-title'>
                Data Scientist
              </p>
              <p className='text-description'>
                Ability to create intelligent and interactive user interfaces that deliver personalized experiences and drive engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
