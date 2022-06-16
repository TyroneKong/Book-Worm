import "./App.scss";
import Book from "./components/books/books";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favourites from "./Pages/Favourites";
import Header from "./components/header/header";
import Read from "./Pages/Read";
import CurrentlyReading from "./Pages/CurrentlyReading";
import Profile from "./components/profile";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./protected-route";
import AuthenticationButton from "./components/authentication-buttons";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    <div>Loading...</div>;
  }
  return (
    <div className="App">
      <Profile />
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Book} exact />
          <Route path="/home" component={Book} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/read" component={Read} />
          <Route path="/currentlyReading" component={CurrentlyReading} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
