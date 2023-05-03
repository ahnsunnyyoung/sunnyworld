
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
    'year': 2020,
    'month': 'May',
    'category': 'React',
    'title': 'Today\'s Covid',
    'content': 'Developed a mobile application that visualizes COVID data.',
    'type': 'Individual',
    'position': 'Frontend Developer'
  },
  {
    'year': 2020,
    'month': 'May',
    'category': 'React',
    'title': 'Today\'s Covid',
    'content': 'Developed a mobile application that visualizes COVID data.',
    'type': 'Individual',
    'position': 'Frontend Developer'
  },
  {
    'year': 2020,
    'month': 'May',
    'category': 'React',
    'title': 'Today\'s Covid',
    'content': 'Developed a mobile application that visualizes COVID data.',
    'type': 'Individual',
    'position': 'Frontend Developer'
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
              <Grid item xs={2}><FaUserAlt/></Grid>
              <Grid className='project-type' item xs={10}>Individual</Grid>
            </Grid>
            : 
            <Grid container>
              <Grid item xs={2}><FaUserFriends/></Grid>
              <Grid className='project-type' item xs={10}>Team</Grid>
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
