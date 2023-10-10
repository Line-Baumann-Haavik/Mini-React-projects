import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    function NavigationTest(){
        navigate("/products");
    }
  return (
    <>
      <h1>Home Page!</h1>
      <p>Link to <Link to="/products">products page</Link>.</p>
      <p><button onClick={NavigationTest}>Navigate</button></p>
    </>
  );
}
