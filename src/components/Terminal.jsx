import { useState, useEffect, useRef } from "react";
import nyancat from "../assets/nyan-cat.gif";

const Terminal = () => {
  const [input, setInput] = useState(""); 
  const [output, setOutput] = useState([]); 
  const terminalRef = useRef(null); 

  
  useEffect(() => {
    setOutput([
      "Welcome to my portfolio terminal!",
      "Type 'help' for available commands."
    ]);
  }, []);

  
  const handleInput = (e) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    }
  };


  const processCommand = (command) => {
    let response;
    switch (command.toLowerCase()) {
      case "help":
        response = "Available commands: help, clear, about, ls, projects, nyan";
        break;
      case "about":
        response = "This is a VS Code Themed Portfolio. Type 'help' for commands.";
        break;
      case "clear":
        setOutput([]);
        return;
      case "ls":
        response = "aboutMe.js, projects.js, skills.json, contact.html";
        break;
      case "projects":
        response = "1. Pinterest Clone\n2. VS Code Portfolio\n3. Image Manager\n4. ProfitWise\n5. MyProfitWise\n6. BuzzRoom";
        break;
      case "nyan":
        response = (
    <img
      src = {nyancat}
      alt="Nyan Cat"
      className="w-32 h-auto mt-2"
    />
  );
  break;
      default:
        response = `Command not found: ${command}`;
    }
    // Add the output to history
    setOutput((prevOutput) => [...prevOutput, `> ${command}`, response]);
  };

  // Auto-scroll to the bottom of the terminal on new output
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div
      ref={terminalRef}
      className="bg-black border-t border-zinc-600 text-white p-4 h-[30%] w-full overflow-y-auto font-mono"
    >
      {/* Terminal Output */}
      <div className="mb-2">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>

      {/* Input Field */}
      <div className="flex">
        <span className="text-green-500">vednashday@portfolio:~$</span>
        <input
          type="text"
          className="bg-transparent text-white w-full border-none outline-none pl-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInput}
          placeholder="Type Here..."
        />
      </div>
    </div>
  );
};

export default Terminal;
