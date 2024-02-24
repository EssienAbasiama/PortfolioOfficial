import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  codelearnershub,
  groomlog,
  p2pfi,
  nestlypay,
  geegpay,
  getlinked,
  wibe,
  clearlink,
  grammce,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "MobileApp Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
  {
    title: "Brand Identity Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FrontEnd Engineer Lead",
    company_name: "Groomlog",
    icon: groomlog,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "P2PFI",
    icon: p2pfi,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Nestlypay",
    icon: nestlypay,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Developer Intern",
    company_name: "CodeLearnersHub",
    icon: codelearnershub,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GeegPay",
    description:
      "Explore my Finance Monitoring Web Page—a sleek solution for tracking spending and managing finances. Effortlessly monitor income, set budgets, and gain insights for smarter financial decisions. Elevate your financial journey with user-friendly tools. Discover a snapshot of financial wellness on my portfolio.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chart.io",
        color: "green-text-gradient",
      },
      {
        name: "tooltip",
        color: "pink-text-gradient",
      },
    ],
    image: geegpay,
    source_code_link: "https://github.com/EssienAbasiama/geegpay-Challenge",
    live_site_link: "https://geegpay-challenge-eta.vercel.app/"
  },
  {
    name: "getLinked",
    description:
      "GetLinked Hackathon Project: I contributed to a vision-driven endeavor, turning ideas into impactful solutions. Explore my role in solving real-world challenges and pushing tech boundaries at the GetLinked Hackathon—a showcase of innovation in my portfolio.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "animation",
        color: "pink-text-gradient",
      },
    ],
    image: getlinked,
    source_code_link: "https://github.com/EssienAbasiama/linked",

    live_site_link: "https://get-linked2-0.vercel.app/"
  },
  {
    name: "Wibe Studio",
    description:
      "California-based Fashion Studio: Crafting unique designs and exquisite jewelry. Fashion, our art, transcends boundaries with creativity and happiness. Our vision is to make fashion easy and delightful for all.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "animation.css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: wibe,
    source_code_link: "https://github.com/EssienAbasiama/wibe-studio-house",
    live_site_link: "https://wibe-studio-umber.vercel.app/"
  },
  {
    name: "ClearLink",
    description:
      "ClearLink: Uniting the world, one crystal-clear video call at a time. Experience the future of communication with unparalleled simplicity. Start your free trial and discover AI assistant avatargroup. Rated 5.0 from 3,000+ reviews.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: clearlink,
    source_code_link: "https://github.com/EssienAbasiama/clearLink",
    live_site_link: "https://clear-link-swart.vercel.app/"
  },
  {
    name: "Grammercetamol",
    description:
      "The Grammcetamol Clinic: Speak English more naturally with confidence and stunning diction. Discover the secrets to fat fluency, boost your word power, and enhance your pronunciation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: grammce,
    source_code_link: "https://github.com/EssienAbasiama/grammercetamol-interface",

    live_site_link: "https://grammercetamoll.netlify.app/"
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",

    live_site_link: "https://geegpay-challenge-eta.vercel.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };