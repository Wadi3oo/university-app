import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#A" className="active">GLSI A</a></li>
        <li><a href="#B">GLSI B</a></li>
        <li><a href="#C">GLSI C</a></li>
        <li><a href="#D">GLSI D</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;