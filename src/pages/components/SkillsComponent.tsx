import styles from "@/styles/SkillsComponent.module.css"

export default function SkillsComponent() {
  const lang_idx = 0;
  const front_idx = 1;
  const back_idx = 2;
  const others_idx = 3;
  const etc_idx = 4;

  const data = [
    // lang
    [
      {
        'category': 'Language',
        'title': 'Javascript',
        'img_alt': 'Javascript',
        'img': '/skills/Javascript.svg',
        'period': '3',
        'percent': '100',
      },
      {
        'category': 'Language',
        'title': 'Typescript',
        'img_alt': 'Typescript',
        'img': '/skills/Typescript.svg',
        'period': '1',
        'percent': '80',
      },
      {
        'category': 'Language',
        'title': 'Python',
        'img_alt': 'Python',
        'img': '/skills/Python.svg',
        'period': '4',
        'percent': '90',
      },
      {
        'category': 'Language',
        'title': 'HTML',
        'img_alt': 'HTML',
        'img': '/skills/HTML.svg',
        'period': '3',
        'percent': '90',
      },
      {
        'category': 'Language',
        'title': 'CSS',
        'img_alt': 'CSS',
        'img': '/skills/CSS.svg',
        'period': '3',
        'percent': '90',
      },
      {
        'category': 'Language',
        'title': 'Kotlin',
        'img_alt': 'Kotlin',
        'img': '/skills/Kotlin.svg',
        'period': '1',
        'percent': '60',
      },
    ],
    // front
    [
      {
        'category': 'Frontend',
        'title': 'React',
        'img_alt': 'React',
        'img': '/skills/React.svg',
        'period': '3',
        'percent': '100',
      },
      {
        'category': 'Frontend',
        'title': 'Bootstrap',
        'img_alt': 'Bootstrap',
        'img': '/skills/Bootstrap.svg',
        'period': '3',
        'percent': '80',
      },
      {
        'category': 'Frontend',
        'title': 'Android Studio',
        'img_alt': 'Android Studio',
        'img': '/skills/AndroidStudio.svg',
        'period': '1',
        'percent': '60',
      },
      {
        'category': 'Frontend',
        'title': 'NextJS',
        'img_alt': 'NextJS',
        'img': '/skills/NextJS.svg',
        'period': '1',
        'percent': '70',
      },
      {
        'category': 'Frontend',
        'title': 'Redux',
        'img_alt': 'Redux',
        'img': '/skills/Redux.svg',
        'period': '1',
        'percent': '60',
      },
      {
        'category': 'Frontend',
        'title': 'Figma',
        'img_alt': 'Figma',
        'img': '/skills/Figma.svg',
        'period': '1',
        'percent': '80',
      },
    ],
    // back
    [
      {
        'category': 'Backend',
        'title': 'Flask',
        'img_alt': 'Flask',
        'img': '/skills/Flask.svg',
        'period': '2',
        'percent': '70',
      },
      {
        'category': 'Backend',
        'title': 'NodeJS',
        'img_alt': 'NodeJS',
        'img': '/skills/NodeJS.svg',
        'period': '2',
        'percent': '60',
      },
      {
        'category': 'Backend',
        'title': 'ExpressJS',
        'img_alt': 'ExpressJS',
        'img': '/skills/ExpressJS.svg',
        'period': '0-1',
        'percent': '50',
      },
    ],
    // others
    [
      {
        'category': 'Others',
        'title': 'Tensorflow',
        'img_alt': 'Tensorflow',
        'img': '/skills/Tensorflow.svg',
        'period': '1',
        'percent': '70',
      },
      {
        'category': 'Others',
        'title': 'AWS',
        'img_alt': 'AWS',
        'img': '/skills/AWS.svg',
        'period': '1',
        'percent': '50',
      },
      {
        'category': 'Others',
        'title': 'Git',
        'img_alt': 'Git',
        'img': '/skills/Git.svg',
        'period': '4',
        'percent': '100',
      },
      {
        'category': 'Others',
        'title': 'Kafka',
        'img_alt': 'Kafka',
        'img': '/skills/Kafka.svg',
        'period': '0-1',
        'percent': '40',
      },
    ],
    // etc
    [
      {
        'category': 'Etc',
        'title': 'Java',
        'img_alt': 'Java',
        'img': '/skills/Java.svg',
      },
      {
        'category': 'Etc',
        'title': 'C',
        'img_alt': 'C',
        'img': '/skills/C.svg',
      },
      {
        'category': 'Etc',
        'title': 'R',
        'img_alt': 'R',
        'img': '/skills/R.svg',
      },
      {
        'category': 'Etc',
        'title': 'Eclipse',
        'img_alt': 'Eclipse',
        'img': '/skills/Eclipse.svg',
      },
      {
        'category': 'Etc',
        'title': 'GitLab',
        'img_alt': 'GitLab',
        'img': '/skills/GitLab.svg',
      },
      {
        'category': 'Etc',
        'title': 'Docker',
        'img_alt': 'Docker',
        'img': '/skills/Docker.svg',
      },
      {
        'category': 'Etc',
        'title': 'Linux',
        'img_alt': 'Linux',
        'img': '/skills/Linux.svg',
      },
      {
        'category': 'Etc',
        'title': 'MongoDB',
        'img_alt': 'MongoDB',
        'img': '/skills/MongoDB.svg',
      },
      {
        'category': 'Etc',
        'title': 'Firebase',
        'img_alt': 'Firebase',
        'img': '/skills/Firebase.svg',
      },
      {
        'category': 'Etc',
        'title': 'MySQL',
        'img_alt': 'MySQL',
        'img': '/skills/MySQL.svg',
      },
      {
        'category': 'Etc',
        'title': 'SQLite',
        'img_alt': 'SQLite',
        'img': '/skills/SQLite.svg',
      },
      {
        'category': 'Etc',
        'title': 'PyTorch',
        'img_alt': 'PyTorch',
        'img': '/skills/PyTorch.svg',
      },
      {
        'category': 'Etc',
        'title': 'Matlab',
        'img_alt': 'Matlab',
        'img': '/skills/Matlab.svg',
      },
      {
        'category': 'Etc',
        'title': 'Postman',
        'img_alt': 'Postman',
        'img': '/skills/Postman.svg',
      },
      {
        'category': 'Etc',
        'title': 'VSCode',
        'img_alt': 'VSCode',
        'img': '/skills/VSCode.svg',
      },
      {
        'category': 'Etc',
        'title': 'Scala',
        'img_alt': 'Scala',
        'img': '/skills/Scala.svg',
      },
    ],
  ];

  return (
    <div id='skillsComponent' className={`component-layout contents-gap`}>

      <div className='componentTitle'>
        <div className='title'>
          Skills
        </div>
        <div className='subtitle'>
          Languages, Tools, Engines, Libraries & Systems I&#39;m used to
        </div>
      </div>

      <div className={`${styles.skillsContentsDiv} contents-gap`}>

        <div className={`${styles.mainSkillsDiv}`}>

          <div className={`${styles.twoColDiv}`}>
            <div className={`${styles.oneColDiv}`}>
              <span className={`${styles.skillsCategoryTitle}`}>
                Language
              </span>
              <div className={`${styles.cardViewDiv} color-white`}>
                {data[lang_idx].map((item, index) =>
                  ("period" in item)&&
                    <div className={`${styles.cardView}`} key={index}>
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
                )}
              </div>
            </div>

            <div className={`${styles.oneColDiv}`}>
              <span className={`${styles.skillsCategoryTitle}`}>
                Frontend
              </span>
              <div className={`${styles.cardViewDiv} color-white`}>
                {data[front_idx].map((item, index) =>
                  ("period" in item)&&
                    <div className={`${styles.cardView}`} key={index}>
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
                )}
              </div>
            </div>
          </div>

          <div className={`${styles.twoColDiv}`}>
            <div className={`${styles.oneColDiv}`}>
              <span className={`${styles.skillsCategoryTitle}`}>
                Backend
              </span>
              <div className={`${styles.cardViewDiv} color-white`}>
                {data[back_idx].map((item, index) =>
                  ("period" in item)&&
                    <div className={`${styles.cardView}`} key={index}>
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
                )}
              </div>
            </div>

            <div className={`${styles.oneColDiv}`}>
              <span className={`${styles.skillsCategoryTitle}`}>
                Others
              </span>
              <div className={`${styles.cardViewDiv} color-white`}>
                {data[others_idx].map((item, index) =>
                  ("period" in item)&&
                    <div className={`${styles.cardView}`} key={index}>
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
                )}
              </div>
            </div>
          </div>


        </div>
        
        <span className={`${styles.skillsCategoryTitle}`}>
          Others
        </span>
        <div className={`${styles.etcSkillsDiv}`}>
          {data[etc_idx].map((item, index) =>
            <img className={`${styles.etcSkillsIcon} etcSkillsIconAni`} key={index} src={item.img} alt={item.img_alt}/>
          )}
        </div>
      </div>
    </div>
  )
}
