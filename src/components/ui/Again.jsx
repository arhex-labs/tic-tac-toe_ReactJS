import css from "./Again.module.css";

export default function Again(props) {
  return (
    <div className={css.Again}>
      <h2 style={{ textAlign: "center" }}>{props.winner}</h2>
      <button onClick={props.onClick}>Start Game</button>
    </div>
  );
}
