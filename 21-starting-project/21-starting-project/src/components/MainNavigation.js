import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              className={({isActive}) => {
                return isActive ? styles.active : undefined;
              }}
              end
            >
              Home page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({isActive}) => {
                return isActive ? styles.active : undefined;
              }}
            >
              Products page
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
