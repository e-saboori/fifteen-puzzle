import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Canvas from "./canvas";
import Information from "./Information";
import logo from "../assets/petit-casper.png";
import { StrictMode } from "react";

const Main = () => {
  return (
    <div>
      <Router>
        <header className="top-banner" role="banner">
          <Link to="/" className="toolbar">
            <img width="60" alt="Logo" src={logo} />
            <span>Welcome</span>
          </Link>

          <Link to="/information" className="toolbar">
            <span>Informatin</span>
          </Link>

          <Link to="/game" className="toolbar">
            <span>Game</span>
          </Link>
        </header>
        <Switch>
          <Route exact path="/">
            <div className="content">
              <h1>Hello There! Welcome :)</h1>
            </div>
          </Route>
          <Route path="/information">
            <Information />
          </Route>
          <Route path="/game/">
            <Canvas />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

render(
  <StrictMode>
    <Main />{" "}
  </StrictMode>,
  document.getElementById("root")
);
