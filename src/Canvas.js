import { Component } from "react";
import { render } from "react-dom";
import Box from "./Box";

class Canvas extends Component {
  constructor() {
    super();
    this.state = {
      boxes: [
        { id: 1, name: "1", position:[1,1] },
        { id: 2, name: "2", position:[1,2] },
        { id: 3, name: "3", position:[1,3] },
        { id: 4, name: "4", position:[2,1] },
        { id: 5, name: "5", position:[2,2] },
        { id: 6, name: "6", position:[2,3] },
        { id: 7, name: "7", position:[3,1] },
        { id: 8, name: "8", position:[3,2] },
      ],
    };
  }

  render() {
    return (
      <div className="canvas-board">
        {this.state.boxes.map((box) => {
          return <Box key={box.id} name={box.name}></Box>;
        })}
      </div>
    );
  }
}

export default Canvas;
