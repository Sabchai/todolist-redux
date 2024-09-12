import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    { id: uuidv4(), text: "Hoy tengo planes", done: false },
    { id: uuidv4(), text: "Mañana iré a ver a mi amiga", done: true },
    { id: uuidv4(), text: "El domingo, día libre", done: false },
];

const todolistSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        done: false,
        text: action.payload,
      };
      state.push(newTodo);
    },

    deleteTodo: (state, action) => {
      return state.filter(el => el.id !== action.payload);
    },

    toggleTodo: (state, action) => {
      const task = state.find(el => el.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todolistSlice.actions;

export default todolistSlice.reducer;
