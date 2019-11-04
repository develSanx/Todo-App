import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditiTodo";
import CreateTodo from "./components/CreateTodo";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />

        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
