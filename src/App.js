import React, { Component } from "react";

import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    items: [{ id: 1, title: "wake up " }, { id: 2, title: "go home" }],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {};
  handleSubmit = e => {};
  clearList = e => {};
  handleEdit = id => {};
  handleDelete = id => {};

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoList
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.handleSubmit}
            />
            <TodoInput
              items={this.state.items}
              clearList={this.clearList}
              handleChange={this.handleChange}
              handleEdit={this.handleEdit }
            />
          </div>
        </div>
      </div>
    );
  }
}
