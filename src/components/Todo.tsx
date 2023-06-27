import React from 'react';
import Todo from '../models/todo';
import classes from "./TodoItem.module.css";

// interface TodoProps {
//     todo:Todo,
//     onDelete: (id:string) =>void
// }

// const TodoItem = ({todo,onDelete}:TodoProps) => {
const TodoItem: React.FC<{text:string;onRemoveTodo:()=>void}> = (props) => {
    
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
  )
}

export default TodoItem