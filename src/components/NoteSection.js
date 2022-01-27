import React, {useState} from 'react'
import Notes from './Notes';
import CreateNotes from './CreateNotes';
import './Note.css'

function NotesTodo() {
    
  // ---------Notes--------
  const [noteList, setNoteList]=useState([]);

  const AddNotes =(newNotes) => {
    setNoteList((prevValue)=> {
      return [...prevValue, newNotes]
    })
  }

const deleteNotes =(index)=>{
  setNoteList(prevValue => {
     return prevValue.filter((noteItem, id) =>{
       return index !== id;
    })
  })
}


    return (
        <div className='note-todo'>
      <div className="note-container">
      <h1 className="h-titles" style={{}}>Notes</h1>
           <CreateNotes onAdd={AddNotes} />
          {noteList.map((noteItem, index)=>{
            return <Notes 
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNotes}
            />
          })}
          </div>
          </div>
       
    )
}

export default NotesTodo
