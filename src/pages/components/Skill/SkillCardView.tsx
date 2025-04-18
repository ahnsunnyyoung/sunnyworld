import styles from "./SkillCardView.module.css"
import Skill from '@/types/Skill'
import Image from 'next/image'

export default function SkillCardView({ item }: { item: Skill }) {
  return (
    (item) &&
      <div className={`${styles.cardView}`}>
        <Image 
          className={`${styles.cardIcon}`} 
          src={item.img} 
          alt={item.img_alt}
          width={100}
          height={100}
        />
        <div className={`cardHeader`}>
          <div className={`cardTitleDiv flex-col`}>
            <span className={`${styles.title}`}>{item.title}</span>
            <span className={`${styles.period}`}>{item.period} years</span>
          </div>
        </div>
        <div className={`${styles.SkillBar}`}>
          <div className={`${styles.SkillPer} Skill-${item.percent}`}>
          </div>
        </div>
      </div>
  )
}
