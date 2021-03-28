import { Component } from "react";
import styled from "styled-components";

class Inputbox extends Component {
    render() {
        return (
            <Sinputbox>
                <Search></Search>
            </Sinputbox>
        );
    }
}

const Sinputbox = styled.div`
    flex: auto;
    width: 100%;
    min-height: 100px;
    border: solid apx red;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: white;
`;

function Search() {
    return (
        <>
            <Input placeholder="검색어를 입력해 주세요"></Input>
            <Button>검색</Button>
        </>
    );
}

const Input = styled.input`
    min-height: 30px;
    width: 30%;
    min-width: 200px;
    font-size: 20px;
    border: solid 1px black;
`;

const Button = styled.button`
    min-height: 30px;
    min-width: 50px;
    border: solid 1px black;
    font-weight: 500;
    :hover {
        color: yellowgreen;
    }
    :active {
        background-color: darkgreen;
        color: white;
    }
`;

export default Inputbox;
