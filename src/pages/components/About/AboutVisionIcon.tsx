import styles from "./AboutVisionIcon.module.css"
import VisionIcon from '@/types/VisionIcon'

export default function AboutVisionIcon({ icon }: { icon: VisionIcon }) {
  return (
    (icon) && 
      <div className={`${styles.visionIconDiv} flex-col visionIconDivAni contents-gap`}>
      <div className={`${styles.visionIcon}`} style={{background:icon.color}}>
        <img className={`${styles.visionIconImg}`} src={icon.logo} alt={icon.logo_alt} />
      </div>
      <div className={`${styles.title}`}>
        <span>{icon.title}</span>
      </div>
    </div>
  )
}
