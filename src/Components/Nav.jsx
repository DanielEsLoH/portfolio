import { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import img from '../assets/ruby.png'

const Nav = () => {
  const [click, setClick] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleClick = () => setClick(!click);

  useEffect(() => {
    Events.scrollEvent.register('end', function(to, element) {
      setActiveLink(to);
    });

    scrollSpy.update();

    // Actualizar el enlace activo al desplazarse sin hacer clic en la barra de navegación
    const handleScroll = () => {
      const sections = ["Home", "About", "Services", "Projects", "Contact"];
      const scrollPosition = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);

        if (element.offsetTop <= scrollPosition + 100) {
          setActiveLink(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = (link) => {
    setActiveLink(link);
  };

  const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} to="Home">
          <li className={`my-4 py-4 border-b border-slate-800 ${activeLink === "Home" ? "bg-slate-800 rounded-lg" : "hover:bg-slate-800 hover:rounded-lg"}`}>Home</li>
        </Link>

        <Link spy={true} smooth={true} to="About">
          <li className={`my-4 py-4 border-b border-slate-800 ${activeLink === "About" ? "bg-slate-800 rounded-lg" : "hover:bg-slate-800 hover:rounded-lg"}`}>About</li>
        </Link>

        <Link spy={true} smooth={true} to="Services">
          <li className={`my-4 py-4 border-b border-slate-800 ${activeLink === "Services" ? "bg-slate-800 rounded-lg" : "hover:bg-slate-800 hover:rounded-lg"}`}>Services</li>
        </Link>

        <Link spy={true} smooth={true} to="Projects">
          <li className={`my-4 py-4 border-b border-slate-800 ${activeLink === "Projects" ? "bg-slate-800 rounded-lg" : "hover:bg-slate-800 hover:rounded-lg"}`}>Projects</li>
        </Link>

        <Link spy={true} smooth={true} to="Contact">
          <li className={`my-4 py-4 border-b border-slate-800 ${activeLink === "Contact" ? "bg-slate-800 rounded-lg" : "hover:bg-slate-800 hover:rounded-lg"}`}>Contact</li>
        </Link>
      </ul>
    </div>
  </>

  return (
    <nav className="sticky top-0 bg-slate-900">
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
        <div className="flex items-center flex-1">
          <img src={img} width={31} height={31} />
          <span className="text-3xl font-bold ml-3">DLH</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className={`hover:text-fuchsia-600 transition border-b-2 ${activeLink === "Home" ? "text-fuchsia-600 border-fuchsia-600" : "border-slate-900 hover:border-fuchsia-600"} cursor-pointer`}>Home</li>
              </Link>

              <Link spy={true} smooth={true} to="About">
                <li className={`hover:text-fuchsia-600 transition border-b-2 ${activeLink === "About" ? "text-fuchsia-600 border-fuchsia-600" : "border-slate-900 hover:border-fuchsia-600"} cursor-pointer`}>About</li>
              </Link>

              <Link spy={true} smooth={true} to="Services">
                <li className={`hover:text-fuchsia-600 transition border-b-2 ${activeLink === "Services" ? "text-fuchsia-600 border-fuchsia-600" : "border-slate-900 hover:border-fuchsia-600"} cursor-pointer`}>Services</li>
              </Link>

              <Link spy={true} smooth={true} to="Projects">
                <li className={`hover:text-fuchsia-600 transition border-b-2 ${activeLink === "Projects" ? "text-fuchsia-600 border-fuchsia-600" : "border-slate-900 hover:border-fuchsia-600"} cursor-pointer`}>Projects</li>
              </Link>

              <Link spy={true} smooth={true} to="Contact">
                <li className={`hover:text-fuchsia-600 transition border-b-2 ${activeLink === "Contact" ? "text-fuchsia-600 border-fuchsia-600" : "border-slate-900 hover:border-fuchsia-600"} cursor-pointer`}>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes/> : <CiMenuFries/>}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
