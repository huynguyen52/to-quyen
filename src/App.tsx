import { useEffect, useRef } from 'react';
import Drawer from './components/drawer';
import Footer from './components/footer';
import ContactSection from './sections/contact';
import ExperienceSection from './sections/experience';
import HelloSection from './sections/hello';
import ProjectSection from './sections/project';
import SkillSection from './sections/skill';

const handleMouseMove = (e: MouseEvent, neon: HTMLDivElement) => {
  const mouseX = e.pageX;
  const mouseY = e.pageY;

  neon.style.left = `${mouseX - 25}px`;
  neon.style.top = `${mouseY - 25}px`;
  neon.style.opacity = '1';
};

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const neonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const neon = neonRef.current;
    if (container && neon) {
      container.addEventListener('mousemove', (e) => {
        handleMouseMove(e, neon);
      });

      container.addEventListener('wheel', (e) => {
        handleMouseMove(e, neon);
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      <div
        ref={neonRef}
        className="absolute top-0 left-0 w-12 h-12 rounded-full bg-[#939aff] bg-opacity-30 pointer-events-none opacity-0 blur-md"
      ></div>
      <Drawer />
      <HelloSection />
      <ProjectSection />
      <SkillSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
