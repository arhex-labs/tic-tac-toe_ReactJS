import css from "./Board.module.css";

export default function Board(props) {
  return <div className={css.Board}>{props.children}</div>;
}
