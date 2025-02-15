import React, { Component } from "react";

class ClassDisplay extends Component {
  componentDidMount() {
    console.log("Se montó al DOM");
  }

  componentWillUnmount() {
    console.log("Display se desmontará del DOM");
  }
  render() {
    return (
      <div style={{ backgroundColor: "goldenrod" }}>
        <h3>Class Display</h3>
      </div>
    );
  }
}

export default ClassDisplay;
