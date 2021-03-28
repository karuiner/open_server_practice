import styled from "styled-components";
import Main from "./scripts/Main";
import Sub from "./scripts/Sub";
import Inputbox from "./scripts/Input";

import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null, isSub: false, target: "", ...this.state, isfetching: true };
    }

    search = () => {
        let com = "http://localhost:3300/data";
        return fetch(com)
            .then((d) => d.json())
            .then((r) => {
                this.setState({ data: r.items, isfetching: false });
                return r;
            });
    };
    select = (data) => {
        this.setState({ target: data, isSub: true });
    };

    componentDidMount() {}
    componentDidUpdate() {
        console.log(this.state);
    }
    render() {
        let target = this.state.target;
        let data = this.state.data;
        return (
            <Bodybox>
                <Inputbox></Inputbox>
                {this.state.isSub ? <Sub target={target} data={data} select={this.select}></Sub> : <Main search={this.search} select={this.select}></Main>}
            </Bodybox>
        );
    }
}

const Bodybox = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

export default App;
