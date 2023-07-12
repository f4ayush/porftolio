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
    docker,
    upwork,
    avrl,
    ashriya,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Backend Developer",
      icon: backend,
    }
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
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "SDE 1",
      company_name: "Advanced Voice Research Labs",
      icon: avrl,
      iconBg: "#383E56",
      date: "Oct 2021 – Present",
      points: [
        "Proficient in understanding client requirements, programming chatbots, and deploying them on 24/7 virtual machines for uninterrupted operation.",
        "Developed a cutting-edge web browser with built-in bot capabilities, enabling seamless automation of ERP portals and enhancing user experience.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Implemented an innovative online code editor using React and Node.js, increasing programming productivity by 30%, and streamlined developmen",
      ],
    },
    {
      title: "React JS Developer",
      company_name: "Ashriya Infotech Pvt Ltd",
      icon: ashriya,
      iconBg: "#E6DEDD",
      date: "Jan 2021 – Oct 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Engineered cross-platform authorization between Joomla and Node.js server, facilitating secure and centralized user authentication, enabling efficient data sharing and reducing login errors by 40%.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Architected a scalable and secure authentication system utilizing OAuth2 and JWT, reducing login latency by 60% and increasing user adoption rate by 25%.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Contractual/Part Time Engagement",
      icon: upwork,
      iconBg: "#E6DEDD",
      date: "Oct 2020 – Dec 2020",
      points: [
        "Developing and maintaining web applications using MERN stack and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Modified and scaled an existing React project, adding new features and optimizing performance.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Ayush has worked as an intern in 2019 on web and app development. He has good coding skills and understand the problem logically. Good team player, sound knowledge of java and a sincere person!! looking forward to work with him again!!",
      name: "Anshula Goel",
      designation: "Lead Data Analyst",
      company: "Kelton",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I have worked with him and seen him doing things and completing projects before timeline, I must say he knows what he's doing",
      name: "Shubham Burande",
      designation: "Senior Software Engineer",
      company: "Accolite Digital",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Ayush has a good understanding of concepts in JS, Express, SQL & React. He is hard-working, and a good communicator ",
      name: "Bhavya Bushan",
      designation: "Software Engineering Mentor",
      company: "Springboard",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
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
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };