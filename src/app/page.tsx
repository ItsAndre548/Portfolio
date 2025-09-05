import Hero from "./components/hero";
import Header from "./components/header";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="max-w-[1440px] px-12 mx-auto">
      <Header />
      <Hero />
      <Skills skills={['React', 'TypeScript', 'Tailwind', 'SASS', 'Next.js', 'LIQUID']} />
      <Projects />
      <Footer />
    </div>
  );
}
