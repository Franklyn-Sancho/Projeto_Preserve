import React from 'react';
import { Header } from '../../components/index';
import { Link } from 'react-router-dom';
import { Global } from '../../styles/globalStyle';

export default function Main() {
	return (
		<>
		    <Global/>
			<Header />
			<main className="main">
				<div className="container">
					<div className="title-main">
						<h1>Qual espécie vamos salvar hoje?</h1>
						<p>Ajudamos você com informações sobre
						as espécies, estados de conservação,
						riscos de extinção, lei de proteção,
						e como ajudar na preservação
				        das espécies.</p>
					</div>
					<form className="search">
						<input name="name" id="name"
							type="text" placeholder="Digite o nome da espécie">
						</input>
						<Link to="/Pesquisa">
							<button type="submit">Começar</button>
						</Link>
					</form>
					<div className="inf">
						<p>Taxonomia</p>
						<p>Preservação</p>
						<p>Organizações</p>
					</div>
				</div>
			</main>
		</>

	)
}
