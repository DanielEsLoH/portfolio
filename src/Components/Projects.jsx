import img from '../assets/page1.png';
import superblog from '../assets/superblog.png';
import surveyrails from '../assets/survey-rails.png';
import { AiFillGithub } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import Aos from "aos";
import { useEffect } from "react";
const Projects = () => {
  useEffect(() => {
    Aos.init({duration: 1000})
  },[])
  return (
    <div id='Projects' className="p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <div>
          <div>
            <img data-aos="fade-up" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={superblog} alt="" />
          </div>
          <div className='flex justify-center items-center my-4'>
            <a href="https://github.com/DanielEsLoH/super_blog" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <AiFillGithub className="text-[28px]" />
            </a>
            <a href="https://superblog-15.fly.dev/" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FaGlobe className="text-[28px]" />
            </a>
          </div>
        </div>
        <div>
          <div>
            <img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={surveyrails} alt="" />
          </div>
          <div className='flex justify-center items-center my-4'>
            <a href="https://github.com/DanielEsLoH/course-rails" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <AiFillGithub className="text-[28px]" />
            </a>
            <a href="https://surveyrails.fly.dev/" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FaGlobe className="text-[28px]" />
            </a>
          </div>
        </div>
        <img data-aos="fade-up" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img} alt="" />
        <img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img} alt="" />
      </div>
    </div>
  );
};

export default Projects;