import styled from "styled-components";

function LoginWindow() {
  return (
    <Frame>
      <InputFrame>
        <Input></Input>
      </InputFrame>
      <InputFrame>
        <Input></Input>
      </InputFrame>
      <ButtonFrame>
        <Button></Button>
        <Button></Button>
      </ButtonFrame>
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 35%;

  background: linear-gradient(225deg, rgb(84, 255, 135), rgb(69, 214, 250));
  border-radius: 30px;
  border: solid 1px rgb(84, 255, 135);
`;
const InputFrame = styled.div``;

const Input = styled.input``;

const ButtonFrame = styled.div``;
const Button = styled.button``;

export default LoginWindow;
