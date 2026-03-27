import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutContactSection } from './components/AboutContactSection';
import { TechStackSection } from './components/TechStackSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-surface-dim text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-tertiary/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] left-[5%] w-[1px] h-[60%] bg-white/5"></div>
        <div className="absolute top-[30%] right-[10%] w-[200px] h-[1px] bg-white/5"></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <div id="home" className="scroll-mt-24"><HeroSection /></div>
        <div id="about" className="scroll-mt-24"><AboutContactSection /></div>
        <div id="experience" className="scroll-mt-24"><ExperienceSection /></div>
        <div id="skills" className="scroll-mt-24"><TechStackSection /></div>
        <div id="certifications" className="scroll-mt-24"><CertificationsSection /></div>
        <div id="projects" className="scroll-mt-24"><ProjectsSection /></div>
        <div id="contact"><Footer /></div>
      </div>
    </div>
  );
}

export default App;
