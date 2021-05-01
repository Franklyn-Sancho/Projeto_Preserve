import styled from 'styled-components';

export const Header= styled.div``;

Header.Header = styled.header`
	height: 60px;
	display: flex;
    padding: 0 10px;
    background: #baffda;
    font-size: 15px;
`;

Header.Container = styled.div`
    display: contents;
`;

Header.Title = styled.div`
    margin-left: 40px
`;

Header.H1 = styled.h1`
    font-size: 30px;
	display: flex;
	position: relative;
	bottom: 7px;
`;

Header.Menu = styled.main`
    width: 400px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 450px;
`;

Header.Button = styled.button`
    height: 32px;
	background: #baffda;
	color: #000;
	width: 100px;
	border-radius: 6px;
	border: 0;
	font-size: 18px;

	& {
		background: #93e8fd;
	}
`;

Header.ButtonSignUp = styled.button`
    background: #00c2cb;
	margin: 2px;
`;

Header.Login = styled.div`
    width: 300px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	font-size: 18px;
	margin-left: 60px;
`;