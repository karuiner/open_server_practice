import styled from "styled-components";

function LoginWindow({ input1, input2, button_left, button_right }) {
  return (
    <Frame>
      <InputFrame>
        <Input type="text" placeholder={input1}></Input>
      </InputFrame>
      <InputFrame>
        <Input type="text" placeholder={input2}></Input>
      </InputFrame>
      <ButtonFrame>
        <Button {...{ "border-bottom-left-radius": "30px" }}>
          {button_left}
        </Button>
        <Button {...{ "border-bottom-right-radius": "30px" }}>
          {button_right}
        </Button>
      </ButtonFrame>
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 400px;

  background: linear-gradient(225deg, rgb(84, 255, 135), rgb(69, 214, 250));
  border-radius: 30px;
  border: solid 1px rgb(84, 255, 135);
`;
const InputFrame = styled.div`
  display: flex;
  flex: 3 0 0;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  font-family: "Nanum_pen";
  font-size: 50px;
  height: 1em;
  background: rgb(69, 214, 250);
  margin: auto;
  text-align: center;
  border-radius: 10px;
  border: solid 1px rgb(84, 255, 135);
  outline: none;
`;

const ButtonFrame = styled.div`
  display: flex;
  flex: 2 0 0;
  flex-direction: row;
  font-size: 35px;
  transition: background-color 0.5s;
`;
const Button = styled.button`
  flex: 1 0 0;
  font-family: "Nanum_pen";
  font-size: 35px;
  background-color: inherit;
  border: solid 1px rgb(84, 255, 135);
  outline: none;
  opacity: 0.5;
  transition: background-color 0.5s;
  &:hover {
    background: rgb(158, 255, 48);
    transition: 0.4s;
  }
  ${(props) =>
    Object.keys(props).reduce((acc, x) => {
      let y = "";
      if (x !== "children" && x !== "theme") {
        y += `${x}:${props[x]};`;
      }
      console.log(x, y, acc);
      return acc + y;
    }, "")}
`;

export default LoginWindow;
