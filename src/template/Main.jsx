import React from 'react'
import './Main.css'


export default props =>

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
			<div className="search">
				<input name="name" id="name"
				type="text" placeholder="Digite o nome da espécie">
				</input>
				<button type="submit">Começar</button>
			</div>
			<div className="inf">
				<p>Taxonomia Preservação Organizações</p>
			</div>
		</div>
	</main>


