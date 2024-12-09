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

const Project = ({ title, desc, github, live }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue shadow-md shadow-[#055555]`;
  const projectTitle = title;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair strong text-deep-blue">{title}</p>
        <p className="mt-7">{desc}</p>
        <div className={`pt-8 text-center ${!github ? 'flex justify-center' : ''}`}>
          {/* Conditionally render the Code button only if a GitHub link exists */}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <button
                className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-yellow"
              >
                Code
              </button>
            </a>
          )}
          {/* Live Button, will be centered if no Code button */}
          <a href={live} target="_blank" rel="noopener noreferrer">
            <button
              className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-red ${!github ? 'w-full' : ''}`}
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
          <p className="font-playfair font-semibold text-4xl pt-20">
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
  
         
<div
            className="flex justify-center text-center items-center p-10 bg-red
            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
        >
      MODERN AND EFFICIENT WEBSITES TAILORED TO YOUR NEEDS
        </div>
          <Project 
                   title="Gym Website"
                   desc="I developed a fitness web application with a dynamic and modern design. The site was built using React and TailwindCSS, offering an engaging user interface with smooth transitions and animations. The design embodies energy, health, and motivation, aiming to provide an intuitive and motivating user experience for fitness enthusiasts."
                 
                   github="https://github.com/Wiemblhj/gym-website"
                   live="https://gym-website-3d2.pages.dev/"/>




          
<Project 
                   title="Fashion Studio Website" 
                   desc="I crafted a visually stunning landing page for a fashion studio, reflecting elegance and modernity. This project incorporates custom animations and a smooth scrolling experience to capture the essence of high-end fashion."
                   github="https://github.com/Wiemblhj/react-studio"
                   live="https://react-studio-blush.vercel.app/"/>
          {/* ROW 3 */}
         
      
          <Project 
           title="Twitter Clone" 
           desc="FullStack Twitter clone with React, Tailwind CSS, Next.JS, Prisma and MongoDB."
           github="https://github.com/Wiemblhj/twitter-clone"
           live="https://twitter-clone-kappa-murex.vercel.app/"
          />    <div
          className="flex justify-center text-center items-center p-10 bg-blue
            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
        >
CUSTOM WEBSITES THAT BLEND CREATIVITY WITH FUNCTIONALITY        </div>
                <Project 
           title="Netflix Clone" 
           desc="I created a full-stack Netflix clone, replicating the sleek and intuitive design of the popular streaming platform. The project features a polished interface with seamless navigation, built using React and TailwindCSS. "
           github="https://github.com/Wiemblhj/netflix-clone"
           live="https://netflix-clone-drab-rho.vercel.app/"
          />
    

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
