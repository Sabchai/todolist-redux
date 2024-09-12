import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react'

import { useDispatch} from 'react-redux'
import {addTodo} from '../redux/todolistSlice'
const TodoAdd = () => {
  const [textInput,setTextInput]=useState('')
const dispatch = useDispatch()
const handelAdd=()=>{
  dispatch(addTodo(textInput))
  setTextInput('')
}


  return (
    <div>
        < input placeholder='put a todo to do '  onChange={(e)=>setTextInput(e.target.value)}  />
        <Button variant="outline-secondary" onClick={()=>handelAdd()}  >add</Button>

    </div>
  )
}

export default TodoAdd