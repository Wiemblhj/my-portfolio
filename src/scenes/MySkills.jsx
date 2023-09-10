


import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Nextjs from '../assets/nextjs.png';

import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const MySkills = () => {
 
  return (
    <section id="skills" className="pt-10 pb-24">
      
          <p className="font-playfair font-semibold text-4xl mb-15">
            MY <span className="text-red">SKILLS</span>
          </p>
          
      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-0 gap-0">
        {/* EXPERIENCE */}
      
    
        <div name='skills' className='w-full h-screen  text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>
          
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
              <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML5 icon" />
                  <p className='my-4'>HTML5</p>
              </div>
              <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="css3 icon" />
                  <p className='my-4'>CSS3</p>
              </div>
              <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="js icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Nextjs} alt="HTML icon" />
                  <p className='my-4'>Nextjs</p>
              </div>
              <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#055555] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              
          </div>
      </div>
    </div>
  
      </div>
      
    </section>
  );
};

export default MySkills;
