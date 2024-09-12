import './App.css';
import TodoAdd from './components/TodoAdd'; 
import TodoList from './components/TodoList'; 

function App() {
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <TodoAdd />
      <TodoList />
    </div>
  );
}

export default App;
