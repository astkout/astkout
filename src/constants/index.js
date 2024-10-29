import { title } from "framer-motion/client";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Asterios was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Asterios’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Asterios. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "Neighbour",
    img: "assets/review4.png",
    review:
      "He might be stretching the truth a bit—no developer job experience yet—but he's giving it everything he's got! I think you should give him a shot. I'll go ahead and give him 5 stars anyway, because hey, he's a good guy.",
  },
];

export const myProjects = [
  {
    title: "Finance",
    desc: "eCommerce Website for financial products",
    subdesc: "Built as an eCommerce app with React, Tailwind CSS.",
    href: "https://finance-astkout.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
    ],
  },
  {
    title: "Beaches",
    desc: "A travel website for discovering the best vacation destinations",
    subdesc:
      "With Beaches, users can find and book hotels, flights, and rental cars in their favorite destinations.",
    href: "https://beach-six.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
    ],
  },
  {
    title: "Medicare",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "With a focus on efficiency, Medicare integrantes a comprehensive healthcare solution that empowers healthcare providers and patients to manage their medical needs effortlessly.",
    href: "https://medicare-iota-one.vercel.app/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
    ],
  },
  {
    title: "BestEats",
    desc: "An UberEats clone built with React.",
    subdesc:
      "With BestEats, you can order food and get it delivered to your door.",
    href: "https://besteats-nu.vercel.app/",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
    ],
  },
  {
    title: "TinDog",
    desc: "A tinder but for dogs.",
    subdesc: "Built with HTML5, CSS3, Bootstrap and JavaScript.",
    href: "https://tindog-pffl-astkout.vercel.app/",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "HTML5",
        path: "/assets/HTML5.png",
      },
      {
        id: 2,
        name: "CSS3",
        path: "assets/CSS3.png",
      },
      {
        id: 3,
        name: "Bootstrap",
        path: "assets/Bootstrap.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [2.5, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [7, 6, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-3, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 14, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-15, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Frontend Development",
    duration: " ",
    title:
      "I kickstarted my journey as a web developer after switching from physiotherapy. In 2023, I learned HTML, CSS, and JavaScript—and that’s when I fell in love with coding and development!",
    icon: "/assets/coding.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Fullstack Development",
    icon: "/assets/backend.png",
    title:
      "Later on, I took a full-stack development course, and that’s when my passion really took off. I learned React, Node.js, Git, jQuery, and the essentials of SQL and MongoDB. I also took courses on Tailwind CSS and JavaScript to improve my skills, all while learning PHP in the meantime.",
    animation: "clapping",
  },
  {
    id: 3,
    name: "3D Development",
    icon: "/assets/cube.png",
    title:
      "Today, I’m eager to learn 3D website design and become a full-stack developer while creating immersive 3D websites. I always strive to improve my skills to achieve the best possible outcomes!",
    animation: "salute",
  },
];
