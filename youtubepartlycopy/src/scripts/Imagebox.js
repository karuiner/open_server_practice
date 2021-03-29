import styled from "styled-components";

const Edge = styled.div`
    display: flex;
    display: inline-block;
    border: solid 2px black;
    :hover {
        border: solid 2px red;
    }
    flex-direction: column;
    ${(props) => {
        if (props.isFull) {
            return `
            width: ${100}%;           
            height: ${100}%;
            margin: ${props.margin}px;
        `;
        } else {
            return `
            width: ${props.width}px;
            height: ${props.height + 50}px;
            margin: ${props.margin}px;
        `;
        }
    }}
`;
const Img = styled.img`
    display: flex;
    width: 100%;
`;

const Iframe = styled.iframe`
    display: flex;
    width: 100%;
    height: 80%;
`;

const ImageTitle = styled.div`
    flex: 2 0 1;
    font-size: 20px;
    font-weight: 600;
    width: 100%;
    height: 28px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
const ImageDesc = styled.div`
    flex: 1 0 1;
    font-size: 10px;
    width: 100%;
    height: 13px;
    overflow: hidden;
    margin-bottom: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
const ImageInfo = styled.div`
    flex: 2 0 1;
    display: flex;
    width: 100%;
    flex-direction: column;
`;

function Imagebox({ title, url, height, width, description, func, data, margin, isFull, isAvi }) {
    return (
        <Edge height={height} width={width} margin={margin} isFull={isFull} onClick={() => (func ? func(data) : null)}>
            {isAvi ? <Iframe src={url} title={title} /> : <Img src={url} alt={"test"} />}
            <ImageInfo>
                <ImageTitle>{title}</ImageTitle>
                <ImageDesc>{description}</ImageDesc>
            </ImageInfo>
        </Edge>
    );
}

export default Imagebox;
