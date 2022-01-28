import React, {useState} from 'react'
import "./Note.css";
import ToDos from './ToDos';
import ToDoItem from './ToDoItem';

function TodoSection() {
    
  const [toDoList, seToDoList]=useState([]);

  const addToDo = (newToDo)=>{
    seToDoList(prevValue => {
      return [...prevValue, newToDo]
    })
    
  }
  
  const deleteTodo=(index) =>{
    seToDoList(prevValue =>{
      return prevValue.filter((todoItem, id)=>{
        return index !== id;
      })
    })
  }
    return (
        <div className="todo-container">
        <h1 className="h-titles">To-Do List</h1>
         <ToDos onAdd={addToDo} />
         {toDoList.map((todoItem, index)=>{
           return <ToDoItem 
              key={index}
              id={index}
              toDo={todoItem}
              onDelete={deleteTodo}
           />
         })}
         
        </div>
    )
}

export default TodoSection
