
import { styled } from '@mui/material/styles';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { FaUserAlt, FaUserFriends } from 'react-icons/fa';
import { TbArrowBigRightLineFilled } from 'react-icons/tb';

const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();

const items_data = [
  {
    'year': 2022,
    'month': 'June',
    'category': 'React • javascript • AWS • Agile',
    'title': 'JjinMotjib',
    'content': 'AI advertising filtering service website for restaurant search engine web application.',
    'type': 'Individual',
    'position': 'Frontend',
    'img': 'jjinmotjib.png'
  },
  {
    'year': 2022,
    'month': 'May',
    'category': 'Android • kotlin • SQLite',
    'title': 'Myoungji class registration App',
    'content': 'Myongji University class registration Android app.',
    'type': 'Individual',
    'position': 'Frontend'
  },
  {
    'year': 2020,
    'month': 'July',
    'category': 'React • expo',
    'title': 'Today\'s Covid',
    'content': 'Mobile application that visualizes COVID data.',
    'type': 'Team',
    'position': 'Frontend',
    'img': 'todayscovid19.png'
  },
  {
    'year': 2020,
    'month': 'May',
    'category': 'React-Redux • React Native',
    'title': 'StockSunny',
    'content': 'Basic stock information website and cross-platform mobile application.',
    'type': 'Individual',
    'position': 'Frontend'
  },
  {
    'year': 2020,
    'month': 'Feb',
    'category': 'Tensorflow • PyTorch • Keras • Pandas',
    'title': 'Music genre Classification',
    'content': 'Research of audio-genre prediction model using the FMA dataset and CNN/RNN techniques in consideration of the characteristics as images through the melspectogram of audio, and the temporal properties of music.',
    'type': 'Individual',
    'position': 'Data Scientist'
  },
]

export default function SecondSection() {
  
  function mouseover (params:any, e:any) {
    const contentsInfo = document.getElementById(`projects-contents-info`);
    const contents = document.getElementById(`projects-contents-${params}`);
    const arrow = document.getElementById(`projects-selected-${params}`);
    const title = document.getElementById(`projects-title-${params}`);
    if(contentsInfo){
      contentsInfo.classList.remove("projects-show");
    }
    if(contents){
      contents.classList.add("projects-show");
    }
    if(arrow){
      arrow.classList.replace("projects-selected","projects-selected-transform");
    }
    if(title){
      title.classList.replace("projects-title","projects-title-transform");
    }
  }
  
  function mouseleave (params:any, e:any) {
    const contentsInfo = document.getElementById(`projects-contents-info`);
    const contents = document.getElementById(`projects-contents-${params}`);
    const arrow = document.getElementById(`projects-selected-${params}`);
    const title = document.getElementById(`projects-title-${params}`);
    if(contentsInfo){
      contentsInfo.classList.add("projects-show");
    }
    if(contents){
      contents.classList.remove("projects-show");
    }
    if(arrow){
      arrow.classList.replace("projects-selected-transform","projects-selected");
    }
    if(title){
      title.classList.replace("projects-title-transform","projects-title");
    }
  }    

  return (
    <section id='projects'>
        <div className="slide reveal projects">
        {/* <AliceCarousel mouseTracking items={items} responsive={responsive} disableButtonsControls={true}/> */}
          <div className='projects-left'>
            <div className='projects-contents-wrapper projects-show' id={'projects-contents-info'}>
              <div className='projects-arrow'>
                <TbArrowBigRightLineFilled size='8rem'/>
              </div>
            </div>
            {items_data.map(function(item, i){
              return (
              <div className='projects-contents-wrapper' id={'projects-contents-'+i}>
                <Grid container>
                  <Grid item xs={3}>
                    <div className='project-year'>{item.year}</div>
                    <div className='project-dur'>{item.month}</div>
                  </Grid>
                  <Grid item xs={9}>
                    <div className='project-category'>{item.category}</div>
                    <div className='project-title'>{item.title}</div>
                    <div className='project-content'>{item.content}</div>
                    {item.type=='Individual'
                      ? 
                      <Grid container>
                        <Grid item xs={2}><FaUserAlt size='50%'/></Grid>
                        <Grid className='project-type' item xs={10}>{item.type}</Grid>
                      </Grid>
                      : 
                      <Grid container>
                        <Grid item xs={2}><FaUserFriends size='50%'/></Grid>
                        <Grid className='project-type' item xs={10}>
                          <div>{item.type}</div>
                          <div className='project-type-position'>{item.position}</div>
                        </Grid>
                      </Grid>
                    }
                  </Grid>
                </Grid>
              </div>)
            })}
          </div>
          <div className='projects-right'>
            <div>
              <div>
                <div className="page-head">
                  <h2 className="page-title">Projects</h2>

                  <h5 className="elements-number">{items_data.length}</h5>
                </div>
              </div>
            </div>

            <ul className="projects-list">
            {items_data.map(function(item, i){
              return (
                <li>
                  <div className="projects-row" onMouseOver={(e)=>{mouseover(i, e)}} onMouseLeave={(e)=>{mouseleave(i, e)}} >
                    <div className="projects-row-left">
                      <div className="projects-selected-wrapper">
                        <h4 className="projects-selected" id={'projects-selected-'+i}>&rarr;</h4>
                      </div>
          
                      <h4 className="projects-title" id={'projects-title-'+i}>{item.title}</h4>
                    </div>
          
                    <div className="projects-row-right">
                      <p className="projects-category">{item.position}</p>
                    </div>
                  </div>
                </li>
                )
              })}

            </ul>
          </div>
        </div>
      </section>
  )
}

const styles = {

};
