import React from "react";
import axios from "axios";

export default class Expense extends React.Component {
  state = {
    user: "",
    description: "",
    amount: ""
  };

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3000/");
    this.setState({
      user: response.data.user,
      description: response.data.description,
      amount: response.data.amount
    });
  };
  render = () => {
    return (
      <div>
        <span>{this.state.user}</span>
      </div>
    );
  };
}
