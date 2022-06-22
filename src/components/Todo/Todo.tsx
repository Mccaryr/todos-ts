import React from 'react'
import './Todo.scss'
import { TodoModel } from '../../models/TodoModel'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {AiTwotoneEdit, AiOutlineCheck} from 'react-icons/ai'

interface Props {
  index: number;
  id: number;
  todo: string;
  isCompleted?: boolean;
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>
}

const Todo: React.FC<Props> = ({index, todo, isCompleted, id, todos, setTodos}) => {

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const completeTodo = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo  )
  )
  }


  return (
    <div className='todo-container'>
      <div className='todo-number'>
        <p>{index+=1}</p>
      </div>
      <div className="todo-details">
        <form>
          {isCompleted ? <s>{todo}</s> : 
          <input value={todo} />}
          
        </form>
      </div>     
      <div className='crud-icons'>
        <button><AiTwotoneEdit size={28}/></button>
        <button onClick={() => deleteTodo(id)}><RiDeleteBin5Line size={28}/></button>
        <button onClick={() => completeTodo(id)}><AiOutlineCheck size={28}/></button>
      </div>
      </div>
  )
}

export default Todo