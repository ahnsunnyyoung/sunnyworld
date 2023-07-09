import AboutComponent from './About/AboutComponent';
import SkillsComponent from './Skill/SkillsComponent';
import EducationComponent from './Education/EducationComponent';
import ExperiencesComponent from './Experiences/ExperiencesComponent';
import ProjectsComponent from './Projects/ProjectsComponent';

export default function ContentsSection() {

  return (
    <section id='contentsSection'>
      <AboutComponent/>
      <SkillsComponent/>
      <EducationComponent/>
      <ExperiencesComponent/>
      <ProjectsComponent/>
    </section>
  )
}
