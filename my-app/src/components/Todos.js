import React from 'react';

//for each todo that we map through, what do we want to return as far as jsx? What do we want to display in the browser?
class Todos extends React.Component {
  render () {
      console.log(this.props.todos)
    return this.props.todos.map((todo) => (
        <h3>{todo.title}</h3>
    ) );
  }
}

export default Todos;
