import React, { useEffect, useState, useRef } from "react";
import Loader from "./components/Loader";
import { AnimatePresence, motion } from "framer-motion";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import MySkills from "./scenes/MySkills";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer1 from "./scenes/Footer1";


function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay for 3 seconds
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
   
    <div className="app bg-deep-blue" ref={containerRef}>
      <AnimatePresence>
        {Loaded ? null : <Loader />}
        {Loaded && (
          <>
            <Navbar
              isTopOfPage={isTopOfPage}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <div className="w-5/6 mx-auto">
              {isDesktop && (
                <DotGroup
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              )}
              <motion.div
                margin="0 0 -200px 0"
                amount="all"
                onViewportEnter={() => setSelectedPage("home")}
              >
                <Landing setSelectedPage={setSelectedPage} />
              </motion.div>
            </div>
            <LineGradient />
        
            <LineGradient />
            <LineGradient />
            <div className="w-5/6 mx-auto  ">
              <motion.div
                margin="0 0 -400px 0"
                amount="all"
                onViewportEnter={() => setSelectedPage("skills")}
              >
                <MySkills />
              </motion.div>
            </div>
            <LineGradient />
            <div className="w-5/6 mx-auto">
              <motion.div
                margin="0 0 -400px 0"
                amount="all"
                onViewportEnter={() => setSelectedPage("projects")}
              >
                <Projects />
              </motion.div>
            </div>
            <LineGradient />
            <LineGradient />
            <div className="w-5/6 mx-auto ">
              <motion.div
                margin="0 0 -400px 0"
                amount="all"
                onViewportEnter={() => setSelectedPage("contact")}
              >
                <Contact />
                    
       
              </motion.div>
            </div>
            <LineGradient />
            <LineGradient />
            <Footer1 /><LineGradient />
          </>
        )}
      </AnimatePresence>
    </div>
    </>
  );
}

export default App;
