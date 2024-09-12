import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/todolistSlice';

const TodoElement = ({ el }) => {
  const dispatch = useDispatch();
  console.log(el)
  return (
    <li>
      <span style={{ textDecoration: el.done ? 'line-through' : 'none' }}>
        {el.text}
      </span>
      <button onClick={() => dispatch(toggleTodo(el.id))}>
        {el.done ? 'Undo' : 'Done'}
      </button>
      <button onClick={() => dispatch(deleteTodo(el.id))}>
        Remove
      </button>
    </li>
  );
};

export default TodoElement;
