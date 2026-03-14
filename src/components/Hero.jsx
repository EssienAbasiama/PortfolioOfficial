import React, { useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { styles } from "../styles";
import EssienResume from "./../assets/EssienAbasiamaReactJsResume.pdf";

const Hero = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titles = gsap.utils.toArray(".Typewriter__wrapper");

      if (!titles.length) {
        return;
      }

      gsap.set(titles, {
        opacity: 0,
        y: 16,
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
      });

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });

      titles.forEach((title) => {
        tl.to(title, {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
        })
          .to(title, {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "none",
          })
          .to(title, {
            opacity: 0,
            y: -16,
            duration: 0.35,
            ease: "power2.in",
          });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={`relative w-full min-h-[980px] sm:h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[78px] sm:top-[88px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-4 sm:gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-36 h-40 violet-gradient" />
        </div>

        <div className="max-w-3xl w-full pr-1">
          <div
            className="Typewriter relative overflow-hidden min-h-[18px] sm:min-h-[16px] lg:min-h-[20px]"
            data-testid="typewriter-wrapper"
          >
            <p
              style={{ lineHeight: 1.1 }}
              className="Typewriter__wrapper m-0 text-[#915EFF] text-[11px] xs:text-[12px] sm:text-[14px] lg:text-[18px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.22em]"
            >
              Senior Mobile Engineer
            </p>
            <p
              style={{ lineHeight: 1.1 }}
              className="Typewriter__wrapper m-0 text-[#915EFF] text-[11px] xs:text-[12px] sm:text-[14px] lg:text-[18px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.22em]"
            >
              React Native + Backend Systems
            </p>
          </div>

          <h1 className={`${styles.heroHeadText} text-white mt-0`}>
            Mobile Engineer building scalable
            <br></br>
            <span className="text-[#915EFF]">React Native applications.</span>
          </h1>

          <div className="pt-3 sm:pt-4 space-y-3 sm:space-y-4 max-w-2xl">
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[24px] sm:leading-[28px] lg:leading-[30px] text-white/90">
              I specialize in building production mobile applications with React
              Native and modern backend systems.
            </p>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[24px] sm:leading-[28px] lg:leading-[30px] text-white/90">
              I have successfully shipped multiple apps to the Apple App Store
              and build software that helps organizations improve productivity,
              workforce operations, and data-driven decision making.
            </p>
          </div>

          <div className="mt-5 sm:mt-6 inline-flex flex-col gap-1 rounded-2xl border border-[#915EFF]/30 bg-[#915EFF]/10 px-4 py-3">
            <p className="text-[#915EFF] font-semibold text-[14px] sm:text-[15px] lg:text-[17px] tracking-wide">
              React Native Mobile Engineer
            </p>
            <p className="text-white font-medium text-[12px] sm:text-[13px] lg:text-[15px]">
              2 Apps shipped to the Apple App Store
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-4 sm:pt-5 pb-5">
            <span className="rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-[12px] lg:text-[14px] font-medium text-white">
              React Native
            </span>
            <span className="rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-[12px] lg:text-[14px] font-medium text-white">
              TypeScript
            </span>
            <span className="rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-[12px] lg:text-[14px] font-medium text-white">
              Node.js
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div
              className="cursor-pointer flex items-center gap-2 border-[4px] w-[99px]
                  h-[40px] rounded-md uppercase font-semibold justify-center  lg:text-base lg:w-[130px] lg:h-[50px] bg-[#222] text-[13px] border-b-[#915EFF] border-t-0 border-r-0 border-l-0 lg:mt-3"
            >
              <a
                href={EssienResume}
                download="EssienAbasiamaResume"
                className=""
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
