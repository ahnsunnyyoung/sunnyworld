import styles from "./ProjectsCardView.module.css"
import Project from '@/types/Project'
import Image from 'next/image'

export default function ProjectsCardView({ item }: { item: Project }) {
  return (
    (item) &&
      <div className={`${styles.cardView}`} style={{"width":item.width}}>
        <div className={`cardHeader`}>
          <Image 
            className={`${styles.cardIcon}`} 
            src={item.img} 
            alt={item.img_alt}
            width={100}
            height={100}
          />
          <div className={`cardTitleDiv flex-col`}>
            <span className={`${styles.title}`}>{item.title}</span>
            <span className={`${styles.period}`}>{item.period}</span>
            <span className={`${styles.subtitle}`}>{item.subtitle}</span>
          </div>
        </div>
        <span className={`${styles.cardBody}`}>{item.summary}</span>
        <div className={`${styles.cardBody}`}>
          <ul>
            {item.contents.map((content, i) =>
              <li key={i}>{content}</li>
            )}
          </ul>
        </div>
        {("tech" in item) &&
          <div className={`${styles.cardBody}`}>
            <b>Tech</b> <br/>
            {item.tech}
          </div>
        }
        {("moreLink" in item) &&
          <a className={`${styles.more}`} href={item.moreLink} target="_blank">
            See more &#62;
          </a>
        }
    </div>
  )
}
