import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { Logo } from "../components/logo";
import LineGradient from "../components/LineGradient";
import {
  // AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { CgFileDocument } from "react-icons/cg";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 `}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <div className="flex items-center justify-between mx-auto w-5/6 h-5/6 pt-2px ">
        
         <img  alt="logo"
                className="z-10 w-full max-w-[50px] md:max-w-[80px] p-2 pl-0"
            src="assets/logo wb.png"/>


          {/* DESKTOP NAV */}
          {isDesktop ? (
            <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
              <div className="flex items-center">
                
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="flex items-center">
              
                <Link
                  page="Skills"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="flex items-center">
               
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="flex items-center">
               
                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-red p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img alt="menu-icon" src="../assets/menu-icon.svg" />
            </button>
          )}

          {/* MOBILE MENU POPUP */}
          {!isDesktop && isMenuToggled && (
            <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
              {/* CLOSE ICON */}
              <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <img alt="close-icon" src="../assets/close-icon.svg" />
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Skills"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </div>
          )}
        </div>
      </motion.div>  
    </nav>
 
    
  );
};

export default Navbar;
