
export default function EducationComponent() {

  const data = [
    {
      "title": "Myoungji University",
      "subtitle": "Bachelor of Science in Convergence Software",
      "period": "February 2018 - June 2022",
      "contents": "4.3/4.5 GPA",
      "img": "/myoungji_logo.png",
      "img_alt": "Myoungji logo"
    },
    {
      "title": "Fontys of Applied Science",
      "subtitle": "Exchange student",
      "period": "September 2021 - February 2022",
      "contents": "BSc in Information & Communication Technology",
      "img": "/fontys_logo.png",
      "img_alt": "Fontys logo"
    },
    {
      "title": "Griffith College",
      "subtitle": "Master of Science in Computing",
      "period": "September 2022 - September 2023",
      "contents": "",
      "img": "/griffith_logo.png",
      "img_alt": "Griffith logo"
    }
  ]

  return (
    <div id='educationComponent'>
      <div className='componentTitle'>
        <div className='title'>
          Education
        </div>
        <div className='subtitle'>
          My solid foundation went through this journey
        </div>
      </div>

      <div id="cardViewDiv">
        {data.map((item) =>
          <div className="cardView">
            <div className="cardHeader">
              <img className="cardIcon" src={item.img} alt={item.img_alt}/>
              <div className="cardTitleDiv">
                <span className="title">{item.title}</span>
                <span className="subtitle">{item.subtitle}</span>
              </div>
            </div>
            <span className="period">{item.period}</span>
            <span className="contents">{item.contents}</span>
          </div>
        )}
      </div>
      
    </div>
  )
}
