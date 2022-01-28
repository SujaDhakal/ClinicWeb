import React, {useState} from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function ToDos(props) {

    const [toDo,setToDo]=useState("")

    const handleChange = (event)=>{
        setToDo(event.target.value);
    }
    return (
        <div className="todo-input">
            <input onChange={handleChange} type="text" placeholder="Things to do..." value={toDo}/>
            <AddCircleIcon 
            sx={{ fontSize: 40 }}
            className="todo-btn"
            onClick={(event)=>{
                props.onAdd(toDo);
                setToDo("");
                event.preventDefault();
            }} />
        </div>
    )
}

export default ToDos
