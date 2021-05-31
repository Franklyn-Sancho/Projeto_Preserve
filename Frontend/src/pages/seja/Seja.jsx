import React from "react";
import "./Seja.css";
import Header from "../../components/header/Header";
import { useForm } from "react-hook-form";
import axios from "axios";

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
    <div className="container">
      <Header />
      <div className="signup">
        <div class="row">
          <div class="col-sm-6">
            <div className="form-content">
              <div class="jumbotron" style={{background: 'transparent'}}>
                <h1 class="display-4">Por que me juntar?</h1>
                <p class="lead">
                  O nosso projeto visa ajudar a todos que tem o interesse
                  de fazer a diferença na vida de diversas espécies
                  que hoje grita por socorro.
                </p>
                <hr class="my-4" />
                <p>
                  Clique em saiba mais para saber todas as informações
                  necessárias
                </p>
                <a class="btn btn-dark btn-lg" href="#" role="button">
                  Leia mais
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div className="sign-form">
              <h5>
                Amou o nosso projeto e gostaria de fazer parte da nossa
                história? então cadastre-se :)
              </h5>
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Nome</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Digite seu nome"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">Sobrenome</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Digite seu sobrenome"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Email@preserve.com"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    Nunca vamos compartilhar seu email, com ninguém.
                  </small>
                </div>
                <div class="form-group">
                  <label for="inputAddress2">Senha</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="digite uma senha segura"
                  />
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      Você aceita os nossos termos de privacidade?
                    </label>
                    <small id="emailHelp" class="form-text text-muted">
                      Nunca vamos compartilhar seus dados com ninguém
                    </small>
                  </div>
                </div>
                <button type="submit" class="btn btn-success">
                  Juntar-se <i class="fas fa-heart"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
