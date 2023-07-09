import styles from "./EducationCardView.module.css"
import Education from '@/types/Education'

export default function EducationCardView({ item }: { item: Education }) {
  return (
    (item) &&
      <div className={`${styles.cardView}`} style={{"width":item.width}}>
        <div className={`cardHeader`}>
          <img className={`${styles.cardIcon}`} src={item.img} alt={item.img_alt}/>
          <div className={`cardTitleDiv flex-col`}>
            <span className={`${styles.title}`}>{item.title}</span>
            <span className={`${styles.subtitle}`}>{item.subtitle}</span>
          </div>
        </div>
        <span className={`${styles.period}`}>{item.period}</span>
        <span className={`${styles.contents}`}>{item.contents}</span>
      </div>
  )
}
