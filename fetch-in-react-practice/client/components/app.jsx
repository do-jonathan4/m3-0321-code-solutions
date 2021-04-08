import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => this.setState({
        todos: data
      }));
  }

  addTodo(newTodo) {
    const cloneState = [...this.state.todos];

    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(data => {
        cloneState.push(data);
        this.setState({
          todos: cloneState
        });
      });
  }

  toggleCompleted(todoId) {
    const cloneState = [...this.state.todos];
    const todoIndex = cloneState.findIndex(x => x.todoId === todoId);
    const todo = cloneState[todoIndex];
    todo.isCompleted = !todo.isCompleted;

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    })
      .then(res => res.json())
      .then(data => {
        cloneState[todoIndex] = data;
        this.setState({
          todos: cloneState
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
