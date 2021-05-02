import React, { useState } from 'react';
import { postUser } from '../../requests/request';
import { Header } from '../../components/index';
import { Global } from '../../styles/globalStyle';
import { useHistory } from 'react-router-dom';
import { SejaStyles } from './styles/Seja';

export default function Seja() {
	let request = useHistory();
	const[space, setSpace] = useState({
		Name: '',
		Email: '',
		Password: ''
	})

	const handleInputChange = event => {
		setSpace({ ...space, space: event.target.value });
	}

	const handleFormSubmit = () => {
		request.push(postUser);
	}

	return (
		<>
		    <Global/> 
			<Header />
			<SejaStyles.Seja>
				<SejaStyles.SignUp>
					<SejaStyles.SignUpPage>
						<SejaStyles.H1>
							Não abrace só causas, 
							abrace vidas
						</SejaStyles.H1>
						<SejaStyles.H3>
							Quase lá! Basta preencher o furmulário 
							para se tornar um herói
						</SejaStyles.H3>
						<SejaStyles.P>
							Os animais não se importam se você
							não usa capa, nao tem armas ou 
							equipamentos legais
						</SejaStyles.P>
					</SejaStyles.SignUpPage>
					<SejaStyles.SignUpForm>
						<h2>Cadastrar uma conta</h2>
						<form name="dados" onSubmit={handleFormSubmit}>
							<div className="input-name">
								<label></label>
								<input 
								    type="text" 
									name="Name"
									placeholder="Nome"
									id="name" 
									onChange={handleInputChange}
								/>

								<label></label>
								<input 
								    type="text" 
									name="Name"
									placeholder="Sobrenome"
									id="Name" 
									onChange={handleInputChange}
								/>
							</div>
							
							<div className="input-password">
								<label></label>
								<input 
								    name="Email" 
									id="email"
									placeholder="E-mail"
									onChange={handleInputChange}
								/>
							
								<label></label>
								<input 
								    name="Password" 
									id="password"
									type="password" 
									placeholder="Senha"
									onChange={handleInputChange} 
								/>

								<label></label>
								<input 
								    id="date" 
									type="date" 
							    />
							</div>
							<button id="submit" type="submit">Cadastrar</button>
						</form>
					</SejaStyles.SignUpForm>
				</SejaStyles.SignUp>
			</SejaStyles.Seja>
		</>

	)
}




