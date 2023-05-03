import { MdSunny } from 'react-icons/md';
import { theme } from '../../styles';
import { styled } from '@mui/material/styles';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
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
          <div className='contact-container'>
            <Grid container spacing={2} className="text-center">
              <Grid item xs={4} className="contact-icon">
                <div className='flex justify-center'><HiLocationMarker size='2rem'/></div>
              </Grid>
              <Grid item xs={4} className="contact-icon">
                <div className='flex justify-center'><HiMail size='2rem'/></div>
              </Grid>
              <Grid item xs={4} className="contact-icon">
                <div className='flex justify-center'><HiPhone size='2rem'/></div>
              </Grid>
              <Grid item xs={4} className="contact-text">
                Dublin, Ireland
              </Grid>
              <Grid item xs={4} className="contact-text">
                ahnsunnyyoung@gmail.com
              </Grid>
              <Grid item xs={4} className="contact-text">
                +353 &#40;087&#41; 676 3674
              </Grid>
            </Grid>
          </div>
          
          {/* <div className="logo-container">
            <div className="icon-box">
              <MdSunny color={theme.palette.darkpink} size='100%'/>
            </div>
          </div> */}
        </div>
      </section>
  )
}
