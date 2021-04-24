import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>

	<header className="header">
		<div className="container">
			<div className="title">
				<Link to="/">
				<h1>NomeProjeto</h1>
				</Link>
			</div>
			<div className="main-menu">
			<Link to="/Missão">
				<button>Missão</button>
			</Link>
				<button>Notícias</button>
			<Link to="/Sobre">
				<button>Sobre nós</button>
			</Link>
			</div>
				<div className="login">
				<Link to="/Seja">
					<button className="button-signup">Seja</button>
				</Link>
					Usuário
			</div>
		</div>
	</header>
