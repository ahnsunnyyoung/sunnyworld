import styles from "@/styles/AboutComponent.module.css"

export default function AboutComponent() {

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

      <div className={`${styles.body}`}>
        <span>
          Hello, I&#39;m Sunyoung Ahn &#40;aka. Sunny&#41;, a 23-year-old Frontend Developer.<br/>
          I hold a bachelor&#39;s degree in Software Engineering and I am currently pursuing my master&#39;s degree in Computer Science.
        </span>
      </div>

      <div className={`${styles.visionDiv}`}>
        <div className={`${styles.visionIconDiv} visionIconDivAni`}>
          <div className={`${styles.visionIcon} ${styles.embraceColor}`}>
            <img src="/embrace_logo.png" alt="Embrace Logo" />
          </div>
          <div className={`${styles.title}`}>
            <span>Embrace</span>
          </div>
        </div>
        <div className={`${styles.visionIconDiv} visionIconDivAni`}>
          <div className={`${styles.visionIcon} ${styles.directColor}`}>
            <img src="/direct_logo.png" alt="Direct Logo" />
          </div>
          <div className={`${styles.title}`}>
            <span>Direct</span>
          </div>
        </div>
        <div className={`${styles.visionIconDiv} visionIconDivAni`}>
          <div className={`${styles.visionIcon} ${styles.impactColor}`}>
            <img src="/impact_logo.png" alt="Impact Logo" />
          </div>
          <div className={`${styles.title}`}>
            <span>Impact</span>
          </div>
        </div>
      </div>

      <div className={`${styles.body}`}>
        <span>
          My key values are <span className={`${styles.highlightUnderline}`}><b>embrace</b>, <b>direct</b>, and <b>impact</b></span>. 
          I constantly strive to embrace diverse knowledge, directly reach goals, 
          and make a positive impact on the environment, much like the radiance of <span className={`${styles.highlightUnderline}`}><b>sunshine</b></span>. 
          I am fully prepared to bring my potential to the team, the organization, 
          and its products as a whole.
        </span>
      </div>
    </div>
  )
}
