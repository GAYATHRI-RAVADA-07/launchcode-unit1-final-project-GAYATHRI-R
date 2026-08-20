import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        CourtConnect
      </Link>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/matches">Matches</Link>
        <Link to="/courts">Courts</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
