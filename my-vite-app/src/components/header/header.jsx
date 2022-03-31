import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav__links-container">
            <ul className="nav__links">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/favourites">Favourites</Link>
              </li>
              <li>
                <Link to="/currentlyReading">Reading now</Link>
              </li>
              <li>
                <Link to="/read">Finished Reading</Link>
              </li>
              <li>
                <Link to="/bookstore">BookStore</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
