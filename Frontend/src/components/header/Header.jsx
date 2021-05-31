import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


export default function Header() {

	return (

		<div className="container">
			<div className="header">
				<div className="title">
					<Link to="/">
						<h1>Preserve</h1>
					</Link>
				</div>
				<div className="main-menu">
					<Link to="/Missão">
					<button type="button" class="btn btn-success">Missão <i class="far fa-question-circle"></i></button>	
					</Link>
					<button type="button" class="btn btn-success">Sobre nós <i class="far fa-smile"></i></button>
					<Link to="/Sobre">
					<button type="button" class="btn btn-success">Noticias <i class="far fa-handshake"></i></button>
					</Link>
					<Link to="/Missão">
					<button type="button" class="btn btn-success">Fontes</button>	
					</Link>
				</div>
				<div className="login">
					<Link to="/Seja">
					<button type="button" class="btn btn-dark">Junte-se <i class="far fa-handshake"></i></button>
					</Link>
					<i class="far fa-user"></i>
			</div>
			</div>
		</div>

	)
}
