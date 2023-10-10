import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>Home Page!</h1>
      <p>Link to <Link to="/products">products page</Link>.</p>
    </>
  );
}
