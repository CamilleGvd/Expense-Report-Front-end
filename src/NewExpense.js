import React from "react";
import axios from "axios";
import Expense from "./Expense";
import Users from "./Users";

export default class NewExpense extends React.Component {
  state = {
    username: "",
    description: "",
    amount: "",
    expenses: [],
    newExpenses: "newExpenses"
  };
  "";

  getExpense = async () => {
    const response = await axios.get(
      "https://expense-report-back-end.herokuapp.com"
    );
    this.setState({
      expenses: response.data
    });
  };

  componentDidMount = () => {
    this.getExpense();
  };

  render = () => {
    return (
      <div>
        <div className="mainContainer">
          <Users expenses={this.state.expenses} />
          <Expense expenses={this.state.expenses} />
          <div className="newExpenseInput">
            <h1 className="expenseTitle">New expense</h1>
            <form
              onSubmit={async event => {
                event.preventDefault();
                try {
                  const response = await axios.post(
                    "https://expense-report-back-end.herokuapp.com",
                    {
                      user: this.state.username,
                      description: this.state.description,
                      amount: this.state.amount
                    }
                  );
                } catch (e) {
                  console.log(e.message);
                }
                const changedExpenses = [...this.state.expenses];
                changedExpenses.push({
                  user: this.state.username,
                  description: this.state.description,
                  amount: this.state.amount
                });
                this.setState({
                  expenses: changedExpenses,
                  username: "",
                  description: "",
                  amount: ""
                });
              }}
            >
              <br />
              <input
                value={this.state.username}
                placeholder="Username"
                type="text"
                maxLength={15}
                required
                onChange={event => {
                  this.setState({
                    username: event.target.value
                  });
                }}
              ></input>
              <br />
              <input
                value={this.state.description}
                placeholder="Description"
                type="text"
                maxLength={25}
                required
                onChange={event => {
                  this.setState({
                    description: event.target.value
                  });
                }}
              ></input>
              <br />
              <input
                value={this.state.amount}
                placeholder="Amount"
                type="number"
                pattern="[0-9]*"
                min="0"
                step="0.1"
                onChange={event => {
                  this.setState({
                    amount: event.target.value
                  });
                }}
              ></input>
              <br />
              <div className="button">
                <button className="buttonAddExpense" type="submit">
                  ADD EXPENSE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
}
