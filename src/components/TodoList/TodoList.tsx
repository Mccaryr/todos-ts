import React from 'react'
import Todo from '../Todo/Todo'
import {TodoModel} from '../../models/TodoModel'
import './TodoList.scss'

interface Props {
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todo-list-container'>
      {todos?.map((todo, index) => (

        <Todo
        key={todo.id}
        id={todo.id}
        index={index}
        todo={todo.todo}
        isCompleted={todo.isCompleted}
        todos={todos}
        setTodos={setTodos} />
      ))}
    </div>
  )
}

export default TodoList