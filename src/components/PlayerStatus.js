import "./PlayerStatus.css";

function PlayerStatus(props) {
  let content = props.winner ? `${props.winner} Win` : `It's ${props.current} turn `;
  return <h3 className="player-status">{content}</h3>;
}

export default PlayerStatus;
