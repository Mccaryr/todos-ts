import './App.scss';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import HeaderImage from './assets/edited-header-image.png'
import {TodoModel} from './models/TodoModel'

const App: React.FC = () => {
  
  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useState<Array<TodoModel>>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if(input) {
      setTodos([...todos, {id: Date.now(), todo: input, isCompleted: false}])
      setInput('');
    }
  }



  return (
    <div className="App">
      <div className='header-container'>
          <h1>
            Crikey Todos!
          </h1>
          <img src={HeaderImage} alt="Steve Irwin"/>
      </div>
      <div>
        <TodoForm input={input} setInput={setInput} addTodo={addTodo}/>
      </div>
      <div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
