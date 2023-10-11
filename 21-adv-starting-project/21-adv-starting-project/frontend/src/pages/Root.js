import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import "../index.css";

export default function Root() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>   
    </>
  );
}
