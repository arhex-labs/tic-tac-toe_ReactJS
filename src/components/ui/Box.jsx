import css from "./Box.module.css";

export default function Box(props) {
  return (
    <button id={props.id} onClick={props.onClick} className={css.Box}>
      {props.value}
    </button>
  );
}
