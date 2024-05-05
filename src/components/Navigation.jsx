import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
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
        </div>
      </nav>
    </header>
  )
}

export default Navigation