import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Todo = props => (
  <tr>
    <th scope="row">{props.id}</th>
    <td className={props.item.todo_completed ? "complete" : ""}>
      {props.item.todo_description}
    </td>
    <td className={props.item.todo_completed ? "complete" : ""}>
      {props.item.todo_responsible}
    </td>
    <td className={props.item.todo_completed ? "complete" : ""}>
      {props.item.todo_priority}
    </td>
    <td>
      <Link to={"/edit/" + props.item._id}>Edit</Link>
    </td>
  </tr>
);

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = { todoList: [] };
  }

  componentDidMount() {
    const BaseUrl =
      window.location.protocol + "//" + window.location.hostname + ":4000";

    Axios.get(BaseUrl + "/api.todoapp.in/")
      .then(res => {
        this.setState({ todoList: res.data });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate() {
    const BaseUrl =
      window.location.protocol + "//" + window.location.hostname + ":4000";

    Axios.get(BaseUrl + "/api.todoapp.in/")
      .then(res => {
        this.setState({ todoList: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Responsible</th>
              <th scope="col">Priority</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }

  todoList() {
    return this.state.todoList.map((todoItem, index) => {
      return <Todo item={todoItem} key={index} id={index} />;
    });
  }
}
