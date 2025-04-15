import placeImage from '../assets/pinterest.png';
import profitwiseImage from '../assets/profitwise.png';
import portImage from '../assets/portfolio1.png';
import EImage from '../assets/web.png';

const projects = [
  {
    title: "YourInterest — Pinterest Clone",
    description: "A full-featured clone of Pinterest with image uploads, dynamic boards, and responsive UI built using React.js and Firebase.",
    image: placeImage,
    link: "https://github.com/vednashday/YourInterest"
  },
  {
    title: "VS Code Portfolio Website",
    description: "A developer-themed personal portfolio styled like Visual Studio Code. Built with React, Tailwind CSS, and fully responsive design.",
    image: portImage,
    link: "https://example.com/place"
  },
  {
    title: "Modern E-Commerce Platform",
    description: "A responsive online shopping platform with product listings, cart functionality, and a clean UI built using HTML and CSS. Designed to enhance frontend development skills.",
    image: EImage,
    link: "https://github.com/vednashday/E-commerce-Website"
  },
  {
    title: "ProfitWise — Stock Analysis Tool",
    description: "A stock analysis platform that provides buy/sell signals and maintains a ledger for tracking decisions. Built with React and charting libraries.",
    image: profitwiseImage,
    link: "https://github.com/vednashday/Stock_helper_ReactJS_project"
  }
];

export default projects;
