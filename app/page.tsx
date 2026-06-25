import Header from "./components/Header";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#110720] text-white relative">
      <BackgroundEffects />
      <div className="relative z-10">
        <Header />
        <Banner />
        <Experience />
        <About />
        <Achievements />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
