import React, { useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';

function ToDoItem(props) {
  const [isCrossed, setCrossed] = useState(false);
  return (
    <div className="todo-item">
      <li className="todo-list"
        onClick={() => {
          setCrossed(true);
        }}
        style={{ textDecoration: isCrossed ? "line-through" : "none" }}
      >
        {props.toDo}
        
      {isCrossed && 
        <CancelIcon 
        className="list-btn"
          onClick={() => {
            props.onDelete(props.id);
            setCrossed(false);
          }}/>
        }
      </li>
    </div>
  );
}

export default ToDoItem;
