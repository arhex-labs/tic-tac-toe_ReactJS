import css from "./Overlay.module.css";

export default function Overlay(props) {
  return <div className={css.Overlay}>{props.children}</div>;
}
