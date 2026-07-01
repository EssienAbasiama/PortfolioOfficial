import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const javaProjects = [
  {
    name: "Spring Boot AI Chat App",
    description:
      "An AI chatbot built with Spring Boot 3.4.4 and Spring AI, integrating OpenAI to generate dynamic conversational responses through clean, RESTful endpoints.",
    highlights: [
      "Developed an AI chatbot using Spring Boot 3.4.4 and Spring AI with OpenAI integration for dynamic conversational responses.",
      "Exposed RESTful APIs using Spring Web MVC to handle chat requests and responses efficiently.",
      "Implemented scalable backend architecture with session handling and prompt-based contextual interactions.",
      "Utilized Spring AI BOM for dependency management and seamless model integration.",
      "Enabled rapid development with Spring Boot DevTools and clean code structure using Lombok (where supported).",
    ],
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "Spring AI", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/EssienAbasiama/springbootAIChatApp",
  },
  {
    name: "Rate Limiter — System Design",
    description:
      "A system design–focused project implementing multiple rate limiting strategies with practical simulations and test servers to analyze behavior under load.",
    highlights: [
      "Implemented multiple rate limiting strategies to compare trade-offs in throughput and fairness.",
      "Built practical simulations and test servers to analyze system behavior under load.",
      "Explored real-world system design concepts around throttling and traffic shaping.",
    ],
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "System Design", color: "green-text-gradient" },
      { name: "Rate Limiting", color: "pink-text-gradient" },
    ],
    source_code_link:
      "https://github.com/EssienAbasiama/RateLimiter_SystemDesign",
  },
  {
    name: "EasyWay — Online Banking App",
    description:
      "An online banking system management application handling core banking operations with a focus on secure, reliable backend services.",
    highlights: [
      "Built an online banking system management application covering core banking operations.",
      "Focused on secure and reliable backend service design.",
    ],
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Spring Boot", color: "green-text-gradient" },
      { name: "Banking", color: "pink-text-gradient" },
    ],
    source_code_link:
      "https://github.com/EssienAbasiama/EasyWay-Online-Banking-App",
  },
  {
    name: "NestlyPay — Data API",
    description:
      "The backend data API powering NestlyPay, a payments platform that connects businesses to simplify invoicing, track sales, and get paid faster with automated reminders and role-based access.",
    highlights: [
      "Built the data API behind invoice creation, delivery, and payment status tracking.",
      "Powered automated payment reminders to help businesses secure cashflow and follow up on clients.",
      "Supported role and user management so teams can manage transactions without sharing credentials.",
      "Exposed RESTful endpoints for finance management, sales tracking, and business operations.",
    ],
    tags: [
      { name: "REST API", color: "blue-text-gradient" },
      { name: "Payments", color: "green-text-gradient" },
      { name: "Fintech", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/groomlog/Nestlypay-data-api",
  },
];

const JavaProjectCard = ({ index, name, description, highlights, tags, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.4, 0.75)}
      className="bg-tertiary p-6 rounded-2xl w-full sm:w-[360px] flex flex-col border border-[#915EFF]/20"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-semibold bg-[#915EFF]/15 text-[#915EFF] border border-[#915EFF]/40 px-3 py-[3px] rounded-full uppercase tracking-wider w-fit">
            Java Backend
          </span>
          <h3 className="text-white font-bold text-[22px] leading-tight">
            {name}
          </h3>
        </div>

        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shrink-0"
        >
          <img
            src={github}
            alt="source code"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>

      <p className="mt-3 text-secondary text-[14px] leading-[24px]">
        {description}
      </p>

      <ul className="mt-4 space-y-2 flex-1">
        {highlights.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-secondary text-[13px] leading-[22px]"
          >
            <span className="text-[#915EFF] mt-[2px] shrink-0">▸</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const JavaProjects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Backend Engineering</p>
        <h2 className={`${styles.sectionHeadText}`}>Java Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Full-Stack Java Developer with 3.5+ years of experience delivering
          enterprise-grade applications using Java, Spring Boot, React, and
          PostgreSQL. Proven track record in microservices architecture, RESTful
          API design, Redis caching, and AWS cloud services — achieving 99.9%
          uptime across production systems and 40% faster API response times.
        </motion.p>
      </div>

      <div className="mt-16 flex flex-wrap gap-7">
        {javaProjects.map((project, index) => (
          <JavaProjectCard key={`java-project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(JavaProjects, "java-projects");
