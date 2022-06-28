import React from "react";
class ChildA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Child ElementA {this.props.username}</h2>
      </div>
    );
  }
}
export default ChildA;
