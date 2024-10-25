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
  threejs,
  btp,
  Qkart,
  TicTacToe,
  SimpleScribbles,
  Tailwebs,
  OnelabLogo,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Being The Parent",
    icon: btp,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "SDE - 1",
    company_name: "Onelab Ventures",
    icon: OnelabLogo,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Present",
    points: [
      "Design and maintain scalable web applications using the MERN Stack, integrating cloud services like AWS Amplify and EC2 for deployment.",
      "Collaborate closely with clients and cross-functional teams (designers, product managers, and developers) to ensure product alignment and high-quality delivery.",
      "Build and manage RESTful APIs for seamless client-server communication and optimized application performance.",
      "Ensure responsive design, cross-browser compatibility, and incorporate DevOps practices with Docker for efficient deployment workflows.",
      "Conduct code reviews, maintain clean code, and troubleshoot for optimal application performance and reliability.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Aditya's frontend skills perfectly complemented our backend work, leading to a seamless and effective collaboration.",
    name: "Dhanush C.",
    designation: "Senior Software Engineer",
    company: "BeingTheParent",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Aditya consistently demonstrates a keen eye for detail and a deep understanding of user-centric design principles, elevating our projects with thoughtful and intuitive interfaces.",
    name: "Chirag Jain",
    designation: "Senior UI/UX Designer",
    company: "BeingTheParent",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Working with Aditya was an absolute pleasure! His expertise in translating complex ideas into engaging user experiences truly sets them apart in the field.",
    name: "Manav Dudhoria",
    designation: "Freelance Marketer",
    company: "",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Qkart",
    description:
      "Web-based platform that allows users to search, browse, and add products to cart from various providers, providing a convenient and efficient shopping experience.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "hooks",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: Qkart,
    source_code_link:
      "https://github.com/AdityaRastogi18/Qkart-Frontend/tree/main/shubhrastogi14-ME_QKART_FRONTEND_V2-master",
    live_link: "https://qkart-ar.netlify.app/",
  },
  {
    name: "Teachers Portal",
    description:
      "A dynamic student management system with features including a login screen, dynamic search, student subject management, and secure authentication using Passport.js JWT service.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "cyan-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
    ],
    image: Tailwebs,
    source_code_link: "https://github.com/AdityaRastogi18/tailwebs-fronted",
    live_link: "https://tailwebs-fronted.vercel.app/login",
  },
  {
    name: "Simple Scribbles",
    description:
      "A personal blogging website built with Next.js offers a dynamic platform for an individual to share their thoughts, experiences, and expertise through engaging content. With Next.js's efficient server-side rendering.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "cyan-text-gradient",
      },
    ],
    image: SimpleScribbles,
    source_code_link: "https://github.com/",
    live_link: "https://simple-scribbles.vercel.app/",
  },
];

const tags = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "React",
  "Next.js",
  "UI/UX",
  "animation",
  "Three.js",
  "webdev",
  "GIT",
  "Bootstrap",
  "Node",
  "MySql",
  "Github",
];

export { services, technologies, experiences, testimonials, projects, tags };
