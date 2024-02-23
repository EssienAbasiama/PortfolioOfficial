import { motion } from "framer-motion";

import { styles } from "../styles";
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

          <div class="flex space-x-1 items-center mt-3">
            <h1 class="text-white text-base font-bold lg:text-xl">a/an</h1>
            <h1 class="font-bold text-xl lg:text-3xl text-[#915EFF] ">
              <div class="Typewriter" data-testid="typewriter-wrapper">
                <span class="Typewriter__wrapper">Mobile Developer </span>
                <span class="Typewriter__cursor">|</span>
              </div>
            </h1>
          </div>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop stuning visuals, web <br className="sm:block hidden" />
            applications and mobile applications
          </p> */}
          <p class="text-base lg:text-lg pt-3 pb-4">
            Welcome to my digital world! I specialize in crafting captivating
            web applications and seamless user interfaces. With creativity and
            precision, I bring ideas to life and empower businesses to thrive in
            the ever-evolving digital landscape.
          </p>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}></div>;
      <ComputersCanvas />
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
