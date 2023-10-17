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
              web e componentes interativos, utilizando tecnologias, como{" "}
              <strong>HTML, CSS e Javascript</strong>. <br /> <br /> Minha
              contribuição é fundamental para aprimorar a presença online do
              instituto, garantindo uma experiência de usuário atraente e
              eficaz. Além disso, utilizo o <strong>Bootstrap</strong> para a
              estilização e tornar as páginas altamente responsivas em diversos
              dispositivos, melhorando assim a acessibilidade e a usabilidade
              para um público mais amplo.
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
              O Organokilo é um projeto <strong>fullstack</strong> criado com
              diversas tecnologias, incluindo{" "}
              <strong>Spring Boot, Next.js e Tailwind CSS</strong> para a
              estilização responsiva do projeto. Foi desenvolvido com uma
              abordagem <strong>mobile-first</strong>, priorizando a experiência
              em dispositivos móveis. Este site oferece uma plataforma intuitiva
              e prática para a criação de organogramas: estrutura hierárquica de
              uma organização, empresa ou grupo. O sistema de autenticação foi
              desenvolvido com o uso do <strong>Spring Security</strong>, onde,
              ao fazer login, o token do usuário é armazenado no localStorage.
            </p>
            <div className="max-w-full max-h-full flex lg:mt-auto space-x-2 items-center">
              <a
                href="https://orgkilo.vercel.app/"
                target="blank"
                className="text-white text-sm rounded-sm bg-cyan-950 p-2 mt-6 hover:bg-cyan-950/80 duration-200"
              >
                Ver Projeto
              </a>
              <a
                href="https://github.com/Samuel01111/orgkilo.git"
                target="blank"
                className="text-white text-sm rounded-sm bg-cyan-950 p-2 mt-6 hover:bg-cyan-950/80 duration-200"
              >
                Ver Código
              </a>
            </div>
          </div>
          <div className="w-full max-h-full flex flex-col bg-white shadow-md border rounded-sm p-2 mt-6">
            <div className="w-full lg:h-80 mb-4">
              <img
                src="/essenza.png"
                alt="project picture"
                className="w-full h-full contain rounded-tl-sm rounded-tr-sm"
              />
            </div>
            <span className="text-black font-bold text-md lg:mt-auto mb-2">
              Essenza Beauty
            </span>
            <p className="text-black/50 lg:mt-auto text-sm">
              Essenza é uma landing page criada em{" "}
              <strong>ReactJS e estilizada com Tailwind CSS</strong>. Com um
              design <strong>mobile-first</strong>, seu objetivo principal é
              apresentar visualmente um trabalho acadêmico de forma atraente.
              Para a navegação dentro da aplicação, utilizei o React Router DOM,
              que me permitiu criar um sistema de rotas para garantir uma
              experiência de usuário mais fluente.
            </p>
            <div className="max-w-full max-h-full flex lg:mt-auto space-x-2 items-center">
              <a
                href="https://essenzabeauty.vercel.app/"
                target="blank"
                className="text-white text-sm rounded-sm bg-cyan-950 p-2 mt-6 hover:bg-cyan-950/80 duration-200"
              >
                Ver Projeto
              </a>
              <a
                href="https://github.com/doguebart/essenza.git"
                target="blank"
                className="text-white text-sm rounded-sm bg-cyan-950 p-2 mt-6 hover:bg-cyan-950/80 duration-200"
              >
                Ver Código
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
