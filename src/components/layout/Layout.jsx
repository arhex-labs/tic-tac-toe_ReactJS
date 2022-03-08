import css from "./Layout.module.css";

export default function Layout(props) {
  return <div className={css.Layout}>{props.children}</div>;
}
