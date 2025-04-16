import placeImage from '../assets/pinterest.png';
import profitwiseImage from '../assets/profitwise.png';
import portImage from '../assets/portfolio1.png';
import EImage from '../assets/web.png';
import MangeImage from '../assets/imgManager.png';

const projects = [
  {
    title: "YourInterest — Pinterest Clone",
    description: "A full-featured clone of Pinterest with image uploads, dynamic boards, and responsive UI built using React.js and Firebase.",
    image: placeImage,
    link: "https://github.com/vednashday/YourInterest",
    live: "#"
  },
  {
    title: "VS Code Portfolio Website",
    description: "A developer-themed personal portfolio styled like Visual Studio Code. Built with React, Tailwind CSS, and fully responsive design.",
    image: portImage,
    link: "https://github.com/vednashday/portfolio"
    ,live: "https://vednashday-portfolio.vercel.app/"
  },
  {
    title: "Modern E-Commerce Platform",
    description: "A responsive online shopping platform with product listings, cart functionality, and a clean UI built using HTML and CSS. Designed to enhance frontend development skills.",
    image: EImage,
    link: "https://github.com/vednashday/E-commerce-Website"
    ,live: "#"
  },
  {
    title: "image-manager // React",
    description: "A sleek image management app built with React. Features image uploading, cropping, resizing, and previewing — all styled with Tailwind and powered by libraries like Cropper.js and MUI for a smooth UI experience.",
    image: MangeImage,
    link: "https://github.com/vednashday/image-manager"
    ,live: "https://image-manager-lake.vercel.app/"
  },
  {
    title: "ProfitWise — Stock Analysis Tool",
    description: "A stock analysis platform that provides buy/sell signals and maintains a ledger for tracking decisions. Built with React and charting libraries. Under Construction",
    image: profitwiseImage,
    link: "https://github.com/vednashday/Stock_helper_ReactJS_project"
    ,live: "#"
  }
];

export default projects;
