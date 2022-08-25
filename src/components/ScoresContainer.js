import React from "react";
import "./ScoresContainer.css";

class PlayerScore extends React.PureComponent {
  render() {
    return (
      <h3 className="player-score">
        {this.props.name}: {this.props.score}
      </h3>
    );
  }
}

class NameField extends React.PureComponent {
  render() {
    return (
      <input
        className="name-field"
        defaultValue={this.props.defaultValue}
        type="text"
        placeholder="Enter Name..."
        onChange={(e) => this.props.changeHandler(e.target.value)}
      />
    );
  }
}

class Score extends React.PureComponent {
  render() {
    return (
      <div className="score">
        <PlayerScore name={this.props.name} score={this.props.score} />
        <NameField defaultValue={this.props.name} changeHandler={this.props.changeHandler} />
      </div>
    );
  }
}

class ScoresContainer extends React.PureComponent {
  render() {
    return (
      <div className="scores-container">
        <Score
          name={this.props.p1Name}
          score={this.props.p1Score}
          changeHandler={this.props.handleP1Change}
        />
        <Score
          name={this.props.p2Name}
          score={this.props.p2Score}
          changeHandler={this.props.handleP2Change}
        />
      </div>
    );
  }
}

export default ScoresContainer;
