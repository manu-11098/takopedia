import "./App.css";
import { Routes, Route, Link, NavLink, useParams, Outlet } from "react-router-dom";

const tacos = [
  { id: 1, name: "Pastor", flavour: "Salty" },
  { id: 2, name: "Carnita", flavour: "Sour" },
  { id: 3, name: "Cochinita", flavour: "Spicy" },
  { id: 4, name: "Chili 🌶🌶🌶", flavour: "Super spicy" },
];

const Home = () => (
  <div>
    <h1> Home </h1>
    <p>Simple TaKo's Wiki to test React Router 6</p>
  </div>
);

const SearchPage = () => {
  return (
    <div>
      <h1>Search Page</h1>
      <ul>
        {tacos.map((taco) => (
          <li key={taco.id}>
            - <Link to={`/tacos/${taco.id}`}>{taco.name}</Link> -
          </li>
        ))}
      </ul>
    </div>
  );
};

const Tacos = () => {
  const { id } = useParams();
  const result = tacos.find((taco) => taco.id === parseInt(id));

  return (
    <div>
      <h1>🌮 Tacos 🌮 </h1>
      <h2>{result.name}</h2>

      <Link to="details">See details</Link>
      <Outlet />
    </div>
  );
};

const TacoDetails = () => {
  const { id } = useParams();
  const result = tacos.find((taco) => taco.id === parseInt(id));

  return (
    <div>
      <h1>Details📓 </h1>
      <h3>Flavour: {result.flavour}</h3>
    </div>
  );
};

const isActive = ({ isActive }) => (isActive ? "is-active" : undefined);

function App() {
  return (
    <div className="App">
      <header>
        <h1>TaKoPedia 🌮</h1>
        <nav>
          <ul>
            <li>
              <NavLink className={isActive} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={isActive} to="search-page">
                Search Page
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-page" element={<SearchPage />} />
          <Route path="/tacos/:id" element={<Tacos />}>
            <Route path="details" element={<TacoDetails />}></Route>
          </Route>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
