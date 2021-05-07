import React, { useState } from 'react';
import '../styles/Seja.css';
import Header from './Header';
import axios from 'axios';

export default function Seja() {
	const [campos, setCampos] = useState({
		Name: '',
		Email: '',
		Password: ''
	})

	function handleInputChange(event) {
		campos[event.target.name] = event.target.value
		setCampos(campos)
	}

	function handleFormSubmit(event) {
		event.preventDefault()
		axios.post('http://localhost:3333/seja', campos)
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
						<h1>Não abrace só causas, 
							abrace vidas
						</h1>
						<h3>
							Quase lá! Basta preencher o furmulário 
							para se tornar um herói
						</h3>
						<p>Os animais não se importam se você
							não usa capa, nao tem armas ou 
							equipamentos legais
						</p>
					</div>
					<div className="signup-form">
						<h2>Cadastrar uma conta</h2>
						<form name="dados" onSubmit={handleFormSubmit}>
							<div className="input-name">
								<label></label>
								<input type="text" name="Name"
									placeholder="Nome"
									id="name" onChange={handleInputChange}>
								</input>
								<label></label>
								<input type="text" name="Name"
									placeholder="Sobrenome"
									id="Name" onChange={handleInputChange}>
								</input>
							</div>
							<div className="input-password">
								<label></label>
								<input name="Email" id="email"
									placeholder="E-mail"
									onChange={handleInputChange}>
								</input>
								
							
								<label></label>
								<input name="Password" id="password"
									type="password" placeholder="Senha"
									onChange={handleInputChange}>
								</input>
								<label></label>
								<input id="date" type="date">

								</input>

							</div>
							<button id="submit" type="submit">Cadastrar</button>
						</form>
					</div>
				</div>
			</div>
		</>

	)
}




