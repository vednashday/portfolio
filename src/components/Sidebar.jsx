import { useEffect, useState, useRef } from "react";
import {
  FaChevronRight,
  FaChevronDown,
  FaFolder,
  FaFile,
  FaFolderOpen,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import NowPlaying from "./NowPlaying";
import catimg from "../assets/nyan-cat.gif"
import TerminalIcon from '@mui/icons-material/Terminal';

const Sidebar = ({ toggleTerminal }) => {

  const location = useLocation();
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 640);
  const [song, setSong] = useState(null);
  const [lastSeenAt, setLastSeenAt] = useState(null);
  const intervalRef = useRef();

  const fetchNowPlaying = () => {
    fetch('/api/now-playing')
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        setSong(data);
        if (!data.isPlaying && data.lastPlayedAt) {
          setLastSeenAt((prev) => prev || new Date(data.lastPlayedAt));
        }
        if (data.isPlaying) {
          setLastSeenAt(null);
        }
      });
  };

  useEffect(() => {
    fetchNowPlaying();
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        fetchNowPlaying();
        intervalRef.current = setInterval(fetchNowPlaying, 30000);
      } else {
        clearInterval(intervalRef.current);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    handleVisibility();
    return () => {
      clearInterval(intervalRef.current);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  const files = [
    { name: "aboutMe.js", path: "/about" },
    { name: "projects.css", path: "/projects" },
    { name: "skills.json", path: "/skills" },
    { name: "contact.html", path: "/contact" },
  ];

  
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


  const handlePortfolioClick = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
      setPortfolioOpen(true);
    } else {
      if (portfolioOpen) {
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
        bg-[#1e1e1e] text-white font-mono text-sm h-[97.5vh] border-r border-zinc-700
        flex flex-col justify-between transition-all duration-300 ease-in-out
      `}
    >
      <div className="p-2">
        {/* Logo */}
        <div
          className={`py-2 cursor-pointer hover:opacity-80 ${
            isCollapsed ? "flex justify-center" : "flex items-center gap-2"
          }`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <img
            src={catimg}
            alt="Logo"
            className={`transition-all duration-300 ${
              isCollapsed ? "w-full h-11" : "w-full h-10"
            } rounded-full`}
          />
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
                className={`flex items-center gap-2 px-2 py-1 mb-1 ml-5 rounded hover:bg-[#3c3c3c] ${
                  location.pathname === file.path ? "bg-[#3c3c3c]" : ""
                }`}
              >
                <FaFile className="text-blue-400" />
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
            <TerminalIcon className="text-green-400" />
            {!isCollapsed && (
              <span className="text-zinc-200">Toggle Terminal</span>
            )}
          </button>
        </div>
      </div>

      <div className="p-2">
        {song ? (
          <>
            <NowPlaying
              song={song}
              lastSeenAt={lastSeenAt}
              isCollapsed={isCollapsed}
            />
          </>
        ) : (
          // Loading Skeleton
          <div className="mb-4 flex justify-center">
            <div className="w-10 h-10 rounded-md bg-zinc-700 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
