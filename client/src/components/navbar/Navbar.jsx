import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {

  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo" style={{ color: "white", textDecoration:"none"}}> Sidahmedbooking</span>
        </Link>
        {user ? user.username : (<div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>)}
      </div>
    </div>
  )
}

export default Navbar