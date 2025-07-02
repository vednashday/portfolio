import { useEffect, useState } from "react";
import {
  FaChevronRight,
  FaChevronDown,
  FaFolder,
  FaFolderOpen,
  FaTerminal,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import NowPlaying from "./NowPlaying";
import catimg from "../assets/cats.png";

const Sidebar = ({ toggleTerminal }) => {
  const location = useLocation();
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 640);

  const files = [
    { name: "aboutMe.js", path: "/about" },
    { name: "projects.css", path: "/projects" },
    { name: "skills.json", path: "/skills" },
    { name: "contact.html", path: "/contact" },
  ];

  // 🏗 Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsCollapsed(true);
        setPortfolioOpen(false); // Close portfolio when sidebar collapses on small screens
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔥 Portfolio click behavior
  const handlePortfolioClick = () => {
    if (isCollapsed) {
      // If sidebar is collapsed, open it and open portfolio
      setIsCollapsed(false);
      setPortfolioOpen(true);
    } else {
      // If sidebar is open and portfolio is open, just toggle portfolio
      if (portfolioOpen) {
        // If on small screen, collapse sidebar when closing portfolio
        if (window.innerWidth < 640) {
          setIsCollapsed(true);
          setPortfolioOpen(false);
        } else {
          setPortfolioOpen(false);
        }
      } else {
        setPortfolioOpen(true);
      }
    }
  };

  return (
    <div
      className={`
        ${isCollapsed ? "w-16" : "w-64"}
        bg-[#1e1e1e] text-white font-mono text-sm h-full border-r border-zinc-700
        flex flex-col justify-between transition-all duration-300 ease-in-out
      `}
    >
      <div className="p-2">
        {/* Logo */}
        <div
          className={`p-2 cursor-pointer hover:opacity-80 ${
            isCollapsed ? "flex justify-center" : "flex items-center gap-2"
          }`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <img
            src={catimg}
            alt="Logo"
            className={`transition-all duration-300 ${
              isCollapsed ? "w-10 h-10" : "w-10 h-10"
            } rounded-full`}
          />
          {!isCollapsed && <span className="text-xl">VPScode</span>}
        </div>

        {/* Folder */}
        <button
          className="flex items-center gap-2 w-full hover:bg-[#2a2a2a] px-2 py-1 rounded"
          onClick={handlePortfolioClick}
        >
          {portfolioOpen ? (
            <FaChevronDown className="text-zinc-400" />
          ) : (
            <FaChevronRight className="text-zinc-400" />
          )}
          {portfolioOpen ? (
            <FaFolderOpen className="text-blue-400" />
          ) : (
            <FaFolder className="text-blue-400" />
          )}
          {!isCollapsed && <span className="text-zinc-200">portfolio</span>}
        </button>

        {/* Files */}
        {portfolioOpen && (
          <div className={`ml-${isCollapsed ? "0" : "6"} mt-1 space-y-1`}>
            {files.map((file) => (
              <Link
                key={file.path}
                to={file.path}
                className={`flex items-center gap-2 px-2 py-1 mb-1 rounded hover:bg-[#3c3c3c] ${
                  location.pathname === file.path ? "bg-[#3c3c3c]" : ""
                }`}
              >
                <FaFolder className="text-blue-400" />
                {!isCollapsed && <span>{file.name}</span>}
              </Link>
            ))}
          </div>
        )}

        {/* Terminal */}
        <div className="mt-2">
          <button
            onClick={toggleTerminal}
            className="flex items-center gap-2 w-full hover:bg-[#2a2a2a] px-2 py-1 rounded"
          >
            <FaTerminal className="text-green-400" />
            {!isCollapsed && (
              <span className="text-zinc-200">Toggle Terminal</span>
            )}
          </button>
        </div>
      </div>

      <NowPlaying isCollapsed={isCollapsed} />
    </div>
  );
};

export default Sidebar;
