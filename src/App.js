import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewExpense from "./NewExpense";

class App extends React.Component {
  render = () => {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={NewExpense} />
        </div>
      </Router>
    );
  };
}

export default App;
