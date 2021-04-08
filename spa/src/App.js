// import logo from './logo.svg';
// import './App.css';

import { Component } from "react";
import styled from "styled-components";
import Cwindow from "./components/commendbox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      scale: 0.4,
      ra: "",
      dec: "",
      pra: "",
      pdec: "",
      cscale: false,
    };
  }
  // componentDidMount() {
  //   this.get();
  // }
  componentDidUpdate() {
    if (this.state.cscale) {
      this.get();
      this.setState({ cscale: false });
    }
  }
  getScale = (type) => {
    let n = this.state.scale;
    if (type === "+" && n < 20) n += n <= 0.9 ? 0.1 : 1;
    if (type === "-" && n >= 0.1) n -= n <= 1 ? 0.1 : 1;

    this.setState({ scale: n, cscale: true });
  };
  getcoor = (type, e) => {
    let p = {};
    p[type] = isNaN(e.target.value) ? "" : e.target.value;
    this.setState({ ...p });
  };
  seturl = (
    ra = 0,
    dec = 0,
    scale = 0.4,
    opt = "",
    height = window.innerHeight,
    width = window.innerWidth
  ) => {
    let a = "http://skyserver.sdss.org/dr12/SkyserverWS/ImgCutout/getjpeg",
      b = `?ra=${ra}&dec=${dec}&scale=${scale}&height=${height}&width=${width}&opt=${opt}`;
    return a + b;
  };

  get = () => {
    let { ra, dec, scale, pra, pdec } = this.state;
    if (ra === "") ra = pra;
    if (dec === "") dec = pdec;
    // let url = `http://skyserver.sdss.org/dr12/SkyserverWS/ImgCutout/getjpeg?ra=184.9511&dec=-0.8754&scale=1&height=${height}&width=${width}&opt=`;
    let url = this.seturl(ra, dec, scale);

    return fetch(url)
      .then((d) => d.blob())
      .then((d) => URL.createObjectURL(d))
      .then((d) => {
        this.setState({ image: d, ra: "", dec: "", pra: ra, pdec: dec });
      });
  };

  render() {
    return (
      <Body>
        <Cwindow
          getScale={this.getScale}
          getcoor={this.getcoor}
          get={this.get}
          state={this.state}
        ></Cwindow>
        {this.state.image ? (
          <Image src={this.state.image} alt={"test"}></Image>
        ) : null}
      </Body>
    );
  }
}
const Body = styled.div`
  & * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
  }
  height: 100vh;
  width: 100vw;
`;

const Image = styled.img`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 0;
`;

export default App;
