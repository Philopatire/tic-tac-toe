import React from "react";
import "./AppTitle.css";

class AppTitle extends React.PureComponent {
  render() {
    return <h1 className="app-title">{this.props.content}</h1>;
  }
}

export default AppTitle;
