import React from "react";

const AboutMe = () => {
  return (
    <div
      className="lg:w-2/3 px-4 py-4 lg:px-10 self-center max-h-full"
      id="about"
    >
      <div className="w-full max-h-full mt-20">
        <h1 className="text-black text-3xl font-bold">Sobre Mim</h1>
        <p className="text-black text-md lg:text-md py-6">
          E aí! Eu sou Douglas Welber e sou de Osasco, São Paulo, Brasil. Em
          dezembro de 2021, consegui uma bolsa de estudos e entrei na FIAP para
          estudar Análise e Desenvolvimento de Sistemas, o que foi uma grande
          oportunidade para eu mergulhar no mundo da programação. <br /> <br />{" "}
          Eu sou um cara que curte programar, principalmente na parte da frente
          (frontend). Já tenho um ano de experiência nisso, trabalhando como
          freelancer e dando uma mãozinha em projetos bem variados. Durante nove
          meses, eu estava mexendo principalmente com coisas como ReactJs,
          Next.js, TypeScript Tailwind CSS e Styled-Components, criando sites e
          aplicativos com visual bacana e responsivos. Na última posição que
          tive, trabalhei mais com as bases: HTML, CSS e JavaScript, além de
          usar o Bootstrap para fazer sites funcionais. <br /> <br /> Adoro
          desafios e estou sempre afim de aprender coisas novas. A sensação de
          criar algo incrível a partir de linhas de código me empolga muito, e
          estou sempre buscando maneiras de crescer e aprimorar minhas
          habilidades.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
