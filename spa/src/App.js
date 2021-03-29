import react, { Component } from "react";
import styled from "styled-component";

class App extends Component {
    render() {
        return (
            <Body>
                <Header></Header>
                {}
            </Body>
        );
    }
}
const Body = styled.div`
    height: 100vh;
    width: 100vw;
`;

const Header = styled.div`
    position : fixed
    height :50px;
    width:100%;
    border:solid 1px black;
`;

export default App;
