import React from "react";
import { FiLinkedin, FiGithub, FiFile } from "react-icons/fi";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const Footer = () => {
  return (
    <div className="w-full max-h-full bg-cyan-950 py-10">
      <div className="w-full space-y-20 lg:space-y-0 lg:w-2/3 m-auto px-4 lg:px-10 py-2 self-center max-h-full grid grid-cols-1 lg:grid-cols-3">
        <div className="w-full max-h-full flex flex-col">
          <Link to="start" spy={true} smooth={true} duration={500}>
            <h1 className="text-white text-xl font-bold cursor-pointer">DW</h1>
          </Link>
          <div className="max-w-full max-h-full flex items-center space-x-4 list-none mt-10">
            <a
              href="https://www.linkedin.com/in/douglaswelber/"
              target="blank"
              className="p-3 lg:p-2 bg-white cursor-pointer rounded-full hover:opacity-90 duration-200"
            >
              <FiLinkedin className="text-xl lg:text-md text-cyan-950" />
            </a>
            <a
              href="https://github.com/doguebart"
              target="blank"
              className="p-3 lg:p-2 bg-white cursor-pointer rounded-full hover:opacity-90 duration-200"
            >
              <FiGithub className="text-xl lg:text-md text-cyan-950" />
            </a>
            <a
              download="/DouglasWelberCurrículo.pdf"
              className="p-3 lg:p-2 bg-white cursor-pointer rounded-full hover:opacity-90 duration-200"
            >
              <FiFile className="text-xl lg:text-md text-cyan-950" />
            </a>
          </div>
        </div>
        <div className="max-w-full max-h-full flex flex-col space-y-4">
          <Link
            to="start"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white font-bold text-md lg:text-xs cursor-pointer"
          >
            Início
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white font-bold text-md lg:text-xs  cursor-pointer"
          >
            Sobre Mim
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white font-bold text-md lg:text-xs  cursor-pointer"
          >
            Projetos
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white font-bold text-md lg:text-xs  cursor-pointer"
          >
            Experência
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white font-bold text-md lg:text-xs cursor-pointer"
          >
            Contato
          </Link>
        </div>
        <div className="max-w-full max-h-full">
          <span className="text-xs text-center text-white font-bold">
            Todos os direitos reservados ©2023 Douglas Welber
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
