import React from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
  return (
    <div className="w-full max-h-full flex items-center justify-around py-4 bg-cyan-900 fixed top-0 z-10">
      <div className="max-w-full max-h-full">
        <Link>
          <h1 className="text-white text-xl font-bold">DW</h1>
        </Link>
      </div>
      <div className="max-w-full max-h-full">
        <ul className="w-full flex items-center space-x-10">
          <li>
            <Link className="text-white font-bold py-2 text-sm hover:border-b hover:border-cyan-500 duration-200 cursor-pointer">Sobre Mim</Link>
          </li>
          <li>
            <Link className="text-white font-bold py-2 text-sm hover:border-b hover:border-cyan-500 duration-200 cursor-pointer">Projetos</Link>
          </li>
          <li>
            <Link className="text-white font-bold py-2 text-sm hover:border-b hover:border-cyan-500 duration-200 cursor-pointer">Experiência</Link>
          </li>
          <li>
            <Link className="text-white font-bold py-2 text-sm hover:border-b hover:border-cyan-500 duration-200 cursor-pointer">Contato</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
