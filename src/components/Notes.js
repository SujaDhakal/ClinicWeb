import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Notes(props) {
  const [isCLicked, setIsClicked] = useState(false);

  
  const timestamp = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
  })
    .format(Date.now())
    .slice(0, 23); 
  console.log(timestamp);

  return (
    <div className="note-saved">
      <h3 onClick={() => setIsClicked(!isCLicked)} >{props.title} 
      <p className="date">{timestamp}</p>
      </h3>

      {isCLicked && (
        <div className="note-content">
          <p>{props.content}</p>
          <DeleteIcon 
          fontSize="large"
          className="list-btn"
            onClick={() => {
              props.onDelete(props.id);
            }}/>
        </div>
      )}
    </div>
  );
}

export default Notes;
