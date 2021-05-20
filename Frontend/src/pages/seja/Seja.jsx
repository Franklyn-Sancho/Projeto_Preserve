import React from "react";
import "./Seja.css";
import Header from "../../components/header/Header";
import { useForm } from "react-hook-form";
import axios from 'axios'

const baseUrl = "http://localhost:3333";

export default function Seja() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    axios.post(baseUrl, data).then((response) => {
      alert("cadastro enviado");
    });
  };

  return (
    <>
      <Header />

      <div className="seja">
        <div className="signup">
          <div className="signup-page">
            <h1>Não abrace só causas, abrace vidas</h1>
            <p>
              Hoje, infelizmente, muitas espécies estão 
              em risco de extinção. Se a gente não se reunir 
              para fazer alguma coisa, nem que seja espalhar
              o conhecimento, chegará a um ponto, que o quadro
              será irreversível. Todos nós, viventes desse mesmo
              mundo, temos responsabilidades com esta terra. 
              Temos de lutar pela preservação das espécies, 
              dos habitats e respeitar a natureza
            </p>
          </div>
          <div className="signup-form">
            <h2>Ainda não tem uma conta? cadastre-se.</h2>
            <form name="dados" method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="input-name">
                <label></label>
                <input
                  type="text"
                  name="Name"
                  placeholder="Nome"
                  id="name"
                  {...register("Nome", { required: true })}
                ></input>
                <p className="errors">{errors.Nome?.type === "required" && "Nome obrigatório"}</p>
                <label></label>
                <input
                  type="text"
                  name="Name"
                  placeholder="Sobrenome"
                  id="Name"
                  {...register("Sobrenome", { required: true })}
                ></input>
                <p className="errors">
                  {errors.Sobrenome?.type === "required" &&
                    "Sobrenome obrigatório"}
                </p>
              </div>
              <div className="input-password">
                <label></label>
                <input
                  name="Email"
                  id="email"
                  placeholder="E-mail"
                  {...register("Email", {
                    required: true,
                    pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
                  })}
                ></input>
                <p className="errors">
                  {errors.Email?.type === "pattern" &&
                    "Informe um email válido"}
                  {errors.Email?.type === "required" && "Email obrigatório"}
                </p>

                <label></label>
                <input
                  name="Password"
                  id="password"
                  type="password"
                  placeholder="Senha"
                  {...register("Senha", {
                    required: true,
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  })}
                ></input>
                <p className="errors">
                  {errors.Senha?.type === "required" &&
                    "Por favor, digite uma senha"}
                  {errors.Senha?.type === "pattern" &&
                    "Digite uma senha mais forte"}
                </p>
                <input
                  name="Password"
                  id="password"
                  type="password"
                  placeholder="Confirmar senha"
                  {...register("Senha", {
                    required: true,
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  })}
                ></input>
                <p className="errors">
                  {errors.Senha?.type === "required" &&
                    "Por favor, digite uma senha"}
                  {errors.Senha?.type === "pattern" &&
                    "Digite uma senha mais forte"}
                </p>
              </div>
              <button className="button-signup" type="submit">Cadastrar</button>
              <div className="question-form">
                <p>Já é cadastrado?</p>
                <p>Conheça nossa política</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
