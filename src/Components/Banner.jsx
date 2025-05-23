import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import img from '../assets/Daniel-1.jpg';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";
const Banner = () => {
  useEffect(() => {
    Aos.init({duration: 1000})
  },[])
  return (
    <div id="Home" data-aos="fade-up" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase">Welcome to <span className="text-fuchsia-500">My Website</span></h1>
        <p data-aos="fade-left" className="text-justify">
          Thank you for wanting to know more about my work, here you can find some of the projects that he managed to develop, 
          also interact with the web pages through the links that are pinned and finally contact me to start working with them.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a href="https://github.com/DanielEsLoH" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <AiFillGithub className="text-[28px]" />
              </a>
              <a href="https://www.linkedin.com/in/daniel-esteban-londo%C3%B1o-henao-b9212b1b9" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a href="https://twitter.com/Daniel_EsLoH" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FaXTwitter className="text-[28px]" />
              </a>
              <a href="https://wa.me/573108563748" target="_blank" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FaWhatsapp className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img data-aos="fade-up" src={img} width={290} height={290} className="rounded-full border-2 p-1 border-fuchsia-500 img_glow" alt="" />
    </div>
  );
};

export default Banner;