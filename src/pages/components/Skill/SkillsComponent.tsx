import styles from "./SkillsComponent.module.css"
import SkillCardStack from './SkillCardStack';
import Skill from '@/types/Skill'

const skillCardViews = (data:Array<Array<Skill>>) => {

  let result: JSX.Element[] = [];
  for(let i = 0; i<data.length; i++){
    result.push(
      <SkillCardStack data={data[i]} key={i}/>
    )
  }
  return result;
}

export default function SkillsComponent() {

  const data: Array<Array<Skill>> = [
    // lang
    [
      {
        'category': 'Language',
        'title': 'Dart',
        'img_alt': 'Dart',
        'img': '/skills/dart.png',
        'period': '2',
        'percent': '90',
      },
      {
        'category': 'Language',
        'title': 'Javascript',
        'img_alt': 'Javascript',
        'img': '/skills/JavaScript.svg',
        'period': '4',
        'percent': '100',
      },
      {
        'category': 'Language',
        'title': 'Typescript',
        'img_alt': 'Typescript',
        'img': '/skills/TypeScript.svg',
        'period': '2',
        'percent': '80',
      },
      {
        'category': 'Language',
        'title': 'Python',
        'img_alt': 'Python',
        'img': '/skills/Python.svg',
        'period': '5',
        'percent': '90',
      },
      // {
      //   'category': 'Language',
      //   'title': 'HTML',
      //   'img_alt': 'HTML',
      //   'img': '/skills/HTML.svg',
      //   'period': '3',
      //   'percent': '90',
      // },
      // {
      //   'category': 'Language',
      //   'title': 'CSS',
      //   'img_alt': 'CSS',
      //   'img': '/skills/CSS.svg',
      //   'period': '3',
      //   'percent': '90',
      // },
      // {
      //   'category': 'Language',
      //   'title': 'Kotlin',
      //   'img_alt': 'Kotlin',
      //   'img': '/skills/Kotlin.svg',
      //   'period': '1',
      //   'percent': '60',
      // },
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
        'title': 'FlutterFlow',
        'img_alt': 'FlutterFlow',
        'img': '/skills/flutterflow.png',
        'period': '2',
        'percent': '100',
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
        'title': 'Figma',
        'img_alt': 'Figma',
        'img': '/skills/Figma.svg',
        'period': '2',
        'percent': '90',
      },
    ],
    // back
    [
      {
        'category': 'Backend',
        'title': 'Firebase',
        'img_alt': 'Firebase',
        'img': '/skills/Firebase.svg',
        'period': '2',
        'percent': '90',
      },
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
        'img': '/skills/TensorFlow.svg',
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
          {skillCardViews(data)}
        </div>
        
      </div>
    </div>
  )
}
