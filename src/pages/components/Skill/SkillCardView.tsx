import styles from "./SkillCardView.module.css"
import Skill from '@/types/Skill'

export default function SkillsCardView({ item }: { item: Skill }) {
  return (
    (item) &&
      <div className={`${styles.cardView}`}>
        <div className={`cardHeader`}>
          <img className={`${styles.cardIcon}`} src={item.img} alt={item.img_alt}/>
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
