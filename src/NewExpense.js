import React from "react";
import axios from "axios";

export default class NewExpense extends React.Component {
  state = {
    username: "",
    description: "",
    amount: ""
  };

  render = () => {
    return (
      <div className="mainContainer">
        <div className="newExpenseInput">
          <h1 className="expenseTitle">New expense</h1>
          <form
            onSubmit={async event => {
              event.preventDefault();
              try {
                const response = await axios.post(
                  "https://expense-report-back-end.herokuapp.com/",
                  {
                    user: this.state.username,
                    description: this.state.description,
                    amount: this.state.amount
                  }
                );
              } catch (e) {
                console.log(e.message);
              }
            }}
          >
            {/* <input placeholder="New User"></input> */}
            <br />
            <input
              value={this.state.username}
              placeholder="Username"
              type="text"
              required
              onChange={event => {
                this.setState({ username: event.target.value });
              }}
            ></input>
            <br />
            <input
              value={this.state.description}
              placeholder="Description"
              type="text"
              required
              onChange={event => {
                this.setState({ description: event.target.value });
              }}
            ></input>
            <br />
            <input
              value={this.state.amount}
              placeholder="Amount"
              onChange={event => {
                this.setState({ amount: event.target.value });
              }}
            ></input>
            <br />
            <button className="buttonAddExpense" type="submit">
              ADD EXPENSE
            </button>
          </form>
        </div>
      </div>
    );
  };
}
