const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 6, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  // {
  //   imgPath: "/images/logos/company-logo-2.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-3.png",
  // },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  // {
  //   imgPath: "/images/logos/company-logo-6.png",
  // },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  // {
  //   imgPath: "/images/logos/company-logo-8.png",
  // },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  // {
  //   imgPath: "/images/logos/company-logo-10.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-11.png",
    
  // },
  {
    imgPath: "/images/logos/daybreak_logo.png",
  },
  {
    imgPath: "/images/logos/renusoft.png",
    },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Mohammad brought both creativity and attention to detail to our WordPress projects at Renusoft. His work greatly enhanced site performance and design consistency.",
    imgPath: "/images/renusoft.png",
    logoPath: "/images/renusoft_logo.png",
    title: "Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and customized WordPress themes and plugins to meet client needs.",
    "Optimized website performance, SEO, and responsiveness across devices.",
    "Collaborated with designers and content teams to deliver visually consistent and high-performing websites."
    ],
  },
  {
    review: "Building my own perfume brand taught me to blend tech with creativity. From developing the storefront to running targeted ad campaigns, I handled every part of the business myself.",
    imgPath: "/images/daybreak_logo.png",
    logoPath: "/images/daybreak_round_logo.png",
    title: "Full Stack Developer",
    date: "2025 present",
    responsibilities: [
      "Developed a Shopify-based e-commerce store with custom branding.",
    "Managed end-to-end marketing, including Meta ad campaigns and content strategy.",
    "Handled product design, packaging, logistics, and customer support independently."
    ],
  },
  {
    review: "Delivered hands-on Python sessions tailored to students from both tech and non-tech backgrounds, bridging real-world problems with coding.",
imgPath: "/images/teacherimg.jpg",
logoPath: "/images/teacherlogo.jpg",
title: "Python Instructor",
date: "2024",
responsibilities: [
  "Taught Python fundamentals to students from diverse fields including biotech and engineering.",
  "Created real-world coding exercises related to biology, data analysis, and automation.",
  "Simplified complex programming concepts for non-technical learners.",
  "Promoted interdisciplinary thinking by combining coding with domain-specific use cases.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Ahsan Raza",
    mentions: "@ahsanraza",
    review:
      "Mohammad delivered a complete MERN e-commerce solution with clean code and seamless admin control. The workflow was efficient and transparent.",
    imgPath: "/images/person0.png",
  },
  {
    name: "Sophie Miller",
    mentions: "@sophiem.design",
    review:
      "Mohammad brought our frontend concept to life with precision. His React and Tailwind expertise helped build a stunning and responsive UI.",
    imgPath: "/images/person0.png",
  },
  {
    name: "Dr. Umair Khan",
    mentions: "@drumair",
    review:
      "He taught Python from a biomedical angle in a way that even non-technical students could grasp. His clarity and real-world examples were top-notch.",
    imgPath: "/images/person0.png",
  },
  {
    name: "David Thompson",
    mentions: "@thompsonlabs",
    review:
      "We needed a Shopify site with full control. Mohammad handled design, dev, and marketing tools—all while keeping the UX intuitive and on-brand.",
    imgPath: "/images/person0.png",
  },
  {
    name: "Zara Ahmed",
    mentions: "@zaraahmed",
    review:
      "Whether it's SEO, ads, or page speed—Mohammad handled our tech stack like a pro. A one-man team who knows development and digital strategy.",
    imgPath: "/images/person0.png",
  },
  {
    name: "Daniel Reyes",
    mentions: "@danielr",
    review:
      "Professional, detail-oriented, and solution-driven. Mohammad quickly understood our product vision and turned it into a performant full-stack web app.",
    imgPath: "/images/person0.png",
  }
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
