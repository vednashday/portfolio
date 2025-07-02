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
    <div className="w-full bg-zinc-800 border-b border-zinc-700 overflow-x-auto no-scrollbar">
      <div className="flex h-10 min-w-full">
        {openTabs.map((path) => (
          <div
            key={path}
            onClick={() => navigate(path)}
            className={`flex items-center justify-between px-3 py-2 gap-2 cursor-pointer border-r border-zinc-700
              ${
                location.pathname === path
                  ? "bg-[#1e1e1e] border-t-2 border-blue-500 text-white italic"
                  : "text-zinc-400 hover:text-white"
              }
              flex-1 min-w-[120px] max-w-[200px]
              transition-all duration-200
            `}
          >
            <span className="truncate">{tabNames[path] || "Unknown"}</span>

            {path !== "/" && (
              <IoClose
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(path);
                }}
                className="text-zinc-500 hover:text-red-400 flex-shrink-0"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
