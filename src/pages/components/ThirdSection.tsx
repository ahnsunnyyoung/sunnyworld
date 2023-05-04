import { MdSunny } from 'react-icons/md';
import { theme } from '../../styles';
import { styled } from '@mui/material/styles';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import { AiFillInstagram } from 'react-icons/ai';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function ThirdSection() {
  return (
    <section id='contact'>
        <div className="slide reveal">
          <div className='contact-title'>
            Contact me!
          </div>

          <div className='flex justify-center contact-youtube'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/JDOe-bWogxU?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          
          <div className='contact-info'>
            <div className="contact-table">
              <div className="contact-row">
                <div className="contact-col">
                  <div className='flex justify-center' id='contact-icon'><HiLocationMarker size='2rem'/></div>
                  <div className='flex justify-center' id='contact-text'>Dublin, Ireland</div>
                </div>
                <div className="contact-col">
                < div className='flex justify-center' id='contact-icon'><HiMail size='2rem'/></div>
                  <div className='flex justify-center' id='contact-text'>ahnsunnyyoung@gmail.com</div>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-col">
                  <div className='flex justify-center' id='contact-icon'><HiPhone size='2rem'/></div>
                  <div className='flex justify-center' id='contact-text'>+353 &#40;087&#41; 676 3674</div>
                </div>
                <div className="contact-col">
                  <div className='flex justify-center' id='contact-icon'><AiFillInstagram size='2rem'/></div>
                  <div className='flex justify-center' id='contact-text'>@ahn_sunny_young</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </section>
  )
}
