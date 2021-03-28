import styled from "styled-components";
import Main from "./scripts/Main";
import Sub from "./scripts/Sub";
import Inputbox from "./scripts/Input";

import { Component } from "react";
//const apikey = "AIzaSyCNF4B1V8Rde3ZBBAaTxbOFR3ENnk4mDhk";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null, isSub: false, target: "", ...this.state, isfetching: true };
        // console.log(this.state);
    }

    search = () => {
        //        let com = `https://www.googleapis.com/youtube/v3/search?key=${apikey}&part=snippet&type=video&videoEmbeddable=true&maxResults=20`;
        let com = "http://localhost:3300/data";
        //    if (target !== undefined) com += `&q=${target}`;
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

    componentDidMount() {
        // let com = `https://www.googleapis.com/youtube/v3/search?key=${apikey}&part=snippet&type=video&videoEmbeddable=true&maxResults=20`;
        // //    if (target !== undefined) com += `&q=${target}`;
        // fetch(com)
        //     .then((d) => d.json())
        //     .then((r) => this.setState({ data: r, isfetching: false }));
    }
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
