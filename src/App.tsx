import Drawer from './components/drawer';
import Footer from './components/footer';
import ContactSection from './sections/contact';
import ExperienceSection from './sections/experience';
import HelloSection from './sections/hello';
import ProjectSection from './sections/project';
import SkillSection from './sections/skill';

function App() {
  return (
    <>
      <Drawer />
      <HelloSection />
      <ProjectSection />
      <SkillSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
