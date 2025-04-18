import styles from "./AboutVisionIcon.module.css"
import VisionIcon from '@/types/VisionIcon'
import Image from 'next/image'

export default function AboutVisionIcon({ icon }: { icon: VisionIcon }) {
  return (
    (icon) && 
      <div className={`${styles.visionIconDiv} flex-col visionIconDivAni contents-gap`}>
      <div className={`${styles.visionIcon}`} style={{background:icon.color}}>
        <Image 
          className={`${styles.visionIconImg}`} 
          src={icon.logo} 
          alt={icon.logo_alt}
          width={100}
          height={100}
        />
      </div>
      <div className={`${styles.title}`}>
        <span>{icon.title}</span>
      </div>
    </div>
  )
}
