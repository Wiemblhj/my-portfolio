import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title ,desc ,github ,live} ) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue shadow-md shadow-[#055555]`;
  const projectTitle = title;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair strong text-deep-blue">{title}</p>
        <p className="mt-7">
        {desc}</p>
        <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href= {github} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg  hover:text-yellow"
          >
            Code
          </button>
        </a>
        {/* eslint-disable-next-line */}
        <a href={live} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:text-red "
          >
            Live
          </button>
        </a>
      </div>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
      
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-4 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl ">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        I have built various different projects . If you want to see more examples 
        of my work than the ones showcased in this site, please <span><AnchorLink
            className="text-yellow"
         
            href="#contact"
          >
            contact me!
          </AnchorLink></span>
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project 
                   title="Gym Website"
                   desc="This is a Typescript Fitness Application .For frontend, we used React,
                          Typescript, Vite, Tailwind, Hero Icons, Framer Motion, Form Submit,
                           React Anchor Link Smooth Scroll."
                 
                   github="https://github.com/Wiemblhj/gym-website"
                   live="https://gym-website-3d2.pages.dev/"/>
          <Project 
                   title="Fashion Studio Website" 
                   desc="Landing page with React JS. This website is created using locomotive-scroll 
                         for smooth scrolling. Also, GSAP and Framer-Motion for some custom animations and effects. Y"
                   github="https://github.com/Wiemblhj/react-studio"
                   live="https://react-studio-blush.vercel.app/"/>

          {/* ROW 2 */}
          <Project 
           title="Netflix Clone" 
           desc="FullStack Netflix Clone using React, NextJS, TailwindCSS & Prisma."
           github="https://github.com/Wiemblhj/netflix-clone"
           live="https://netflix-clone-drab-rho.vercel.app/"
          />
          <Project 
           title="Twitter Clone" 
           desc="FullStack Twitter clone with React, Tailwind CSS, Next.JS, Prisma and MongoDB."
           github="https://github.com/Wiemblhj/twitter-clone"
           live="https://twitter-clone-kappa-murex.vercel.app/"
          />
          

          {/* ROW 3 */}
         
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
