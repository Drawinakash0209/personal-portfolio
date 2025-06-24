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
    name: "Education",
    link: "#education",
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
  { value: 1, suffix: "+", label: "Year of Industry Experience" }, // MAS Legato
  { value: 5, suffix: "+", label: "Technologies Mastered" },       // React, Python, PHP, etc.
  { value: 6, suffix: "", label: "Major Projects Built" },         // Retail App, CRM, Blog
  { value: 3, suffix: "", label: "Student Leadership Roles" },     // Rotaract + FCS
];



const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
  
  
];

const abilities = [
  {
    imgPath: "/images/leadership.png",
    title: "Leadership & Teamwork",
    desc: "Guiding teams to success in projects like Syntex Outlet Store, fostering collaboration and clear communication.",
  },
  {
    imgPath: "/images/problem-solving.png",
    title: "Problem Solving",
    desc: "Tackling complex challenges with innovative solutions, as demonstrated in multi-user retail and CRM systems.",
  },
  {
    imgPath: "/images/technical.png",
    title: "Technical Expertise",
    desc: "Building robust applications using Java, React, and Laravel, with a focus on clean architecture and scalability.",
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
    review: "Designed and deployed RPA bots that streamlined operations, enabling teams to focus on higher-value tasks across departments.",
    imgPath: "/images/MAS.png",
    logoPath: "/images/exp-logo.jpeg",
    title: "Junior Associate – Quality Assurance (RPA Developer)",
    date: "June 2024 - June 2025",
    responsibilities: [
      "Designed and implemented automation workflows using UiPath, Microsoft Power Platform, and Python.",
      "Built and deployed RPA bots to streamline operations and increase efficiency across various departments.",
      "Collaborated closely on solution design, development, testing, and deployment phases.",
      "Functioned primarily as a Software Engineer within the Process Automation team.",
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
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/drawinakash/",
    imgPath: "/images/insta.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/drawin-akash",
    imgPath: "/images/linkedin.png",
  },
];

const eduCards = [
  {
    review: "Pursued a comprehensive Software Engineering degree, gaining expertise in modern development practices and technologies.",
    imgPath: "/images/staffs-logo.png", // You'll need to add this image
    logoPath: "/images/staffs-logo.png", // You'll need to add this image
    institution: "Staffordshire University",
    degree: "BEng (Hons) Software Engineering",
    duration: "2022 – 2025",
    achievements: [
      "Currently pursuing Bachelor's degree in Software Engineering",
      "Focus on modern software development methodologies and practices",
      "Specialized coursework in web development, database systems, and software architecture",
      "Practical experience with industry-standard development tools and frameworks"
    ],
  },
  {
    review: "Completed Advanced Level education with exceptional results, achieving top-tier performance in the national examinations.",
    imgPath: "/images/st-benedicts-logo.png", // You'll need to add this image
    logoPath: "/images/st-benedicts-logo.png", // You'll need to add this image
    institution: "St. Benedict's College, Colombo",
    degree: "Advanced Level Education",
    duration: "2007 – 2021",
    achievements: [
      "A/L Results (2021) – 4 A passes with outstanding performance",
      "Z-score: 1.9556 - demonstrating exceptional academic achievement",
      "Island Rank: 694 - among top performers nationally",
      "O/L Results (2018) – 4 A, 4 B, 1 C - strong foundation across subjects"
    ],
  },
];


const leadershipCards = [
  {
    title: "Deputy Head Prefect",
    organization: "St. Benedict's College",
    type: "Leadership",
    duration: "2020",
    iconPath: "/images/st-benedicts-logo.png", // You'll need to add this icon
    review: "Led disciplinary initiatives and fostered positive school environment through strategic leadership and student engagement programs.",
    description: "Served as Deputy Head Prefect of St. Benedict's College for the year 2020, overseeing disciplinary matters and fostering a positive school environment through various initiatives.",
    highlights: [
      "Managed school disciplinary committee",
      "Implemented student welfare programs",
      "Coordinated inter-house activities",
      "Mentored junior students"
    ],
    impact: "Enhanced school culture and student engagement"
  },
  {
    title: "Logistics Manager",
    organization: "Full Stack Computer Society, APIIT",
    type: "Leadership",
    duration: "24/25",
    iconPath: "/images/fcs-logo.png", // You'll need to add this icon
    review: "Orchestrating seamless event coordination and logistics management for one of the premier tech societies in the university.",
    description: "Currently managing logistics for the Full Stack Computer Society at APIIT, ensuring seamless coordination of events and activities.",
    highlights: [
      "Event planning and execution",
      "Resource allocation and management",
      "Vendor coordination",
      "Timeline and budget management"
    ],
    impact: "100% successful event delivery rate"
  },
  {
    title: "Director of Digital Services",
    organization: "Rotaract Club of APIIT",
    type: "Leadership",
    duration: "24/25",
    iconPath: "/images/RAC-APIIT.png", // You'll need to add this icon
    review: "Driving digital transformation and community impact through innovative technology solutions and strategic online engagement.",
    description: "Overseeing the club's digital presence and strategy, supporting community service projects through innovative tech solutions and online engagement.",
    highlights: [
      "Digital strategy development",
      "Social media management",
      "Tech solution implementation",
      "Online community building"
    ],
    impact: "300% increase in digital engagement"
  },
  {
    title: "Event Volunteer",
    organization: "Fulbright Association - EducationUSA",
    type: "Volunteer",
    duration: "September 2023",
    iconPath: "/images/Fulbright-logo-new.jpg", // You'll need to add this icon
    review: "Contributed to international education initiatives by supporting prospective students in their academic journey abroad.",
    description: "Participated in volunteer service at the EducationUSA fair held at BMICH, Sri Lanka, in September 2023. Assisted in various tasks to support the event's success.",
    highlights: [
      "Student guidance and support",
      "Event logistics assistance",
      "Information dissemination",
      "Cross-cultural communication"
    ],
    impact: "Helped 500+ students with education guidance"
  }
];

export {
  abilities, counterItems, eduCards, expCards,
  expLogos, leadershipCards, logoIconsList, navLinks, socialImgs,
  techStackIcons,
  techStackImgs, testimonials, words
};

