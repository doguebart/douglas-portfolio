import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FiLoader } from "react-icons/fi";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Limpar mensagem de erro ao começar a digitar no campo
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formValues.name) {
      newErrors.name = "Campo obrigatório";
    }

    if (!formValues.email) {
      newErrors.email = "Campo obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formValues.message) {
      newErrors.message = "Campo obrigatório";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (!isFormValid) {
      return;
    }

    setLoading(true); // Define o estado de carregamento para true durante a requisição

    const emailParams = {
      from_name: formValues.name,
      from_email: formValues.email,
      message: formValues.message,
    };

    emailjs
      .send(
        "service_3rqzlbr",
        "template_yhdfj1d",
        emailParams,
        "3H0rJZq6W48iStwHF"
      )
      .then(
        function (response) {
          console.log("E-mail enviado com sucesso", response);
          setSuccessMessage("E-mail enviado com sucesso!");
        },
        function (error) {
          console.error("Erro ao enviar o e-mail", error);
        }
      )
      .finally(() => {
        setLoading(false); // Defina o estado de carregamento de volta para false após a requisição
      });

    setFormValues({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className="w-full lg:w-2/3 px-4 py-4 lg:px-10 self-center max-h-full"
      id="contact"
    >
      <div className="w-full max-h-full mt-20 mb-20">
        <h1 className="text-black text-3xl font-bold capitalize">
          Entre em contato
        </h1>
        <form
          className="w-full max-h-full rounded-sm bg-white border py-4 px-4 flex flex-col space-y-6 mt-10 shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="w-full max-h-full flex flex-col">
            <label className="text-sm">Nome Completo</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              className={`outline-none border-b py-2 focus:border-cyan-950 ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="w-full max-h-full flex flex-col">
            <label className="text-sm">E-mail Válido</label>
            <input
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Digite o seu e-mail"
              className={`outline-none border-b py-2 focus-border-cyan-950 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="w-full max-h-full flex flex-col">
            <label className="text-sm">Mensagem</label>
            <textarea
              name="message"
              value={formValues.message}
              onChange={handleChange}
              placeholder="Por que está entrando em contato?"
              className={`outline-none border-b h-20 py-2 focus-border-cyan-950 ${
                errors.message ? "border-red-500" : ""
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {successMessage && (
            <p className="text-green-500 text-sm mt-2">{successMessage}</p>
          )}

          <button
            className={`w-1/2 lg:w-1/12 flex items-center justify-center p-2 mt-4 bg-cyan-950 text-sm text-white rounded-sm ${
              loading ? "opacity-50" : ""
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? <FiLoader className="animate-spin" /> : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
