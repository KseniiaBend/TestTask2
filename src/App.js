import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import FormContainer from "./containers/FormContainer";
import ListsContainer from "./containers/ListsContainer";
import Navigationbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/form" />
          </Route>
          <Route path="/form" component={FormContainer} />
          <Route path="/lists" component={ListsContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
