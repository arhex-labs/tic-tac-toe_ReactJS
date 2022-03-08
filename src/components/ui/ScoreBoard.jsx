import css from "./ScoreBoard.module.css";

export default function ScoreBoard(props) {
  return <div className={css.ScoreBoard}>{props.children}</div>;
}
