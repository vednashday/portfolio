import { useState } from "react";
import { FaChevronRight, FaChevronDown, FaFolder, FaFolderOpen, FaTerminal } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ toggleTerminal }) => { // Receive toggleTerminal as a prop
    const location = useLocation();
    const [portfolioOpen, setPortfolioOpen] = useState(true);


    const files = [
        { name: "aboutMe.js", path: "/about" },
        { name: "projects.css", path: "/projects" },
        { name: "skills.json", path: "/skills" },
        { name: "contact.html", path: "/contact" },
    ];

    return (
        <div className="w-64 bg-[#1e1e1e] text-white font-mono text-sm h-full border-r border-zinc-700">
            <div className="p-2">
                {/* Portfolio Folder */}
                <button
                    className="flex items-center gap-1 w-full hover:bg-[#2a2a2a] px-1 py-1 rounded"
                    onClick={() => setPortfolioOpen(!portfolioOpen)}
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
                    <span className="text-zinc-200">portfolio</span>
                </button>

                {portfolioOpen && (
                    <div className="ml-6 mt-1 space-y-1">
                        {files.map((file) => (
                            <Link
                                key={file.path}
                                to={file.path}
                                className={`block px-2 py-1 mb-1 rounded hover:bg-[#3c3c3c] ${location.pathname === file.path ? "bg-[#3c3c3c]" : ""
                                    }`}
                            >
                                {file.name}
                            </Link>
                        ))}
                    </div>
                )}

                <div className="mt-2">
                    <button
                        onClick={toggleTerminal}
                        className="flex items-center gap-1 w-full hover:bg-[#2a2a2a] px-1 py-1 rounded">
                        <FaTerminal className="text-green-400" />
                        <span className="text-zinc-200">Toggle Terminal</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
