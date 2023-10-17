import React from "react";

const Experience = () => {
  return (
    <div
      className="lg:w-2/3 px-4 py-4 lg:px-10 self-center max-h-full"
      id="experience"
    >
      <div className="w-full max-h-full mt-20">
        <h1 className="text-black text-3xl font-bold ">
          Experiência Profissional
        </h1>
        <p className="text-black text-md lg:text-md py-6">
          Sou um programador frontend com um ano de experiência, trabalhando
          como freelancer e colaborando em projetos que abrangeram uma variedade
          de tecnologias. Durante nove meses, concentrei-me em Next.js,
          TypeScript e Styled-Components, enquanto na última posição, utilizei
          HTML, CSS, JavaScript e Bootstrap.
        </p>
        <div className="w-full max-h-full mt-10 grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="w-full max-h-full flex flex-col p-2 bg-white rounded-sm shadow-lg border">
            <div className="w-full max-h-full flex items-center justify-between">
              <span className="text-md lg:text-lg text-black font-bold">
                Programador Frontend
              </span>
              <span className="text-sm text-black/50">
                06/2023 - Presente
              </span>
            </div>
            <div className="w-full max-h-full flex flex-col">
              <span className="text-black text-md">
                SIM Instituto Social | Freelancer
              </span>
            </div>
            <p className="mt-4 text-sm text-black/50">
              Sou o responsável pela criação e desenvolvimento de novas páginas
              web e componentes interativos, utilizando tecnologias, como HTML,
              CSS e Javascript. Minha contribuição é fundamental para aprimorar
              a presença online do instituto, garantindo uma experiência de
              usuário atraente e eficaz. Além disso, utilizo o Bootstrap para a
              estilização e tornar as páginas altamente responsivas em diversos
              dispositivos, melhorando assim a acessibilidade e a usabilidade
              para um público mais amplo.
            </p>
          </div>
          <div className="w-full max-h-full flex flex-col p-2 rounded-sm bg-white shadow-lg border">
            <div className="w-full max-h-full flex items-center justify-between">
              <span className="text-md lg:text-lg text-black font-bold">
                Programador Frontend
              </span>
              <span className="text-sm text-black/50">11/2022 - 06/2023</span>
            </div>
            <div className="w-full max-h-full flex flex-col">
              <span className="text-black text-md">
                Tunetraders | Freelancer
              </span>
            </div>
            <p className="mt-4 text-sm text-black/50">
              Utilizando Next.js, TypeScript e Styled-Components, fui
              responsável pelo desenvolvimento de novas páginas, funcionalidades
              e aprimoramentos de estilo, com foco na otimização da
              responsividade nas áreas de dashboard destinadas aos usuários
              autenticados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
