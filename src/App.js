import React, { useState } from 'react';
import { NoteForm } from './NoteForm/NoteForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NoteTable } from './NoteTable';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const deleteNote = (noteID) => {
    setNotes(
      notes.filter((note) => {
        return note.id !== noteID
      })
    )
  }

  const updateNote = (updatedNote) => {
    // console.log(updatedNote)
    const newNotes = notes.map((x) => {
      if (x.id === updatedNote.id) {
        x = updatedNote
      }
      return x
    })
    // console.log(newNotes)
    setNotes(newNotes)
    // console.log(notes)
  }


  return (
    <div className="App">
      <NoteForm submitNote={addNote} label={"Add Note"} variant={"primary"} />
      <br /> <br />
      <NoteTable notes={notes} deleteNote={deleteNote} updateNote={updateNote} />
    </div>

  );
}

export default App;
