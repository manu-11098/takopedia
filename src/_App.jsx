import "./App.css";
import { useRoutes, Link } from "react-router-dom";

/**
 * Another way of using routes
 */

const Routes = [
  {
    path: "/",
    element: (
      <div>
        <h1>Home</h1>
        <Link to="/about"> About </Link>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <h1>About</h1>
        <Link to="/"> Home </Link>
      </div>
    ),
  },
];

export default function App() {
  return (
    <main>
      <header>
        <h1>TaKoPedia</h1>
      </header>
      {useRoutes(Routes)}
    </main>
  );
}
