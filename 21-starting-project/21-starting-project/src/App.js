import {RouterProvider, createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

const router = createBrowserRouter([
  {path: "/", element: <HomePage /> },
  {path: "/products", element: <ProductsPage />}
]);


export default function App() {
  return <RouterProvider router={router} />;
}

