import { motion } from "framer-motion";

import { styles } from "../styles";
import "./style.css";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-36 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi there,
            <br></br>
            I'm <span className="text-[#915EFF]">Essien</span>
          </h1>

          <div className="flex space-x-1 items-center mt-3">
            <h1 className="text-white text-base font-bold lg:text-xl">a/an{"---  "}</h1>
            <h1 className="font-bold text-xl lg:text-3xl text-[#915EFF] ">
            <div className="flex flex-col Typewriter" data-testid="typewriter-wrapper">

                <span className="Typewriter__wrapper">Frontend Developer </span>
                <span className="Typewriter__wrapper">Backend Developer </span>
                <span className="Typewriter__wrapper">Mobile Developer </span>
                <span className="Typewriter__wrapper">Brand Identity Designer</span>
                <span className="Typewriter__wrapper">Graphic Designer</span>
                {/* <span class="Typewriter__cursor">|</span> */}
              </div>
            </h1>
          </div>
          <p class="text-base lg:text-lg pt-3 pb-4">
            Welcome to my digital world! I specialize in crafting<br>
            </br> 
            captivating web applications and seamless user interfaces.<br></br> 
            With creativity and precision, I bring ideas to life and empower<br></br> 
            businesses to thrive in the ever-evolving digital landscape.
          </p>
          <div class="flex items-center gap-2 ">
            <div
              class="cursor-pointer flex items-center gap-2 border-[4px] w-[99px]
                  h-[40px] rounded-md uppercase font-semibold justify-center  lg:text-base lg:w-[130px] lg:h-[50px] bg-[#222] text-[13px] border-b-[#915EFF] border-t-0 border-r-0 border-l-0 lg:mt-3"
            >
              <a
                href="/assets/Essien-Abasiama-FrontEnd-Resume.pdf"
                download="Resume"
                class=""
              >
                Resume 
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="15"
                height="15"
                fill="currentColor"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}></div>;
      {/* <ComputersCanvas /> */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
