import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TabBar from "./components/TabBar";
import Editor from "./components/Editor";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Start from "./pages/Start";
import Botbar from "./components/Botbar";
import Terminal from "./components/Terminal";
import { useState } from "react";


const App = () => {
  
  const [terminalOpen, setTerminalOpen] = useState(false);

  const toggleTerminal = () => {
    console.log("Toggle Terminal Clicked");
    setTerminalOpen((prevState) => !prevState);
    
  };

  
  return (
    

    <div className="flex h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono">
      <Sidebar toggleTerminal={toggleTerminal}/>

      <Botbar />


      <div className="flex flex-col flex-1">
        <TabBar />
        <Editor>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />

          </Routes>

        </Editor>
        {terminalOpen && <Terminal />}
      </div>


    </div>


  );
};

export default App;
