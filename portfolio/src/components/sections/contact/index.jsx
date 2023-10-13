import React from "react";

const Contact = () => {
  return (
    <div
      className="w-full lg:w-2/3 px-4 py-4 lg:px-10 self-center max-h-full"
      id="contact"
    >
      <div className="w-full max-h-full mt-20 mb-20">
        <h1 className="text-black text-3xl font-bold capitalize">
          Entre em contato
        </h1>
        <form className="w-full max-h-full rounded-sm bg-white border py-4 px-4 flex flex-col space-y-6 mt-10 shadow-lg">
          <div className="w-full max-h-full flex flex-col">
            <label className="text-sm">Nome Completo</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="outline-none border-b py-2 focus:border-cyan-950"
            />
          </div>
          <div className="w-full max-h-full flex flex-col">
            <label className="text-sm">E-mail Válido</label>
            <input
              type="text"
              placeholder="Digite o seu e-mail"
              className="outline-none border-b py-2 focus:border-cyan-950"
            />
          </div>
          <div className="w-full max-h-full flex flex-col">
            <label className="text-sm">Mensagem</label>
            <textarea
              type="text"
              placeholder="Por que está entrando em contato?"
              className="outline-none border-b h-20 py-2 focus:border-cyan-950"
            />
          </div>
          <button className="w-1/2 lg:w-1/12 p-2 mt-4 bg-cyan-950 text-sm text-white rounded-sm">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
