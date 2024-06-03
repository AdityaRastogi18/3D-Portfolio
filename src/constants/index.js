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
      // "⁠Implemented dynamic data visualization in Admin Portal using React Recharts, reducing decision-making time by 40%.",
      // "Engineered robust access controls with role-based system in Admin Portal using Bootstrap and React.",
      // "⁠Streamlined content creation in Admin Portal, enhancing operational efficiencies and data governance.",
      // "⁠Deployed Single Sign-On (SSO) solution across sub-brands, integrating Apple and Google Sign-In, increasing user retention by 15% and conversion rates by 25%.",
      // "Led frontend development of AdTech platform with Ant Design, React CSV, and ApexCharts, boosting advertising revenue.",
      // "⁠Implemented Context APIs for advanced state management in AdTech platform, optimizing user experience and operational efficiency.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
        name: "react",
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
    live_link: "https://qkart-ar.netlify.app/"
  },
  {
    name: "Tic Tac Toe Game",
    description:
      "A web-based Tic Tac Toe game designed for simple, pass-and-play fun. Users can seamlessly take turns with friends, enjoying a classic game of strategy in a straightforward and accessible format.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: TicTacToe,
    source_code_link: "https://github.com/AdityaRastogi18/SimpleScribbles",
    live_link: ""
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
        color: "green-text-gradient",
      },
    ],
    image: SimpleScribbles,
    source_code_link: "https://github.com/",
    live_link: ""
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
  "Github"
];

export { services, technologies, experiences, testimonials, projects, tags };
