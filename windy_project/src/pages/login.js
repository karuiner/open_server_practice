import styled from "styled-components";
import Title from "../components/title";
import LoginWindow from "../components/login_window";

function Login() {
  let style = {
    "font-size": "12.5vw",
    "align-items": "start",
    "padding-bottom": "2.5%",
  };
  return (
    <Frame>
      <Title style={style}>Windy</Title>
      <LoginWindow></LoginWindow>
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export default Login;
