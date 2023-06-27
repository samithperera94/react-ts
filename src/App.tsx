import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import { useState } from 'react';

function App() {
  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn TS')
  // ];
  const [todos,setToDos] = useState<Todo[]>([]); 

  const addTodoHandler = (text:string) => {
    const newTodo = new Todo(text);

    setToDos((prevTodos)=>{
      return prevTodos.concat(newTodo);
    })
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
