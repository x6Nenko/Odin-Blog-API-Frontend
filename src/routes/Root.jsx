import { Outlet, useLocation } from "react-router-dom";
import Home from "./Home";
import Navigation from "../components/Navigation";

const Root = () => {
  let location = useLocation();

  return (
    <div className="main-wrapper">
      <Navigation />
      {location.pathname === "/" && <Home />}
      <Outlet />
    </div>
  )
}

export default Root