import React from "react";
import "./Main.css";
import Header from "../../components/header/Header";

export default function Main() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <div className="row">
          <div className="col-sm-8">
            <div className="title-main">
              <h1>
                Qual espécie nós vamos salvar hoje? <i class="fas fa-paw"></i>
              </h1>
              <p>
                Ajudamos você com informações sobre as espécies, estados de
                conservação, riscos de extinção, lei de proteção, taxonomia e
                como ajudar na preservação dos animais. Basta escrever o nome da
                espécie desejada no campo abaixo e clicar "pesquisar".
              </p>
              <form action="">
                <input
                  type="text"
                  placeholder="Digite o nome da espécie. Por exemplo: Leão"
                />
                <button type="button" class="btn btn-success">
                  <i class="fas fa-search" style={{ marginRight: "8px" }}></i>
                  Pesquisar
                </button>
              </form>
              <div className="info">
                <p>
                  <i
                    class="fas fa-check-circle"
                    style={{ marginRight: "10px", color: "#6be579" }}
                  ></i>
                  Taxonomia
                </p>
                <p>
                  <i
                    class="fas fa-check-circle"
                    style={{ marginRight: "10px", color: "#6be579" }}
                  ></i>
                  preservação
                </p>
                <p>
                  <i
                    class="fas fa-check-circle"
                    style={{ marginRight: "10px", color: "#6be579" }}
                  ></i>
                  organizações
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
