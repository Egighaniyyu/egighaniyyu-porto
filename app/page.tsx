import About from "./components/About";
import Animations from "./components/Animations";
import ClosingCTA from "./components/ClosingCTA";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Services />
      <ClosingCTA />
      <Footer />
      <Animations />
    </>
  );
}
