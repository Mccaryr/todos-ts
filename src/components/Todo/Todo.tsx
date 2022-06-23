import {useState} from 'react'
import './Todo.scss'
import { TodoModel } from '../../models/TodoModel'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {AiTwotoneEdit, AiOutlineCheck} from 'react-icons/ai'

interface Props {
  index: number;
  id: number;
  todo: string;
  isCompleted: boolean;
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>
}

const Todo: React.FC<Props> = ({index, todo, isCompleted, id, todos, setTodos}) => {

  const [edit, setEdit] = useState<boolean>(false)
  const [editTodoInput, setEditTodoInput] = useState<string>(todo)

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const completeTodo = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo  )
  )
  }

  const editTodo = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => todo.id === id ? {...todo, todo: editTodoInput} : todo)
    )
    setEdit(false);
  }


  return (
    <div className='todo-container'>
      <div className='todo-number'>
        <p>{index+=1}</p>
      </div>
      <div className="todo-details">
        <form onSubmit={(e) => editTodo(e, id)}>
          {edit ? (
            <input 
              value={editTodoInput}
              onChange={(e)=> setEditTodoInput(e.target.value)}
              />
            )  :
          isCompleted ? <s>{todo}</s> : 
          <input value={todo} />
          }
        </form>
      </div>     
      <div className='crud-icons'>
        <button onClick={() => {
          if (!edit && !isCompleted) {
          setEdit(!edit)
          }
          }}>
            <AiTwotoneEdit size={28}/>
        </button>
        <button onClick={() => deleteTodo(id)}><RiDeleteBin5Line size={28}/></button>
        <button onClick={() => completeTodo(id)}><AiOutlineCheck size={28}/></button>
      </div>
      </div>
  )
}

export default Todo