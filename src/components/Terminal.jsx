import { useState, useEffect, useRef } from "react";

const Terminal = () => {
  const [input, setInput] = useState(""); // User's command input
  const [output, setOutput] = useState([]); // Terminal output history
  const terminalRef = useRef(null); // Reference for scrolling

  // Default output on initial load
  useEffect(() => {
    setOutput([
      "Welcome to my portfolio terminal!",
      "Type 'help' for available commands."
    ]);
  }, []);

  // Handle the command input and process it
  const handleInput = (e) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    }
  };

  // Process commands
  const processCommand = (command) => {
    let response;
    switch (command.toLowerCase()) {
      case "help":
        response = "Available commands: help, clear, about, ls, projects";
        break;
      case "about":
        response = "This is a VS Code Themed Portfolio. Type 'help' for commands.";
        break;
      case "clear":
        setOutput([]); // Clear the terminal
        return;
      case "ls":
        response = "aboutMe.js, projects.js, skills.json, contact.html";
        break;
      case "projects":
        response = "1. Pinterest Clone\n2. VS Code Portfolio\n3. Image Manager\n4. ProfitWise\n5. MyProfitWise";
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
