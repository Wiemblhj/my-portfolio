import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Type from "../components/Type";
const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (

       
        <section
          id="home"
          className="md:flex md:justify-between md:items-center gap-16 md:h-full pt-20"
        >
          {/* IMAGE SECTION */}
          <div className="basis-3/5 z-10 mt-16  md:mt-32 flex justify-center md:order-2">
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
            {isAboveLarge ? (
              <div
                className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
                before:w-full before:max-w-[200px] md:before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]"
              >
                <img
                  alt="profile"
                  className=" z-10 w-full max-w-[100px] md:max-w-[400px]"
                  src="assets/profile-image.png"
                />
              </div>
            ) : (
              <img
                alt="profile"
                className="z-10 w-full max-w-[400px] md:max-w-[600px]"
                src="assets/profile-image.png"
              />
            )}
             </motion.div>
          </div>

          {/* MAIN TEXT */}
          <div className="z-30 basis-2/5 mt-12 md:mt-32">
            {/* HEADINGS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="text-6xl font-playfair z-10 text-center md:text-start">
                Wiem {""}
                <span
                  className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
                  before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
                >
                  Belhaj
                </span>
              </p>

              <p className="mt-10 mb-7  text-center md:text-start">
              <h1 style={{ paddingBottom: 15 }} className="text-4xl">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻 
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="text-blue"> Wiem Belhaj Boubaker</strong>
              </h1>
                <Type />
              </p>
            </motion.div>

            {/* CALL TO ACTIONS */}
            <motion.div
              className="flex mt-5 justify-center md:justify-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <AnchorLink
                className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                  hover:bg-blue hover:text-white transition duration-500"
                onClick={() => setSelectedPage("contact")}
                href="#contact"
              >
                Contact Me
              </AnchorLink>
              <a
                className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                href="/assets/file/CV.pdf"
                download
              >
                <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
                  Download CV
                </div>
              </a>
            </motion.div>

            <motion.div
              className="flex mt-5 justify-center md:justify-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <SocialMediaIcons />
            </motion.div>
          </div>
        </section>
   

  
  );
};

export default Landing;
