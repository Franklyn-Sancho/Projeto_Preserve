import styled from 'styled-components';

export const MainStyle = styled.div``;

MainStyle.Main = styled.main`
  background: #eaf4dc;
  border-radius: 10px;
  padding: 45px;
  margin: 30px;
  width: 50%;
  max-width: 580px;
  text-align: center;
`;

MainStyle.Title = styled.div`
	margin: 0;
`;

MainStyle.TitleH1 = styled.h1`
	font-size: 60px;
`;

MainStyle.TitleP = styled.p`
	padding: 0 15px;
	margin: 0;
	position: relative;
	bottom: 25px;
	font-size: 18px;
`; 

MainStyle.P = styled.p`
	padding: 0 30px;
`;

MainStyle.Search = styled.input`
	display: flex;
	position: relative;
	bottom: 10px;
`;

MainStyle.Input = styled.input`
	width: 380px;
	margin-left: 27px;
`; 

MainStyle.Button = styled.button`
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

MainStyle.Information = styled.div`
    display: flex;
	position: relative;
	bottom: 20px;
	margin-left: 25px;

	p {
		padding: 0 25px;
	}
`;