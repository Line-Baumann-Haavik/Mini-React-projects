import styles from "./Button.module.css";

export default function Button(props) {
  function clickHandler() {
    props.submit();
  }

  function removeHandler() {
    props.remove();
  }
  if (props.check) {
    return (
      <button className={styles["button"]} onClick={clickHandler}>
        Click me!
      </button>
    );
  } else {
    return (
      <button className={styles["button"]} onClick={removeHandler}>
        Ok
      </button>
    );
  }
}
