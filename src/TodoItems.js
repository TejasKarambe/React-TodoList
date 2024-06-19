import React, { Component } from "react";
import "./index.css"; // Reusing the same CSS for consistency

class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return (
      <li key={item.key} className="todo-item">
        <input
          type="checkbox"
          className="circular-checkbox"
          checked={item.done || false}
          onChange={() => this.toggleDone(item.key)}
        />
        {item.text}
        <span className="delete-button" onClick={() => this.delete(item.key)}>
          &#x2716;
        </span>
      </li>
    );
  }

  toggleDone(key) {
    this.props.toggleDone(key);
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return <ul className="theList">{listItems}</ul>;
  }
}

export default TodoItems;
