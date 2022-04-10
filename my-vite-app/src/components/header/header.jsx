import "./header.scss";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { React, useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  const [numOfFav, setNumOfFav] = useState([]);
  const [numOfReadNow, setNumOfReadNow] = useState([]);
  const [numOfRead, setNumOfRead] = useState([]);

  return (
    isAuthenticated && (
      <>
        <header className="header">
          <nav className="nav">
            <div className="nav__links-container">
              <ul className="nav__links">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/favourites">Favourites {numOfFav}</Link>
                </li>
                <li>
                  <Link to="/currentlyReading">Reading now {numOfReadNow}</Link>
                </li>
                <li>
                  <Link to="/read">Books I have read {numOfRead}</Link>
                </li>
                <li>
                  <Link to="/bookstore">Book Store</Link>
                </li>
                <li>
                  <Link to="/bookchat">Book Chat</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </>
    )
  );
};
export default Header;
