import { Component } from "react";
import styled from "styled-components";
import Imagebox from "./Imagebox";
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], ...this.state, ...props.state };
    }
    componentDidMount() {
        this.props.search().then((r) => {
            this.setState({ data: r });
        });
    }

    componentDidUpdate() {
        //       console.log(this.state);
    }
    render() {
        let b = [...this.state.data];
        // console.log(this.state.data);
        return (
            <Div>
                {b.map((x, i) => {
                    let {
                        snippet: { description, thumbnails, title },
                    } = x;
                    let data = { ...thumbnails.medium, title, description };
                    return <Imagebox key={i} {...data} margin={5} func={this.props.select} data={x}></Imagebox>;
                })}
            </Div>
        );
    }
}

const Div = styled.div`
    height: 100%;
    width: 100%;
    margin-top: 100px;
    padding: 5px;
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: #f7f7f7;
    background-repeat: no repeat;
    background-size: cover;
    flex-wrap: wrap;
`;

export default Main;
