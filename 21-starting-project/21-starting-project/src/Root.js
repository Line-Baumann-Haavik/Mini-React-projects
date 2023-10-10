import { Outlet } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import styles from "./Root.module.css";

export default function Root() {
  return (
    <>
      <MainNavigation />
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
}
