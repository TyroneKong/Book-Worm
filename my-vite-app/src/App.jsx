import "./App.scss";
import Book from "./components/books/books";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favourites from "./Pages/Favourites";
import Header from "./components/header/header";
import Read from "./Pages/Read";
import CurrentlyReading from "./Pages/CurrentlyReading";
import MapContainer from "./Pages/Map";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Book} exact />
          <Route path="/home" component={Book} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/read" component={Read} />
          <Route path="/currentlyReading" component={CurrentlyReading} />
          <Route path="/bookstore" component={MapContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
