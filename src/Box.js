import { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.correctPosition = this.props.correctPosition;
    // this.onClick = this.onClick.Bind(this);
  }

  onClick() {
    this.props.onClick(this.props);
  }

  render() {
    return <button className="box-number" style={{visibility: this.props.name !== "" ? "visible" : "hidden"}}> {this.props.name}</button>;
  }
}

export default Box;
