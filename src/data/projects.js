import placeImage from '../assets/pinterest.png';
import profitwiseImage from '../assets/profitwise.png';
import portImage from '../assets/portfolio1.png';
import EImage from '../assets/web.png';
import MangeImage from '../assets/imgManager.png';
import BuzzroomImage from '../assets/BuzzRoom.png';
import TwillerImage from '../assets/twitter.png';

const projects = [
  {
    title: "PokeLib 3D - Interactive 3D Pokedex",
    description: "A responsive and modern Pokedex web application that allows users to browse a library of Pokemon, view detailed stats, and interact with high-quality 3D models in real-time.",
    techStack: ["Next.js","TypeScript", "React.js", "React Three Fiber","Three.js", "Drei", "Tailwind CSS", "Vercel"],
    role: "Developed a dynamic, responsive user interface with Next.js and Tailwind CSS. Integrated two separate APIs to fetch and display both detailed Pokémon stats and interactive 3D models. Implemented robust error handling and a custom 3D loading experience.",
    challenges: "Integrating and syncing data from two different APIs, implementing a robust fallback system for missing 3D model assets, automatically scaling and centering 3D models of varying sizes, and ensuring a smooth, responsive layout across all devices.",
    image: "PokeLibImage",
    link: "https://github.com/vednashday/PokeLib_3D",
    live: "https://pokelib-3d.vercel.app/"
  },
  {
    title: "Buzzroom - Realtime Social App",
    description: "A full-stack social app that enables users to add friends, chat in real-time, and video call with seamless connectivity.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "WebRTC", "TailwindCSS"],
    role: "Built and integrated real-time messaging and video calling features using Socket.IO and WebRTC, while managing user sessions and scalable chat architecture.",
    challenges: "Ensuring smooth real-time communication across devices, handling peer-to-peer video calls, and syncing friend requests/messages with server state.",
    image: BuzzroomImage,
    link: "https://github.com/vednashday/Buzzroom",
    live: "https://buzzroom.onrender.com"
  },
  {
    title: "Twiller - Twitter Clone",
    description: "A full-stack Twitter clone with modern features like voice tweets, AI-based suggestions, email + OTP-based password recovery, and Razorpay-powered subscription limits.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Razorpay", "Cloudinary", "TailwindCSS"],
    role: "Designed and developed both frontend and backend, integrated voice tweet recording and waveform visualization, secured authentication with Firebase, and implemented subscription plans with time-restricted payments.",
    challenges: "Managing audio uploads with time and size constraints, building a custom audio recorder with live waveform, implementing OTP verification for uploads and password resets, and integrating Razorpay with cron-based restrictions.",
    image: TwillerImage,
    link: "https://github.com/vednashday/twiller-v2",
    live: "https://twiller-cloned-twitter.netlify.app/"
  },
  {
    title: "YourInterest — Pinterest Clone",
    description: "A full-featured clone of Pinterest built with Node.js Users can upload, save, and browse images across dynamic boards,Currently working on responsiveness.",
    techStack: ["Node.js", "Express.js", "Tailwind CSS", "EJS", "MongoDB"],
    role: "Built custom upload logic, responsive layouts, and integrated Firebase authentication & storage.",
    challenges: "Handling real-time updates and optimizing image load times for better UX.",
    image: placeImage,
    link: "https://github.com/vednashday/YourInterest",
    live: "https://yourinterest.onrender.com/"
  },
  {
    title: "VS Code Portfolio Website",
    description: "A portfolio designed to look and feel like Visual Studio Code complete with tabs, file explorer, and a terminal-inspired contact form.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
    role: "Designed and developed the entire site from scratch, focusing on minimal yet creative UI/UX.",
    challenges: "Building a complex layout while keeping it responsive across devices.",
    image: portImage,
    link: "https://github.com/vednashday/portfolio",
    live: "https://vednashday-portfolio.vercel.app/"
  },
  {
    title: "Modern E-Commerce Platform",
    description: "A clean, responsive e-commerce site featuring product cards, category filters, and shopping cart mockup. Created as a frontend showcase project.",
    techStack: ["HTML", "CSS", "JavaScript (Vanilla)"],
    role: "Focused on layout, user interactions, and refining UI/UX flow for shopping.",
    challenges: "Responsive design using plain CSS and organizing static assets.",
    image: EImage,
    link: "https://github.com/vednashday/E-commerce-Website",
    live: "#"
  },
  {
    title: "Image Manager",
    description: "A modern image management app with advanced features like cropping, resizing, and previewing. Designed to explore npm libraries and custom UI workflows.",
    techStack: ["React.js", "Tailwind CSS", "Cropper.js", "Material UI"],
    role: "Integrated multiple image-processing libraries and handled state across custom components.",
    challenges: "Synchronizing user actions with cropping logic and maintaining clean UI/UX.",
    image: MangeImage,
    link: "https://github.com/vednashday/image-manager",
    live: "https://image-manager-lake.vercel.app/"
  },
  {
    title: "ProfitWise — Stock Analysis Tool",
    description: "A stock insight tool that shows buy/sell signals and manages a ledger for tracking user investment decisions. Still a work-in-progress.",
    techStack: ["React.js", "Chart.js", "Tailwind CSS"],
    role: "Designed the UI, implemented charting logic, and created the ledger system for tracking.",
    challenges: "Integrating financial data logic and making the charts interactive.",
    image: profitwiseImage,
    link: "https://github.com/vednashday/Stock_helper_ReactJS_project",
    live: "#"
  }
];


export default projects;