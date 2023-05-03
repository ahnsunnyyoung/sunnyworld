import { MdSunny } from 'react-icons/md';
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
              <p>
                Goal Oriented
              </p>
            </div>
            <div className="text-box">
              <div className="icon-box">
                <BsBarChartSteps color={theme.palette.white} size='50%'/>
              </div>
              <p>
                Solid Basic
              </p>
            </div>
            <div className="text-box">
              <div className="icon-box">
                <GiArtificialHive color={theme.palette.white} size='50%'/>
              </div>
              <p>
                Data Scientist
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
