import React from "react";
import "./Board.css";

class BoardSquare extends React.PureComponent {
  render() {
    return (
      <div
        className="board-square"
        onClick={() => (this.props.content ? null : this.props.onClick(this.props.index))}
      >
        {this.props.content}
      </div>
    );
  }
}

class Board extends React.PureComponent {
  render() {
    return (
      <div className="board">
        {this.props.board.map((square, i) => (
          <BoardSquare content={square} key={i} index={i} onClick={this.props.handle} />
        ))}
      </div>
    );
  }
}

export default Board;
