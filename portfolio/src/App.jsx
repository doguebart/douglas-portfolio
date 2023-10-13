import React from "react";
import { FiLinkedin, FiGithub, FiFile } from "react-icons/fi";
import { Link } from "react-router-dom";
import Header from "./components/header";
import AboutMe from "./components/sections/aboutMe";
import Projects from "./components/sections/projects";
import Experience from "./components/sections/experience";

const App = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      <Header />
      <div className="w-full max-h-full flex flex-col">
        <div
          className="w-full h-screen flex flex-col items-center justify-center bg-cyan-900"
          id="start"
        >
          <h2 className="text-2xl md:text-4xl text-white text-center">
            Olá, me chamo <br />{" "}
            <strong className="text-4xl md:text-6xl text-cyan-500">
              Douglas Welber
            </strong>
          </h2>
          <span className="mt-4 text-white/50 font-normal">
            Programador Frontend
          </span>
          <div className="max-w-full mt-4 max-h-full flex items-center space-x-4">
            <Link className="p-2 bg-white shadow-md m-auto rounded-full hover:opacity-90 duration-200">
              <FiLinkedin className="text-xl text-cyan-950" />
            </Link>
            <Link className="p-2 bg-white shadow-md m-auto rounded-full hover:opacity-90 duration-200">
              <FiGithub className="text-xl text-cyan-950" />
            </Link>
            <Link className="p-2 bg-white shadow-md m-auto rounded-full hover:opacity-90 duration-200">
              <FiFile className="text-xl text-cyan-950" />
            </Link>
          </div>
        </div>
        <AboutMe />
        <Projects />
        <Experience />
      </div>
    </div>
  );
};

export default App;
