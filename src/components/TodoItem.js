import React from "react";

class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#d35e0f",
      opacity: 0.4,
      textDecoration: "line-through"
    };
    const { completed, id, title } = this.props.todo;
    return (
      <React.Fragment>
        <li className="todo-item">
          <input
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </li>
      </React.Fragment>
    );
  }
}

export default TodoItem;
