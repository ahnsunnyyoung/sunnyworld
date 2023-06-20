import AboutComponent from './components/AboutComponent';
import SkillsComponent from './components/SkillsComponent';
import EducationComponent from './components/EducationComponent';
import ExperiencesComponent from './components/ExperiencesComponent';
import ProjectsComponent from './components/ProjectsComponent';

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
