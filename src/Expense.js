import React from "react";

export default class Expense extends React.Component {
  render = () => {
    const total = [];
    return (
      <div className="expensesContainer">
        <h1>Expenses</h1>
        <div className="expensesArray">
          <div className="navExpenses">
            <span className="user">User</span>
            <span className="description">Description</span>
            <span className="amount">Amount</span>
          </div>
          <ul className="listExpenses">
            {this.props.expenses &&
              this.props.expenses.map((item, index) => {
                console.log(total);
                return (
                  <div key={item._id}>
                    <div className="userList">
                      <li>{item.user}</li>
                    </div>

                    <div className="descriptionList">
                      <li>{item.description}</li>
                    </div>

                    <div className="amountList">
                      <div>
                        <li className="amountItem">
                          <span>{item.amount}</span>
                        </li>
                      </div>
                      <div>
                        <span className="amountEuro">€</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            <div className="totalExpenses">
              <div className="totalContainer">
                <span className="total">TOTAL : </span>
              </div>
              <div className="reduce">
                {this.props.expenses.map((element, index) => {
                  total.push(element.amount);
                  const res = total.reduce((total, currentValue) => {
                    return total + currentValue;
                  });
                  if (this.props.expenses.length === index + 1) {
                    return res;
                  }
                })}
              </div>
              <span>€</span>
            </div>
          </ul>
        </div>
      </div>
    );
  };
}
