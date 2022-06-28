import React from "react";
import ChildA from "./ChildA";
class ParentA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  handleInput = (e) => {
    this.setState({
      username: e.target.value
    });
  };
  render() {
    return (
      <div>
        <h2>Parent ElementA</h2>
        <label>Parent A</label>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleInput}
        />
        <ChildA username={this.state.username} />
      </div>
    );
  }
}
export default ParentA;
