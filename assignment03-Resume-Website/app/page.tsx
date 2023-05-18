import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";

export default function Home() {
  return ( 
    <main>
      <SocialLinks/>
      <Header/>
      {/* <Navbar/> */}
      <HeroSection/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
    </main>
  )
}
