import styles from "./ExperiencesComponent.module.css"
import ExperiencesCardView from "./ExperiencesCardView"

export default function ExperiencesComponent() {
  const data = [
    {
      "title": "Hotelysis",
      "subtitle": "Frontend Developer",
      "period": "Feb 2020 - Nov 2021 (1 year, 10 months)",
      "contents": [
        "Mainly used Python, dash, and Flask for development.",
        "Developed HBI Dashboard service(B2B) which provides financial data and analysis of 20,801 lodging properties.",
        "Maintenance and developed mobile application."
      ],
      "tech": "Python / Dash / Flask / React Native / Android Studio",
      "img": "/hotelysis_logo.png",
      "img_alt": "Hotelysis Logo",
      "moreLink": "https://hbi.hotelysis.com/index",
      "width": "100%"
    },
    {
      "title": "VAIV Company Inc.",
      "subtitle": "Data Assistant",
      "period": "Dec 2020 - Feb 2021 (3 months).",
      "contents": [
        "Analysis and labeling of data resources for the development of AI systems in summary of North Korean news articles."
      ],
      "img": "/vaiv_logo.png",
      "img_alt": "Vaiv Logo",
      "moreLink": "https://www.vaiv.kr/",
      "width": "30%"
    },
    {
      "title": "Myoungji University",
      "subtitle": "Student Researcher",
      "period": "Feb 2020 to Mar 2021 (1 year, 2 months)",
      "contents": [
        "Wrote a paper report based on \u0022deep learning-based collaborative filtering for predicting gene-disease association\u0022.",
        "By studying and analyzing +50 papers, it is possible to understand and write the structure and method of academic papers."
      ],
      "tech": "Tensorflow / Python / Jupyter / Matlab / Anaconda / Linux / Docker",
      "img": "/myoungji_logo.png",
      "img_alt": "Myoungji Logo",
      "width": "30%"
    },
    {
      "title": "Starbucks",
      "subtitle": "Barista",
      "period": "Oct 2022 - present (8 months)",
      "contents": [
        "Bakery sales, display, packaging, customer service, coffee/drink manufacturing"
      ],
      "img": "/starbucks_logo.png",
      "img_alt": "Starbucks Logo",
      "width": "30%"
    },
  ]

  return (
    <div id='experiencesComponent' className={`component-layout contents-gap`}>
      <div className={`componentTitle`}>
        <div className={`title`}>
          Experiences
        </div>
        <div className={`subtitle`}>
          Never stop challenging, Never stop Trying.
        </div>
      </div>

      <div className={`${styles.cardViewDiv} color-white`}>
        {data.map((item, index) =>
          <ExperiencesCardView item={item} key={index}/>
        )}
      </div>

    </div>
  )
}
