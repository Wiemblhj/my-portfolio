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
          className="md:flex md:justify-between md:items-center gap-26 md:h-full pt-20 "
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
                className="relative z-0 ml-10 before:absolute before:-top-10 before:-left-10 
                before:w-full before:max-w-[500px] md:before:max-w-[450px] before:h-full before:border-2 before:border-blue before:z-[-1] before:rounded-[20px]  "
              >
<AnchorLink href="#contact">
  <img
    alt="profile"
    className="z-10 w-full max-w-[100px] md:max-w-[450px] rounded-[20px] transition duration-500 hover:filter hover:contrast-125"
    src="assets/profile-img.png"
  />
</AnchorLink>


              </div>
            ) : (
              <img
                alt="profile"
                className="z-10 w-full max-w-[400px] md:max-w-[800px] rounded-[20px]"
                src="assets/profile-img.png "
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
              <p>With expertise in web development, UI/UX design, and graphic design, I help businesses and creators build digital experiences that are not only visually appealing but also functional and user-friendly.</p>
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
                href="/assets/file/CV-WiemBelhajBoubaker.pdf"
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
