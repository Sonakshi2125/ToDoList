import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    let [todos , seTodos] = useState([{ task:"Tasks", id:"uuidv4()"}]);
    let [newTodo , setnewTodo] = useState("");

    let addnewTask =()=>{
        seTodos([...todos , {task:newTodo , id:uuidv4()}]);
        setnewTodo("");
    }

    let updateTodo =(event)=>{
       setnewTodo(event.target.value);
    }
    let deleteTodo=(id)=>{
        seTodos((prevTodos)=> todos.filter((prevTodos)=>prevTodos.id!=id));
    }
  return (
    <div>
      <input placeholder='add a task' value={newTodo} onChange={updateTodo}></input>
       &nbsp;
       &nbsp;
       &nbsp;
       &nbsp;

        <button onClick={addnewTask}>Add Task</button>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <p>Task todo</p>
      <ul>
        {
            todos.map((todo) =>(
             <li key={todo.id}>
             <span>{todo.task}</span>
             &nbsp;
             &nbsp;
             &nbsp;
             <button onClick={()=>deleteTodo(todo.id)}>delete</button>
             </li>
             ))
        }
      </ul>
    </div>
  )
}

export default TodoList
