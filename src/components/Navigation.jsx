import { NavLink, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Navigation = () => {
  const navigate = useNavigate();
  const isLogged = useContext(AuthContext);

  function handleLogout() {
    localStorage.removeItem("token");
    isLogged.updateIsLogged();
    return navigate("/login");
  }

  return (
    <header>
      <Link to="/"><h1>Blog API</h1></Link>
      <nav>
        <NavLink
          to="/posts"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          All posts
        </NavLink>

        
        <div className="sign-links">
          {/* isLogged is an object */}
          {isLogged.isLogged === true ? 
            <NavLink
              onClick={handleLogout}
              to="#"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Logout
            </NavLink>
            :
              <>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Sign-in
              </NavLink>

              <NavLink
                to="/registration"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Sign-up
              </NavLink>
              </>
          }
          
        </div>
      </nav>
    </header>
  )
}

export default Navigation