import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<>
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
		</>
	)
}
