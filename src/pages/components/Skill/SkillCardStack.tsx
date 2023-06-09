import styles from "./SkillCardStack.module.css"
import SkillCardView from './SkillCardView';
import Skill from '@/types/Skill'

export default function SkillsCardStack({ data }: { data: Array<Skill> }) {
  if(data){
    if(data[0].category=="Etc"){
      return (
        <div className={`${styles.etcSkillsDiv}`}>
          <span className={`${styles.skillsCategoryTitle}`}>
            {data[0].category}
          </span>
          <div className={`${styles.etcSkillsIconsDiv}`}>
            {data.map((item, index) =>
              <img className={`${styles.etcSkillsIcon} etcSkillsIconAni`} key={index} src={item.img} alt={item.img_alt}/>
            )}
          </div>
        </div>
      );
    }else{
      return (
        <div className={`${styles.skillCardStack}`}>
          <span className={`${styles.skillsCategoryTitle}`}>
            {data[0].category}
          </span>
          <div className={`${styles.cardViewDiv} color-white`}>
            {data.map((item, index) =>
              ("period" in item)&&
                <SkillCardView item={item} key={index}/>
            )}
          </div>
        </div>
      );
    }
  }else{
    return(<div></div>)
  }
}
