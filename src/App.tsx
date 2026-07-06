import { About } from './components/About';
import { Contact } from './components/Contact';
import { CurrentFocus } from './components/CurrentFocus';
import { FocusAreas } from './components/FocusAreas';
import { Footer } from './components/Footer';
import { GitHubStats } from './components/GitHubStats';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <Skills />
        <Projects />
        <CurrentFocus />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
