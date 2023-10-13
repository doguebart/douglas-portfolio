import React from "react";

const Projects = () => {
  return (
    <div
      className="lg:w-2/3 px-4 lg:px-10 py-4 self-center max-h-full"
      id="projects"
    >
      <div className="w-full max-h-full mt-20">
        <h1 className="text-black text-3xl mb-6 font-bold">Meus Projetos</h1>
        <div className="w-full max-h-full grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
          <div className="w-full max-h-full flex flex-col bg-white shadow-md border rounded-sm p-2 mt-6">
            <div className="w-full lg:h-80 mb-4">
              <img
                src="/sim.png"
                alt="project picture"
                className="w-full h-full contain rounded-tl-sm rounded-tr-sm"
              />
            </div>
            <span className="text-black font-bold text-md mb-2">
              SIM Instituto Social
            </span>
            <p className="text-black/50 text-sm">
              Sou o responsável pela criação e desenvolvimento de novas páginas
              web e componentes interativos, utilizando tecnologias, como HTML,
              CSS e Javascript. <br /> <br /> Minha contribuição é fundamental
              para aprimorar a presença online do instituto, garantindo uma
              experiência de usuário atraente e eficaz. Além disso, utilizo o
              Bootstrap para a estilização e tornar as páginas altamente
              responsivas em diversos dispositivos, melhorando assim a
              acessibilidade e a usabilidade para um público mais amplo.
            </p>
            <div className="max-w-full max-h-full flex items-center">
              <a
                href="https://simsertaosocial.org/"
                target="blank"
                className="text-white text-sm rounded-sm bg-cyan-950 p-2 mt-6 hover:bg-cyan-950/80 duration-200"
              >
                Ver Projeto
              </a>
            </div>
          </div>
          <div className="w-full max-h-full flex flex-col bg-white shadow-md border rounded-sm p-2 mt-6">
            <div className="w-full lg:h-80 mb-4">
              <img
                src="/orgkilo.png"
                alt="project picture"
                className="w-full h-full contain rounded-tl-sm rounded-tr-sm"
              />
            </div>
            <span className="text-black font-bold text-md lg:mt-auto mb-2">
              OrganoKilo
            </span>
            <p className="text-black/50 lg:mt-auto text-sm">
              Sou o responsável pela criação e desenvolvimento de novas páginas
              web e componentes interativos, utilizando tecnologias, como HTML,
              CSS e Javascript. <br /> <br /> Minha contribuição é fundamental
              para aprimorar a presença online do instituto, garantindo uma
              experiência de usuário atraente e eficaz. Além disso, utilizo o
              Bootstrap para a estilização e tornar as páginas altamente
              responsivas em diversos dispositivos, melhorando assim a
              acessibilidade e a usabilidade para um público mais amplo.
            </p>
            <div className="max-w-full max-h-full flex lg:mt-auto items-center">
              <a
                href="https://orgkilo.vercel.app/"
                target="blank"
                className="text-white text-sm rounded-sm bg-cyan-950 p-2 mt-6 hover:bg-cyan-950/80 duration-200"
              >
                Ver Projeto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
