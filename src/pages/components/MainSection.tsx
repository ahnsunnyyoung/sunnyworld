import styles from "./MainSection.module.css"

export default function MainSection() {

  return (
    <section id='mainSection' className={`fullscreen_section`}>
      <div className={`${styles.shadowSunnyDiv} shadowSunnyDivAni`}>
        <span className={`${styles.shadowSunny}`}>Sunny</span>
      </div>
      <div className={`${styles.lastupdateInfoDiv} color-white`}>
        <span className={`${styles.lastupdateInfo}`}>Latest update 18/Apr/2025</span>
      </div>

      <span className={`${styles.mainPosition}`}>Frontend Developer</span>
      <span className={`${styles.mainTitle}`}>Sunyoung Ahn</span>
      <span className={`${styles.mainVision}`}>“Shine brightly like the sunshine”</span>

    </section>
  )
}
