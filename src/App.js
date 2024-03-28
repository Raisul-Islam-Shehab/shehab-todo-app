import React, { useState } from 'react';
import { NoteForm } from './NoteForm/NoteForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NoteTable } from './NoteTable';
import { uid } from 'uid';
import { Button, Container, Nav, Navbar, Form, NavDropdown } from 'react-bootstrap';

function App() {
  const mockNotes = [
    {
      id: uid(),
      title: "Note 1",
      desc: "Note 1 description",
      priority: "low",
      status: "Pending",

    },
    {
      id: uid(),
      title: "Note 1",
      desc: "Note 1 description",
      priority: "high",
      status: "high",
    },
    {
      id: uid(),
      title: "Note 2",
      desc: "Note 2 description",
      priority: "normal",
      status: "Pending",
    },
    {
      id: uid(),
      title: "Note 3",
      desc: "Note 3 description",
      priority: "normal",
      status: "Pending",

    },
  ]
  const [notes, setNotes] = useState(mockNotes);
  const [searchItem, setSearchItem] = useState("")
  // const [isSearch, setIsSearch] = useState(false)
  const [sortItem, setSortItem] = useState("")

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

  const searchHandle = (e) => {
    // console.log(`Name: ${e.target.id} | Value: ${e.target.value}`)
    setSearchItem(e.target.value)
    // console.log(searchItem)
    // setIsSearch(true)
  }

  const handleSort = (key) => {
    setSortItem(key)
    // console.log(sortItem)
  }


  return (
    <div className="App">
      <Navbar expand='md' bg="light" data-bs-theme="light">
        <Container lg='1' md='1' s='1'>
          <Navbar.Brand>
            <NoteForm submitNote={addNote} label={"Add Note"} variant={"primary"} />
          </Navbar.Brand>
          <Nav className='me-auto'>
            {/* <Button>Sort</Button> */}
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id='search'
                onChange={searchHandle}
              />
            </Form>
          </Nav>
          <NavDropdown title="Sort By" id="sort" className='mt-1' onSelect={handleSort}>

            <NavDropdown.Item

              eventKey='priority'>
              priority
            </NavDropdown.Item>

            <NavDropdown.Item

              eventKey='status'>
              status
            </NavDropdown.Item>

          </NavDropdown>

        </Container>
      </Navbar>
      {/* <NoteForm submitNote={addNote} label={"Add Note"} variant={"primary"} /> */}
      <br /> <br />
      <NoteTable notes={notes} deleteNote={deleteNote}
        updateNote={updateNote}
        searchItem={searchItem} />
    </div >

  );
}

export default App;
