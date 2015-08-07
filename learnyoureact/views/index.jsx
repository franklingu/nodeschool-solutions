
var React = require('react');

var TodoBox = React.createClass({
  render: function() {
    return (
      <div className = "todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.props.data} />
        <TodoForm />
      </div>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    var todos = this.props.data.map(function (obj) {
      return (
        <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>
      );
    });
    return (
      <div className = "todoList">
        <table style = {todoTableStyle.table}>
          <tbody>
            {todos}
          </tbody>
        </table>
      </div>
    );
  }
});

var Todo = React.createClass({
  getInitialState: function () {
    return {checked: false};
  },
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  handleChange: function () {
    this.setState({checked: !this.state.checked});
  },
  render: function() {
    return (
      <tr>
        <td style={todoTableStyle.cell}><input type="checkbox"
          checked={this.state.checked} onChange={this.handleChange} /></td>
        <td style={todoTableStyle.cell}>{this.props.title}</td>
        <td style={todoTableStyle.cell}>{this.props.children}</td>
      </tr>
    );
  }
});

var todoTableStyle = {
  cell: {
    border: "1px solid black"
  },
  table: {
    border: "2px solid black"
  }
};

var TodoForm = React.createClass({
  render: function () {
    return (
      <div className="todoForm">
        I am a TodoForm.
      </div>
    );
  }
});

module.exports = TodoBox;
