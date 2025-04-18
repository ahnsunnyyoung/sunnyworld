import styles from "./AboutComponent.module.css"
import AboutVisionIcon from './AboutVisionIcon';

export default function AboutComponent() {
  const calculateAge = () => {
    const birthYear = 1999;
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  const data = [
    {
      "title": "Embrace",
      "color": "#F1F1C0",
      "logo": "/embrace_logo.png",
      "logo_alt": "Embrace Logo",
    },
    {
      "title": "Direct",
      "color": "#F1C0C0",
      "logo": "/direct_logo.png",
      "logo_alt": "Direct Logo",
    },
    {
      "title": "Impact",
      "color": "#C3F5BA",
      "logo": "/impact_logo.png",
      "logo_alt": "Impact Logo",
    },
  ]

  return (
    <div className={`component-layout contents-gap`} id="aboutComponent">
      <div className="componentTitle">
        <div className="title">
          About Sunny
        </div>
        <div className="subtitle">
          "Shine brightly like the sunshine"
        </div>
      </div>

      <div className={`${styles.body} flex-col`}>
        <span>
          Hello, I&#39;m Sunyoung Ahn &#40;Sunny&#41;, a {calculateAge()}-year-old Software Developer.<br/>
          I hold both Bachelor&#39;s and Master&#39;s degrees in Computer Science, with over 5 years of experience in software development.
        </span>
      </div>

      <div className={`${styles.visionDiv} contents-gap`}>
        {data.map((icon, index) =>
          <AboutVisionIcon icon={icon} key={index}/>
        )}
      </div>

      <div className={`${styles.body} flex-col`}>
        <span>
          My key values are <span className={`highlightUnderline`}><b>embrace</b></span>, <span className={`highlightUnderline`}><b>direct</b></span>, and <span className={`highlightUnderline`}><b>impact</b></span>. 
          Drawing from my diverse experiences and cultural insights, I strive to embrace new perspectives, 
          directly address challenges, and create meaningful impact through innovative solutions. 
          Like the radiance of <span className={`highlightUnderline`}><b>sunshine</b></span>, 
          I aim to bring warmth and clarity to every project I undertake.
        </span>
      </div>
    </div>
  )
}
