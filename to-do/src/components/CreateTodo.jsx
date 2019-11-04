import React, { Component } from "react";
import Axios from "axios";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    };
  }

  onSubmit = e => {
    e.preventDefault();

    const TodoItem = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed
    };
    const BaseUrl =
      window.location.protocol + "//" + window.location.hostname + ":4000";

    Axios.post(BaseUrl + "/api.todoapp.in/add", TodoItem).then(res =>
      console.log(res.data)
    );

    this.setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    });
  };

  render() {
    return (
      <div className="mt-5">
        <h1>Create New Todo</h1>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="todoDesc">Description</label>
            <input
              type="text"
              className="form-control"
              id="todoDesc"
              placeholder="Enter Description"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
          </div>

          <div className="form-group">
            <label htmlFor="todoRespo">Responsible</label>
            <input
              type="text"
              className="form-control"
              id="todoRespo"
              placeholder="Responsible"
              value={this.state.todo_responsible}
              onChange={this.onChangeTodoResponsible}
            />
          </div>

          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="PriorityOptions"
                id="PriorityLow"
                value="Low"
                checked={this.state.todo_priority === "Low"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label" htmlFor="PriorityLow">
                Low
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="PriorityOptions"
                id="PriorityMedium"
                value="Medium"
                checked={this.state.todo_priority === "Medium"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label" htmlFor="PriorityMedium">
                Medium
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="PriorityOptions"
                id="PriorityHigh"
                value="High"
                checked={this.state.todo_priority === "High"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label" htmlFor="PriorityHigh">
                High
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Create Todo
          </button>
        </form>
      </div>
    );
  }

  onChangeTodoDescription = e => {
    this.setState({ todo_description: e.target.value });
  };

  onChangeTodoResponsible = e => {
    this.setState({ todo_responsible: e.target.value });
  };

  onChangeTodoPriority = e => {
    this.setState({ todo_priority: e.target.value });
  };
}
