import { Todo } from '../model'
import React from 'react'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
interface SingleTodoProps  {
    todo:Todo,
    todos:Todo[],
    setTodo:React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo:React.FC<SingleTodoProps> = ({todo,todos,setTodo}) => {
  return (
    <form className='todos__single'>
        <span className='todos__single--text'>{todo.todo}</span>
        <div >
            <span className='icon'>
                <AiFillEdit/>
            </span>
            <span className='icon'>
                <AiFillDelete/>
            </span>
            <span className='icon'>
                <MdDone/>
            </span>

        </div>
    </form>
  )
}

export default SingleTodo