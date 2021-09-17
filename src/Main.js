import { render } from "react-dom";
import Canvas from "./canvas";

const Main = () => {
  return (
    <div>
      <h1>Let's play!</h1>
      <Canvas />
    </div>
  );
};

render(<Main />, document.getElementById("root"));
