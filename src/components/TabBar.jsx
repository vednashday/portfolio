import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const tabNames = {
  "/": "Welcome",
  "/about": "aboutMe.js",
  "/projects": "projects.css",
  "/skills": "skills.json",
  "/contact": "contact.html",
};

const TabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openTabs, setOpenTabs] = useState([]);
  
  // Add tab when route changes
  useEffect(() => {
    const currentPath = location.pathname;
    if (!openTabs.includes(currentPath)) {
      setOpenTabs((prev) => [...prev, currentPath]);
    }
  }, [location.pathname]);

  const closeTab = (path) => {
    setOpenTabs((prev) => prev.filter((p) => p !== path));
    if (location.pathname === path) {
      
      const remaining = openTabs.filter((p) => p !== path);
      navigate(remaining[remaining.length - 1] || "/");
    }
  };

  return (
    <div className="flex bg-[#2d2d2d]  text-sm overflow-x-auto no-scrollbar">
      {openTabs.map((path) => (
        <div
          key={path}
          onClick={() => navigate(path)}
          className={`px-4 py-2 flex items-center gap-2 cursor-pointer border-r border-zinc-700
          ${location.pathname === path ? "bg-[#1e1e1e] border-t-2 border-blue-500 text-white italic" : "text-zinc-400 hover:text-white"}
        `}
        >
          {tabNames[path] || "Unknown"}
          {path !== "/" && (
            <IoClose
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering navigation
                closeTab(path);
              }}
              className="text-zinc-500 hover:text-red-400"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TabBar;
