import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: ""
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //   Submitting the form
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          class="input-text"
          type="text"
          placeholder="Add Todo.."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" className="input-submit" />
      </form>
    );
  }
}

export default InputTodo;
