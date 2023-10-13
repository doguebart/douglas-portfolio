import React from "react";

const AboutMe = () => {
  return (
    <div
      className="lg:w-2/3 px-4 py-4 lg:px-10 self-center max-h-full"
      id="about"
    >
      <div className="w-full max-h-full mt-20">
        <h1 className="text-black text-3xl font-bold">Sobre Mim</h1>
        <p className="text-black text-md lg:text-md py-6 border-b border-black/40">
          Sou um programador frontend com um ano de experiência, trabalhando
          como freelancer e colaborando em projetos que abrangeram uma variedade
          de tecnologias. Durante nove meses, concentrei-me em Next.js,
          TypeScript e Styled-Components, enquanto na última posição, utilizei
          HTML, CSS, JavaScript e Bootstrap. <br /> <br /> Além disso, moro em Osasco, São
          Paulo, e em dezembro de 2021 conquistei uma bolsa de estudos e entrei
          na FIAP para cursar Análise e Desenvolvimento de Sistemas, o que
          ampliou ainda mais meu conhecimento e habilidades na área de
          desenvolvimento de software.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
