import styles from "./Header.module.css";

import mealsImage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClicks={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="buffet table" />
      </div>
    </>
  );
}
