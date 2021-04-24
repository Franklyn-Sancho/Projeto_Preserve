import React from 'react'
import '../styles/Seja.css'
import Header from './Header'


// eslint-disable-next-line import/no-anonymous-default-export
export default props =>

<React.Fragment>
	<Header {...props} />

    <div className="seja">
	<div className="signup">
			<div className="signup-page">
					<h1>Cadastrar conta</h1>
						<p>
							Quase lá! basta preencher o formulário e salvar as espécies
						</p>
				</div>
				<div className="signup-form">
					<h2>Cadastrar</h2>
					<form name="dados">
						<div>
							<label>Nome</label>
							<input type="text" name="Name" 
							placeholder="Husky@dogmail" 
							id="Name">
					
							</input>
						</div>
						<div>
							<label>E-mail</label>
							<input name="Email" id="email" 
							placeholder="Husky@dogmail" >
							
							</input>
						</div>
						<div>
							<label>Senha</label>
							<input name="Password" id="password" 
							type="password" placeholder="********" >
							</input>

						</div>
						<button id="submit" type="submit">Cadastrar</button>
						<button id="submit" type="submit">Login</button>
					</form>
				</div>
			</div>
         </div>
</React.Fragment>







