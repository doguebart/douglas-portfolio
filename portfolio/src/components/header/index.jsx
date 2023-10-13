import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full px-4 lg:px-0 max-h-full md:flex md:justify-around md:items-center py-4 bg-cyan-900 fixed top-0 z-10">
      <div className="flex justify-between items-center max-w-full">
        <Link
          to="start"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMenu}
        >
          <h1 className="text-white text-xl font-bold cursor-pointer">DW</h1>
        </Link>

        <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={toggleMenu}
        >
          <FiMenu className="text-white" />
        </span>
      </div>

      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex space-y-6 md:space-y-0 md:space-x-10 md:items-center md:bg-transparent md:p-0 pt-10 md:w-auto md:opacity-100 transition-all ease-in duration-500`}
      >
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-white font-bold py-2 text-sm hover:border-b hover:border-cyan-500 duration-200 cursor-pointer"
          >
            Sobre Mim
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-white font-bold py-2 text-sm hover:border-b hover:border-cyan-500 duration-200 cursor-pointer"
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-white font-bold py-2 text-sm hover:border-b hover:border-cyan-500 duration-200 cursor-pointer"
          >
            Experiência
          </Link>
        </li>
        <li>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-white font-bold py-2 text-sm hover:border-b hover:border-cyan-500 duration-200 cursor-pointer"
          >
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
