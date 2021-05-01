import styled from 'styled-components';

const Main = styled.div``;

Main.Main = styled.main`
  background: #eaf4dc;
  border-radius: 10px;
  padding: 45px;
  margin: 30px;
  width: 50%;
  max-width: 580px;
  text-align: center;
`;

Main.Title = styled.div`
	margin: 0;
`;

Main.TitleH1 = styled.h1`
	font-size: 60px;
`;

Main.TitleP = styled.p`
	padding: 0 15px;
	margin: 0;
	position: relative;
	bottom: 25px;
	font-size: 18px;
`; 

Main.P = styled.p`
	padding: 0 30px;
`;

Main.Search = styled.input`
	display: flex;
	position: relative;
	bottom: 10px;
`;

Main.Input = styled.input`
	width: 380px;
	margin-left: 27px;
`; 

Main.Button = styled.button`
    height: 35px;
	color: white;
	width: 120px;
	border: 0;
	border-radius: 0;
	border: 0;
	background: #25a422;

	& {
		background: #6be579;
	}
`;

Main.Inf = styled.div`
    display: flex;
	position: relative;
	bottom: 20px;
	margin-left: 25px;
`;

Main.Inf = styled.p`
    padding: 0 25px;
`; 	