import React from "react";

let array = [];

export default class Users extends React.Component {
  renderTotalPerUser = userID => {
    let total = 0;
    this.props.expenses.forEach(expense => {
      if (expense.user === userID) {
        total = total + expense.amount;
      }
    });
    array.push(total);
  };

  render = () => {
    let arrayUsername = [];
    let arrayTotalPerUser = [];
    return (
      <div className="usersContainer">
        <h1 className="usersTitle">Users</h1>
        <div className="usersArray">
          <div className="navUsers">
            <span className="user">User</span>
            <span className="expenses">Expenses</span>
          </div>
          <div className="usersList">
            {this.props.expenses &&
              this.props.expenses.map(element => {
                if (array.indexOf(element.user) === -1) {
                  array.push(element.user);
                  this.renderTotalPerUser(element.user);
                }
              })}
            {array.map(i => {
              if (i % 2 === 0) {
                arrayTotalPerUser.push(i + "    €");
              } else {
                arrayUsername.push(i);
              }
            })}
            <div
              className="userList"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div
                style={{
                  width: "40px",
                  lineHeight: "43px"
                }}
              >
                {arrayUsername.join("\n")}
              </div>
              <div
                style={{
                  width: "60px",
                  fontFamily: "Lato",
                  fontSize: "15px",
                  fontWeight: "700",
                  lineHeight: "43px",
                  letterSpacing: "2px",
                  marginLeft: "300px"
                }}
              >
                {arrayTotalPerUser.join("\n")}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
