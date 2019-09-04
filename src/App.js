import React from "react";
import NewExpense from "./NewExpense";
import Expense from "./Expense";

class App extends React.Component {
  render = () => {
    return (
      <div>
        {/* <NewExpense />; */}
        <Expense />
      </div>
    );
  };
}

export default App;
