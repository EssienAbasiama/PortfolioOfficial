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
      "I thought it was impossible to make a website as beautiful as our product, but Essien proved me wrong.",
    name: "Emmanuel",
    designation: "CEO",
    company: "Acme Co",
    image: "https://th.bing.com/th/id/OIP.TWlqzu7Ppu755bSsv1i_qAHaLH?rs=1&pid=ImgDetMain",
  },
  {
    testimonial:
      "Working with Essien has been an absolute pleasure. His exceptional web development skills brought our project to life. His attention to detail, creativity, and ability to turn our ideas into a functional and visually stunning website exceeded our expectations. We highly recommend Essien for anyone seeking a top-notch web developer!",
    name: "Gabriel",
    designation: "Product Designer",
    company: "Standee",
    image: "data:image/jpeg;base64,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",
  },
  {
    testimonial:
      "After Essien optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Omolayo",
    designation: "Marketing Lead",
    company: "456 Enterprises",
    image: "https://th.bing.com/th/id/OIP._ylU-x21IxUktAffZ7rZcAHaE8?w=186&h=124&c=7&r=0&o=5&pid=1.7",
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