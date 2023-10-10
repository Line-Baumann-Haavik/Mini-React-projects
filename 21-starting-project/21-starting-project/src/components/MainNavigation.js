import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="/products">Products page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
