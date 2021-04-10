import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Background>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
        </Switch>
      </Background>
    </Router>
  );
}

const Background = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  background: linear-gradient(45deg, rgb(84, 255, 135), rgb(69, 214, 250));
  z-index=-1;
`;

export default App;
