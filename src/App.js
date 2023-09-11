import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { CartInfo } from "./components/cart";
import { Home } from "./components/home";
import { Checkout } from "./components/checkout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Cart",
      element: <CartInfo />,
    },
    {
      path: "/Checkout",
      element: <Checkout />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
