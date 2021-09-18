import { Component } from "react";
import Box from "./Box";

class Canvas extends Component {
  constructor() {
    super();
    this.state = {
      boxes: [
        { id: 1, name: "4", position: [1, 1] },
        { id: 2, name: "8", position: [1, 2] },
        { id: 3, name: "6", position: [1, 3] },
        { id: 4, name: "1", position: [2, 1] },
        { id: 5, name: "3", position: [2, 2] },
        { id: 6, name: "5", position: [2, 3] },
        { id: 7, name: "7", position: [3, 1] },
        { id: 8, name: "2", position: [3, 2] },
        { id: 9, name: "", position: [3, 2] },
      ],
    };
  }

  render() {
    return (
      <div className="content">
        <div className="canvas-board">
          <h1>Let's play!</h1>
          {this.state.boxes.map((box) => {
            return (
              <Box
                key={box.id}
                name={box.name}
                correctPosition={box.id == box.name}
              ></Box>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Canvas;
