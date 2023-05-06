import { MdSunny } from 'react-icons/md';
import { theme } from '../../styles';
import { styled } from '@mui/material/styles';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const items_data = [
  {
    'contact_title': "Instagram",
    'contact_link': "https://www.instagram.com/ahn_sunny_young/",
    'logo': <AiFillInstagram className='mr-1'/>
  },
  {
    'contact_title': "Youtube",
    'contact_link': "https://www.youtube.com/@sunnyworld3118",
    'logo': <AiFillYoutube className='mr-1'/>
  },
  {
    'contact_title': "LinkedIn",
    'contact_link': "https://www.linkedin.com/in/ahnsunnyyoung/",
    'logo': <AiFillLinkedin className='mr-1'/>
  },
  {
    'contact_title': "Github",
    'contact_link': "https://github.com/ahnsunnyyoung",
    'logo': <AiFillGithub className='mr-1'/>
  },
]

export default function ThirdSection() {
  return (
    <section id='contact'>
        <div className="slide reveal">
          <div>
            <div className='page-head'>
              <h2 className='page-title'>Contact</h2>
            </div>
          </div>
          <div className='contact-content'>

            <div className="contact-left">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h6>Mail</h6>
                    </td>
                    <td>
                      <div className="link-wrapper">
                        <div className="link">
                          <a className="solid-font" href="mailto:ahnsunnyyoung@gmail.com" target="_blank" rel="noreferrer">&#8599; ahnsunnyyoung</a>
                        </div>
                        <div className="link-underline"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="contact-right">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h6>Social medias</h6>
                    </td>

                    <td>
                      <ul>
                      {items_data.map(function(item, i){
                        return (
                          <li key={i}>
                          <a href={item.contact_title} target="_blank" rel="noreferrer" className="link-wrapper">
                            <div className="link solid-font">
                              {item.logo} {item.contact_title}
                            </div>

                            <div className="link-underline"></div>
                          </a>
                        </li>)
                      })}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>
          <div  id="logo-container">
            <div id="logo" className='flex align-content-center'>
              <div id="logo-icon">
                <MdSunny id="logo-icon-svg" color={theme.palette.darkpink} size='100%'/>
              </div>
              <div id="logo-text">
                <p id="txt-sunny">SUNNY</p>
                <p id="txt-world">world</p>
              </div>
            </div>
          </div>
        </div>

      </section>
  )
}
