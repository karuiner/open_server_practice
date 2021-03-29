import styled from "styled-components";
import Imagebox from "./Imagebox";

function Sub(props) {
    let {
        snippet: { description, thumbnails, title },
    } = props.target;
    let { width } = thumbnails.medium;
    let target = { ...thumbnails.medium, title, description };
    let url2 = `https://www.youtube.com/embed/${props.target.id.videoId}`;
    console.log(width);
    return (
        <Div>
            <Mainvideo>
                <Imagebox {...target} url={url2} isFull={true} isAvi={true} margin={0} />
            </Mainvideo>
            <Videolist width={width}>
                {props.data.reduce((acc, x, i) => {
                    let {
                        snippet: { description, thumbnails, title },
                    } = x;
                    let sdata = { ...thumbnails.medium, title, description };
                    if (props.target.id.videoId !== x.id.videoId) {
                        acc.push(<Imagebox key={i} {...sdata} data={x} func={props.select}></Imagebox>);
                    }
                    return acc;
                }, [])}
            </Videolist>
        </Div>
    );
}

const Div = styled.div`
    height: 100%;
    width: 100%;
    margin-top: 100px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    background-color: #f7f7f7;
    background-repeat: no repeat;
    background-size: cover;
`;
const Mainvideo = styled.div`
    flex: 1 0 0;
    width: 100%;
    border: solid 2px red;
`;

const Videolist = styled.div`
    flex: 1 0 1;
    height: 100%;
    margin-right: 10px;
    ${(props) => `width:${props.width}px;`}
    border:solid 2px blue;
`;

export default Sub;
