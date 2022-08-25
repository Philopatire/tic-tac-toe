import React from "react";
import "./Controlers.css";

class Controler extends React.PureComponent {
  render() {
    return (
      <button className="controler" onClick={this.props.handler}>
        {this.props.content}
      </button>
    );
  }
}

class Controlers extends React.PureComponent {
  render() {
    return (
      <div className="controlers">
        <Controler content="Reset Game" handler={this.props.handleResetGame} />
        <Controler content="Reset Score" handler={this.props.handleResetScore} />
      </div>
    );
  }
}

export default Controlers;
