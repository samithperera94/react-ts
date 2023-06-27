import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
// import Todo from './models/todo';
// import { useState } from 'react';
import TodosContextProvider from './store/todos-context';

function App() {
  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn TS')
  // ];
  // const [todos,setToDos] = useState<Todo[]>([]); 

  // const addTodoHandler = (text:string) => {
  //   const newTodo = new Todo(text);

  //   setToDos((prevTodos)=>{
  //     return prevTodos.concat(newTodo);
  //   })
  // }

  // const onDeleteTodoHandler = (id:string) => {
  //   const exsistingTodo = todos.find((todo)=> todo.id === id);

  //   if(exsistingTodo){
  //     setToDos((prevTodos)=> {
  //       return prevTodos.filter((todo) => todo.id !== id)
  //     })
  //   }
  // }
  // return (
  //   <div>
  //     <NewTodo onAddTodo={addTodoHandler}/>
  //     <Todos items={todos} onRemoveTodo={onDeleteTodoHandler}/>
  //   </div>
  // );

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
