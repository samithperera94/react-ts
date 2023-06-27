import Todo from '../models/todo';
import classes from "./TodoItem.module.css";


const TodoItem: React.FC<{text:string}> = ({text}) => {
    // const onDeleteHandler = () => {
    //     props.onDelete()
    // }
  return (
    <li className={classes.item}>{text}</li>
  )
}

export default TodoItem