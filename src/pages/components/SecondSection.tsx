
import { styled } from '@mui/material/styles';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { FaUserAlt, FaUserFriends } from 'react-icons/fa';
import { useEffect, useState } from 'react'

const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const items_data = [
  {
    'year': 2022,
    'month': 'June',
    'category': 'React • javascript • AWS • Agile',
    'title': 'JjinMotjib',
    'content': 'AI advertising filtering service website for restaurant search engine web application.',
    'type': 'Individual',
    'position': 'Frontend Developer',
    'img': 'jjinmotjib.png'
  },
  {
    'year': 2022,
    'month': 'May',
    'category': 'Android • kotlin • SQLite',
    'title': 'Myoungji class registration App',
    'content': 'Myongji University class registration Android app.',
    'type': 'Individual',
    'position': 'Frontend Developer'
  },
  {
    'year': 2020,
    'month': 'July',
    'category': 'React • expo',
    'title': 'Today\'s Covid',
    'content': 'Mobile application that visualizes COVID data.',
    'type': 'Team',
    'position': 'Frontend Developer',
    'img': 'todayscovid19.png'
  },
  {
    'year': 2020,
    'month': 'May',
    'category': 'React-Redux • React Native',
    'title': 'StockSunny',
    'content': 'Basic stock information website and cross-platform mobile application.',
    'type': 'Individual',
    'position': 'Frontend Developer'
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

const items: any[] | undefined = [];

items_data.forEach(function(item){
  items.push(
    <div onDragStart={handleDragStart} className='project-info'>
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
    </div>
)
});

export default function SecondSection() {
  const [responsive, setResponsive] = useState({})

  useEffect(() => setResponsive({
    0: {
      items: 1,
    },
    1024: {
        items: 3,
        itemsFit: 'contain'
    }
  }), [])

  return (
    <section id='projects'>
        <div className="slide reveal" id='carousel-container'>
        <AliceCarousel mouseTracking items={items} responsive={responsive} disableButtonsControls={true}/>
        </div>
      </section>
  )
}
