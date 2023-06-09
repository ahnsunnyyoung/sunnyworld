import styles from "./EducationComponent.module.css"
import EducationCardView from "./EducationCardView"

export default function EducationComponent() {

  const data = [
    {
      "title": "Myoungji University",
      "subtitle": "Bachelor of Science in Convergence Software",
      "period": "February 2018 - June 2022",
      "contents": "4.3/4.5 GPA",
      "img": "/myoungji_logo.png",
      "img_alt": "Myoungji logo",
      "width": "30%"
    },
    {
      "title": "Fontys of Applied Science",
      "subtitle": "Exchange student",
      "period": "September 2021 - February 2022",
      "contents": "BSc in Information & Communication Technology",
      "img": "/fontys_logo.png",
      "img_alt": "Fontys logo",
      "width": "30%"
    },
    {
      "title": "Griffith College",
      "subtitle": "Master of Science in Computing",
      "period": "September 2022 - September 2023",
      "contents": "",
      "img": "/griffith_logo.png",
      "img_alt": "Griffith logo",
      "width": "30%"
    }
  ]

  return (
    <div id='educationComponent' className={`component-layout contents-gap`}>
      <div className={`componentTitle`}>
        <div className={`title`}>
          Education
        </div>
        <div className={`subtitle`}>
          My solid foundation went through this journey
        </div>
      </div>

      <div className={`${styles.cardViewDiv} color-white`}>
        {data.map((item, index) =>
          <EducationCardView item={item} key={index}/>
        )}
      </div>
      
    </div>
  )
}
