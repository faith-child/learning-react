import React from 'react';
import './App.css';
import TodoItem from './TodoItem';
import TodoData from "./TodoData";

class App extends React.Component{
  constructor(){
    super()
    this.state={
      todo:TodoData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id){
    this.setState(prevState => {
      const updatedTodo = prevState.todo.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo
    })
      return {
          todos: updatedTodo
      }
    })
  }
  render(){
    const todoItems= this.state.todo.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
    return (
      <div className="todo-list">
          {todoItems}
      </div>
    );
  }
}
  

export default App;
