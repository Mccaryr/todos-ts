import React from 'react'
import './TodoForm.scss'

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>
  addTodo: (e: React.FormEvent) => void
}

const TodoForm: React.FC<Props> = ({input, setInput, addTodo}) => {
  return (
    <div className='todo-form'>
        <form onSubmit={addTodo}>
            <input type="text" placeholder='Add a todo' value={input} onChange={(e)=> setInput(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default TodoForm