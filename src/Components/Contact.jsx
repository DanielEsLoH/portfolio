import Aos from "aos";
import { useEffect } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_ffvwuwc";
    const templateID = "template_1ptdmks";
    const apikey = "ktLre9NU1NvG9yAqa";

    emailjs.sendForm(serviceId, templateID, refForm.current, apikey)
      .then( result => {
        console.log(result.text);
        refForm.current.reset(); // Limpia el formulario después de enviarlo
      })
      .catch( error => console.error(error))
  }

  useEffect(() => {
    Aos.init({duration: 1000})
  },[])
  return (
    <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">Contact Me</h1>
      <form ref={refForm} action="" onSubmit={handleSubmit} className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-9 ">
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500" placeholder="Enter Your Name" type="text" name="username"  required/>
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500" placeholder="Enter Your Email" type="email" name="email" required />
        </div>
        <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500" placeholder="Write You Message..." name="message" id="" cols="30" rows="10" required></textarea>
        <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white bg-fuchsia-800 hover:bg-slate-900 rounded-lg p-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;