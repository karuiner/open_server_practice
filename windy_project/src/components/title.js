import styled from "styled-components";

function Title({ style, children }) {
  return <Titlecss {...style}>{children}</Titlecss>;
}

const Titlecss = styled.div`
  display: flex;
  font-size: 200px;
  font-weight: 500;
  margin-top:3%;
  height:30%
  color: black;
  font-family: "Nanum_pen";
  text-shadow: -1px 0 aqua, 0 2px aqua, 2px 0 aqua, 0 -1px aqua;
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

export default Title;
