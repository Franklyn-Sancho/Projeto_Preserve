import React from 'react'
import '../styles/Main.css'
import Header from './Header'
import { Link } from 'react-router-dom'



// eslint-disable-next-line import/no-anonymous-default-export
export default props =>

	<React.Fragment>
		<Header  {...props}/>
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
				<button type="submit">
					Começar
	     		</button>
				</Link>
			</form>
			<div className="inf">
				<p>Taxonomia Preservação Organizações</p>
			</div>
		</div>
	</main>
</React.Fragment>

