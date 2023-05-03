import { MdSunny } from 'react-icons/md';
import { theme } from '../../styles';

export default function ThirdSection() {
  return (
    <section id='contact'>
        <div className="slide reveal">
          <div>
            <div>
              
            </div>
          </div>
          <div className="text-container">
            <div className="text-box">
              <div className="icon-box">
                <MdSunny color={theme.palette.darkpink} size='100%'/>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
