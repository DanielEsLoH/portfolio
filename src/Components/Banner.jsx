import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import img from '../assets/Daniel.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out-quart',
      delay: 0,
      duration: 750
    })
  },[])
  return (
    <div data-aos="fade-up" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase">Welcome to <span className="text-fuchsia-500">My Website</span></h1>
        <p data-aos="fade-left">
        Hi, I'm Daniel Esteban Londoño Henao, Full Stack developer with knowledge in technologies such as Ruby on Rails 
        "Hotwire, Turbo Frames, Turbo Streams and Stimulus JS", as well as front end technologies such as Bootstrap, 
        Taildwind, JavaScript and ReactJs. In addition to all this with a good knowledge in GitHub version manager 
        and willing to face new challenges and learn a lot. I am in constant training and updating my knowledge in order 
        to evolve in the sector.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <AiFillGithub className="text-[28px]" />
              </a>
              <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FiTwitter className="text-[28px]" />
              </a>
              <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FaInstagram className="text-[28px]" />
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