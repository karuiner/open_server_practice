import styled from "styled-components";
import Title from "../components/title";
import LoginWindow from "../components/login_window";

function Login() {
  let style = {
    "align-items": "start",
    "padding-bottom": "2.5%",
  };
  let isLogin = true;
  let login_data = {
    input1: "user name",
    input2: "password",
    button_left: "회원 가입",
    button_right: "로그 인",
  };
  let resister_data = {
    input1: "user name",
    input2: "password",
    button_left: "취소",
    button_right: "가입",
  };

  let indata = isLogin ? login_data : resister_data;
  return (
    <Frame>
      <Title style={style}>Windy</Title>
      <LoginWindow {...indata}></LoginWindow>
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
