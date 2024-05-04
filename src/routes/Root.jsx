import { Outlet, useLocation } from "react-router-dom";
import Home from "./Home";

const Root = () => {
  let location = useLocation();

  return (
    <div>
      Hello world
      <a href='posts'>Posts</a>
      {location.pathname === "/" && <Home />}
      <Outlet />
    </div>
  )
}

export default Root