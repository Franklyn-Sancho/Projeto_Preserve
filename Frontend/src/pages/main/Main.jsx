import React from 'react';
import { Header } from '../../components/index';
import { Link } from 'react-router-dom';
import { Global } from '../../styles/globalStyle';
import { MainStyle } from './styles/Main';

export default function Main() {
	return (
		<>
		    <Global/>
			<Header />
			<MainStyle>
				<MainStyle.Container>
					<MainStyle.Title>
						<MainStyle.H1>Qual espécie vamos salvar hoje?</MainStyle.H1>
						<MainStyle.P>Ajudamos você com informações sobre
						as espécies, estados de conservação,
						riscos de extinção, lei de proteção,
						e como ajudar na preservação
				        das espécies.</MainStyle.P>
					</MainStyle.Title>
					<MainStyle.Search>
						<MainStyle.Input 
						    name="name" 
							id="name"
							type="text" 
							placeholder="Digite o nome da espécie" 
						/>
						<Link to="/Pesquisa">
							<MainStyle.Button type="submit">Começar</MainStyle.Button>
						</Link>
					</MainStyle.Search>
					<MainStyle.Information>
						<p>Taxonomia</p>
						<p>Preservação</p>
						<p>Organizações</p>
					</MainStyle.Information>
				</MainStyle.Container>
			</MainStyle>
		</>

	)
}

