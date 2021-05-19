import React from "react";
import "./Seja.css";
import Header from "../../components/header/Header";
import { useForm } from "react-hook-form";
import axios from 'axios'

const baseUrl = 'localhost:3333/seja'

export default function Seja() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault()
		axios.post(baseUrl, data)
			.then(response => {
				alert('cadastro enviado')
			})
  }

  return (
    <>
      <Header />

      <div className="seja">
        <div className="signup">
          <div className="signup-page">
            <h1>Não abrace só causas, abrace vidas</h1>
            <h3>
              Quase lá! Basta preencher o furmulário para se tornar um herói
            </h3>
            <p>
              Os animais não se importam se você não usa capa, nao tem armas ou
              equipamentos legais
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
                <p>{errors.Nome?.type === "required" && "Nome obrigatório"}</p>
                <label></label>
                <input
                  type="text"
                  name="Name"
                  placeholder="Sobrenome"
                  id="Name"
                  {...register("Sobrenome", { required: true })}
                ></input>
                <p>
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
                  {...register("Email", { required: true })}
                ></input>
                <p>
                  {errors.Email?.type === "required" &&
                    "Por favor, informe um email"}
                </p>

                <label></label>
                <input
                  name="Password"
                  id="password"
                  type="password"
                  placeholder="Senha"
                  {...register("Senha", { required: true })}
                ></input>
                <p>
                  {errors.Senha?.type === "required" &&
                    "Por favor, digite uma senha"}
                </p>
                <label></label>
                <input id="date" type="date"></input>
              </div>
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
