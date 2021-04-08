import styled from "styled-components";

function Cwindow({ state, getScale, getcoor, get }) {
  let { ra, dec, scale } = state;
  return (
    <CommandBox>
      <Inputandbutton
        ra={ra}
        dec={dec}
        func={getcoor}
        get={get}
      ></Inputandbutton>
      <Scalebox func={getScale} scale={scale}></Scalebox>
    </CommandBox>
  );
}

function Scalebox({ func, scale }) {
  return (
    <Scale>
      <Ston
        onClick={() => {
          func("-");
        }}
      >
        {"-"}
      </Ston>
      <Dspvalue>{scale.toFixed(1)}</Dspvalue>
      <Ston
        onClick={() => {
          func("+");
        }}
      >
        {"+"}
      </Ston>
    </Scale>
  );
}
const Ston = styled.button`
  flex: 1 0 0;
  font-size: 30px;
  border: white;
  background-color: inherit;
`;
const Dspvalue = styled.div`
  text-align: center;
  flex: 2 0 0;
`;

const Scale = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 0;
  align-items: center;
  border-top: solid 2px gold;
`;

const CommandBox = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  height: 100px;
  width: 300px;
  position: fixed;
  background-color: #e7e7e7;
`;

function Inputandbutton({ ra, dec, func, get }) {
  return (
    <Iab>
      <InputBox>
        <Sinput label="Ra" x={ra} func={func}></Sinput>
        <Sinput label="Dec" x={dec} func={func}></Sinput>
      </InputBox>
      <Button onClick={() => get()}>{"찾기"}</Button>
    </Iab>
  );
}
const Iab = styled.div`
  display: flex;
  flex: 2 0 0;
  flex-direction: row;
`;

const InputBox = styled.div`
  display: flex;
  flex: 2 0 0;
  flex-direction: column;
`;
const Button = styled.button`
  flex: 1 0 0;
  border: white;
  background-color: inherit;
`;

function Sinput({ label, placeholder = "", x, func }) {
  return (
    <InputBoxSingle>
      <Lpan>
        <Span>{`${label} : `}</Span>
      </Lpan>
      <Input
        type="text"
        size={10}
        placeholder={placeholder}
        value={x}
        onChange={(e) => {
          func(label.toLowerCase(), e);
        }}
      ></Input>
    </InputBoxSingle>
  );
}
const InputBoxSingle = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 0;
`;

const Lpan = styled.span`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  justify-content: center;
`;

const Span = styled.span`
  display: inline-block;
  padding-right: 5px;
  text-align: right;
`;
const Input = styled.input`
  flex: 2 0 0;
`;

export default Cwindow;
