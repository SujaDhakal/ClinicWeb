import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function CreateNotes(props) {
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

const [clicked, setClicked]=useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNotes((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  return (
      <form className="note-form">
      <div >
        <input
        className="note-title" onClick={()=> setClicked(!clicked)}
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Note Title..."
          value={notes.title}
        />
        </div>
     { clicked &&  <div className="note-body">
        <div style={{borderTop: "2px solid #56556E", width:"90%", margin: "0 auto"}}></div>
        <textarea
          onChange={handleChange}
          type="text"
          name="content"
          placeholder="Your Note..."
          value={notes.content}
          row="3"
        />
        </div>}
         <AddCircleIcon 
         sx={{ fontSize: 40 }}
          className="note-btn"
          onClick={(event) => {
            props.onAdd(notes);
            setNotes({
              title: "",
              content: "",
            });

            event.preventDefault();
          }}/>
      </form>
  
  );
}

export default CreateNotes;
