import React, { useRef,useState,useEffect } from "react";
import Navbar from "../NavBar/Navbar";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import { getSkillsList } from "../Skills/skillsUtiles";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Project from "../Project/Project";
import {ThemeProvider} from '../Context/Theme'

function MainPage() {
  const skillsList = getSkillsList();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const [themeMode, setThemeMode] = useState("mode-light");

  const darkTheme = () => {
    setThemeMode("mode-dark");
  };

  const lightTheme = () => {
    setThemeMode("mode-light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("mode-dark", "mode-light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="font-sans min-h-screen h-full w-full">
          <Navbar
            homeRef={homeRef}
            aboutRef={aboutRef}
            projectRef={projectRef}
            contactRef={contactRef}
          />
          <div ref={homeRef}>
            <Home />
          </div>
          <div ref={aboutRef} className="min-h-screen h-full">
            <About />
            <Skills skillsList={skillsList} />
          </div>
          <div ref={projectRef}>
            <Project />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
export default MainPage;
