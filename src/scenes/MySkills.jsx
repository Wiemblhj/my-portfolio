


import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/js.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import PS from '../assets/ps.png';
import Tailwind from '../assets/tailwind.png';
import Ai from '../assets/ai.png';
import ID from '../assets/id.png';
import Figma from '../assets/figma.webp';
import Elementor from '../assets/elemntor.webp';
import Canva from '../assets/canva.png';
import Skilldev from '../assets/dev.png'; 
import Skilluidesign from '../assets/ux-ui.png'; 
import AnchorLink from "react-anchor-link-smooth-scroll"; // Import AnchorLink

import Skillgrapghic from '../assets/graphic.png'; 


const MySkills = ({ setSelectedPage }) => {
  return (
    <section id="skills" className="pt-10 pb-24">
      <p className="font-playfair font-semibold text-4xl mb-15">
        MY <span className="text-red">SKILLS</span>
      </p>

      {/* SKILLS CONTAINER */}
      <div className="md:flex md:justify-between gap-10 mt-10">
        {/* LEFT COLUMN: Skills */}
        <div className='w-full md:w-1/2 text-gray-300'>
          <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>
            <p className=" ">
            1.  <span className="font-playfair font-semibold text-4xl mb-10 text-white">Web Development
              </span>
            </p>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8'>
              <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML5 icon" />
                <p className='my-4'>HTML5</p>
              </div>
              <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="CSS3 icon" />
                <p className='my-4'>CSS3</p>
              </div>
              <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                <p className='my-4'>React</p>
              </div>
             
              <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt="Node.js icon" />
                <p className='my-4'>Node.js</p>
              </div>
            
              <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind CSS icon" />
                <p className='my-4'>Tailwind</p>
              </div>
            </div>
            <AnchorLink
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500 self-start"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Let's Build Your Next Website
            </AnchorLink>
          </div>
        </div>

        {/* RIGHT COLUMN: Image */}
        <div className='w-full md:w-1/3 flex justify-center items-center'>
          <img src={Skilldev} alt="My Skill Representation" className='w-full h-auto max-w-xl' />
        </div>
      </div>
       {/* Skillgrapghic CONTAINER */}
       <div className="md:flex md:justify-between gap-10 mt-10  bg-[#00034d] p-10 rounded-lg">
  {/* Left Column: Image */}
  <div className='w-full md:w-1/3 flex justify-start items-start'>
    <img src={Skillgrapghic} alt="My Skill Representation" className='w-full h-auto max-w-xl' />
  </div>

  {/* Right Column: Skills */}
  <div className='w-full md:w-1/2 text-gray-300'>
    <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>
    <p className=" ">
            2.  <span className="font-playfair font-semibold text-4xl mb-10 text-white">Graphic Design
              </span>
            </p>

      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
        <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Ai} alt="HTML5 icon" />
          <p className='my-4'>Illustrator</p>
        </div>
        <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={PS} alt="CSS3 icon" />
          <p className='my-4'>Photoshop</p>
        </div>
        <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={ID} alt="JavaScript icon" />
          <p className='my-4'>InDesign</p>
        </div>
        <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Canva} alt="React icon" />
          <p className='my-4'>Canva</p>
        </div>
    
      </div>
      <AnchorLink
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500 self-start"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              
            
              Bring Your Brand to Life        </AnchorLink>
    </div>
  </div>
</div>

      {/* SKILLSui-design CONTAINER */}
      <div className="md:flex md:justify-between gap-10 mt-10">
        {/* LEFT COLUMN: Skills */}
        <div className='w-full md:w-1/2 text-gray-300'>
          <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>
            <p className=" ">
            3.  <span className="font-playfair font-semibold text-4xl mb-10 text-white">Web Design (UI/UX)
              </span>
            </p>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8'>
              
              <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Figma} alt="HTML5 icon" />
                <p className='my-4'>Figma</p>
              </div>
              <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Elementor} alt="CSS3 icon" />
                <p className='my-4'>Elementor</p>
              </div>
            </div>          <p>By blending creativity with technical expertise, I create responsive and aesthetically pleasing interfaces that provide seamless navigation across devices. With tools like Figma, WordPress, and Elementor, I ensure that each project not only meets the client’s goals but also delivers an enjoyable user experience.</p>
            <AnchorLink
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500 self-start"
              onClick={() => setSelectedPage("contact")}
              href="#contact"            >
              
            
              Reach Out for Design Collaboration            </AnchorLink>
          </div>

        </div>

        {/* RIGHT COLUMN: Image */}
        <div className='w-full md:w-1/3 flex justify-center items-center'>
          <img src={Skilluidesign} alt="My Skill Representation" className='w-full h-auto max-w-xl' />
        </div>
      </div>
     
    </section>
  );
};

export default MySkills;
