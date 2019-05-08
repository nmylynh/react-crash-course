import React from 'react';
import './App.css';
import Todos from './components/Todos';
class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Study',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with husbando Viktor',
        completed: false
      },
      {
        id: 3,
        title: 'Work out for snatched body',
        completed: false
      }
    ]
  }

  render () {
    console.log(this.state.todos);

    return (
    <div className="App">
     <Todos todos={this.state.todos} />
    </div>
   );
  }
}

export default App;
