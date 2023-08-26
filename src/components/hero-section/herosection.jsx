// import { fadeUp } from "../animations";
// import Skills from "../../sub-components/Skills";
import "./herosection.scss"
import About from "../About/about";
import Globe from "../globe/globe";

// const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const HeroSection = () => {
  // animation for the about page
//   useEffect(() => {
//     gsap.from(".about__inner", {
//       y: 100,
//       opacity: 0,
//       duration: 1,
//       delay: 1.2,
//       ease: "easeInOut",
//     });
//   }, []);



  return (
    <div className="herosection">
    <About />
    <Globe />

    </div>
  );
};

export default HeroSection;

