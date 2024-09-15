import logo from "./logo.svg";
import "./App.css";
import { useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import AppRouter from "./AppRouter";

function App() {
  const location = useLocation
  const nonNavbarRoutes = ["/login", "/signup"]
  return (
    <>
      {!nonNavbarRoutes.includes(location.pathname) && <Navbar />}
      <AppRouter/>
    </>
  );
}

export default App;
