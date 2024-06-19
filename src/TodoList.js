import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./index.css"; // Importing the CSS file

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
        done: false,
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this._inputElement.value = "";
    }
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
    });
  }

  toggleDone(key) {
    var updatedItems = this.state.items.map((item) => {
      if (item.key === key) {
        item.done = !item.done;
      }
      return item;
    });

    this.setState({
      items: updatedItems,
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <h2>My To-Do List</h2>
          <form onSubmit={this.addItem}>
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder="Enter task"
              className="task-input"
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
        <TodoItems
          entries={this.state.items}
          delete={this.deleteItem}
          toggleDone={this.toggleDone}
        />
      </div>
    );
  }
}

export default TodoList;
