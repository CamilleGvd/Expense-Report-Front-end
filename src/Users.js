import React from "react";

export default class Users extends React.Component {
  render = () => {
    const userArray = [];
    const amountPerUSer = [];
    const total = 0;
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
              this.props.expenses.map((element, index) => {
                if (userArray.indexOf(element.user) === -1) {
                  userArray.push(element.user);
                }
                console.log(userArray);
              })}
          </div>
          <div className="userList">{userArray.join(`\n`)}</div>
        </div>
      </div>
    );
  };
}
