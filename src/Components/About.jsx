const About = () => {
  return (
    <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">About me</h1>
        <p data-aos="fade-left" className="text-justify">
        Hi, I'm Daniel Esteban Londoño Henao, full stack developer with knowledge in technologies like Ruby on Rails 
        "Hotwire, Turbo Frames, Turbo Streams and Stimulus JS", as well as front end technologies like Bootstrap, 
        Taildwind, JavaScript and ReactJs. In addition to all this with a good knowledge in GitHub version manager and 
        willing to face new challenges and learn a lot. I am constantly training and updating my knowledge to evolve in the industry.
        </p>
        <div className="flex flex-col items-center mt-8 gap-2">
          <div className="flex items-center justify-center">
            <a
              data-aos="fade-right"
              className="
                neno-button shadow-xl hover:shadow-fuchsia-800/50 
                text-white border-2 hover:bg-fuchsia-800
                border-fuchsia-800 rounded-lg p-4 px-8 
                uppercase relative overflow-hidden  hover:text-black
              "
              href="https://drive.google.com/file/d/1KSgewToFW30DZS87OG9e_edhrgKhacLd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Curriculum
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;