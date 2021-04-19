import React from 'react'
import './Header.css'

export default props =>

	<header className="header">
		<div className="container">
			<div className="title">
				<h1>NomeProjeto</h1>
			</div>
			<div className="main-menu">
				<button>Missão</button>
				<button>Notícias</button>
				<button>Seja</button>
				<button>Sobre nós</button>
			</div>
			<div className="login">
				Usuário
			</div>
		</div>
	</header>
