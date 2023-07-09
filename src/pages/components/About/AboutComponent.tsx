import styles from "./AboutComponent.module.css"
import AboutVisionIcon from './AboutVisionIcon';

export default function AboutComponent() {

  const data = [
    {
      "title": "Embrace",
      "color": "#F1F1C0",
      "logo": "/embrace_logo.png",
    },
    {
      "title": "Direct",
      "color": "#F1C0C0",
      "logo": "/direct_logo.png",
    },
    {
      "title": "Impact",
      "color": "#C3F5BA",
      "logo": "/impact_logo.png",
    },
  ]

  return (
    <div className={`component-layout contents-gap`} id="aboutComponent">
      <div className="componentTitle">
        <div className="title">
          About Sunny
        </div>
        <div className="subtitle">
          “Shine brightly like the sunshine”
        </div>
      </div>

      <div className={`${styles.body} flex-col`}>
        <span>
          Hello, I&#39;m Sunyoung Ahn &#40;aka. Sunny&#41;, a 23-year-old Frontend Developer.<br/>
          I hold a bachelor&#39;s degree in Software Engineering and I am currently pursuing my master&#39;s degree in Computer Science.
        </span>
      </div>

      <div className={`${styles.visionDiv} contents-gap`}>
        {data.map((icon, index) =>
          <AboutVisionIcon icon={icon} key={index}/>
        )}
      </div>

      <div className={`${styles.body} flex-col`}>
        <span>
          My key values are <span className={`highlightUnderline`}><b>embrace</b>, <b>direct</b>, and <b>impact</b></span>. 
          I constantly strive to embrace diverse knowledge, directly reach goals, 
          and make a positive impact on the environment, much like the radiance of <span className={`highlightUnderline`}><b>sunshine</b></span>. 
          I am fully prepared to bring my potential to the team, the organization, 
          and its products as a whole.
        </span>
      </div>
    </div>
  )
}
