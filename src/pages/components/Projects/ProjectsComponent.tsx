import styles from "./ProjectsComponent.module.css"

export default function ProjectsComponent() {
  const data = [
    {
      "title": "Myoungji University Lecture Registration App",
      "period": "March 2022 - June 2022",
      "subtitle": "Individual",
      "summary": "Myongji University's lecture registration Android application.",
      "contents": [
        "Conducted from UX design such as problem definition, user research, and UX modeling to full development."
      ],
      "tech": "Android studio / Kotlin / SQLite",
      "img": "/myoungji_logo.png",
      "img_alt": "Myoungji Logo",
      "moreLink": "https://github.com/ahnsunnyyoung/mju_applying_lecture_app",
      "width": "48%"
    },
    {
      "title": "JjinMotJib",
      "period": "March 2022 - June 2022",
      "subtitle": "Team (Frontend Developer)",
      "summary": "AI advertising filtering service website for restaurant search engine web application",
      "contents": [
        "Worked with an Agile methodology.",
        "Applied various user interaction animation effects and dark mode."
      ],
      "tech": "React / Javascript / AWS EC2 / Agile",
      "img": "/jjinmotjib_logo.png",
      "img_alt": "Jjinmotjib Logo",
      "moreLink": "https://github.com/ahnsunnyyoung/capstone_frontend",
      "width": "48%"
    },
    {
      "title": "Today's COVID-19",
      "period": "July 2020",
      "subtitle": "Team (Frontend Developer)",
      "summary": "COVID-19 information mobile application.",
      "contents": [
        "Applied intuitive colors and interactive icons so that users can easily check COVID-19 information."
      ],
      "tech": "React / Javascript / Expo",
      "img": "/todayscovid19_logo.png",
      "img_alt": "Today's Covid-19 Logo",
      "width": "30%"
    },
    {
      "title": "StockSunny",
      "period": "March 2020 - June 2020",
      "subtitle": "Individual",
      "summary": "Real-time stock data cross platform application.",
      "contents": [
        "Developed an application that provides stock information in real-time live streams.",
        "Provides stock information visually in various graphs."
      ],
      "tech": "React-Redux / React Native / Javascript",
      "img": "/stocksunny_logo.png",
      "img_alt": "Stock Sunny Logo",
      "moreLink": "https://github.com/ahnsunnyyoung/react-native-stocksunny",
      "width": "30%"
    },
    {
      "title": "Music genre Classification",
      "period": "March 2020 - June 2020",
      "subtitle": "Individual",
      "summary": "An audio-genre prediction model was constructed using the FMA dataset.",
      "contents": [
        "Combining CNN and RNN techniques in consideration of the characteristics as images through the melspectogram of audio, and the temporal properties of music."
      ],
      "tech": "Tensorflow / PyTorch / Keras / Pandas",
      "img": "/MGC_logo.png",
      "img_alt": "Music genre Classification Logo",
      "width": "30%"
    },
  ]

  return (
    <div id='projectsComponent' className={`component-layout contents-gap`}>
      <div className={`componentTitle`}>
        <div className={`title`}>
          Projects
        </div>
        <div className={`subtitle`}>
          Go for it, and I went for this.
        </div>
      </div>

      <div className={`${styles.cardViewDiv} color-white`}>
        {data.map((item, index) =>
          <div className={`${styles.cardView}`} key={index} style={{"width":item.width}}>
            <div className={`cardHeader`}>
              <img className={`${styles.cardIcon}`} src={item.img} alt={item.img_alt}/>
              <div className={`cardTitleDiv flex-col`}>
                <span className={`${styles.title}`}>{item.title}</span>
                <span className={`${styles.period}`}>{item.period}</span>
                <span className={`${styles.subtitle}`}>{item.subtitle}</span>
              </div>
            </div>
            <span className={`${styles.cardBody}`}>{item.summary}</span>
            <div className={`${styles.cardBody}`}>
              <ul>
                {item.contents.map((content, i) =>
                  <li key={i}>{content}</li>
                )}
              </ul>
            </div>
            {("tech" in item) &&
              <div className={`${styles.cardBody}`}>
                <b>Tech</b> <br/>
                {item.tech}
              </div>
            }
            {("moreLink" in item) &&
              <a className={`${styles.more}`} href={item.moreLink} target="_blank">
                See more &#62;
              </a>
            }
          </div>
        )}
      </div>
    </div>
  )
}
