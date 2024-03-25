import React from 'react'
import Table from 'react-bootstrap/Table'
import { NoteForm } from './NoteForm/NoteForm'
import { Button } from 'react-bootstrap'

export const NoteTable = ({ notes, updateNote, deleteNote }) => {
    return (
        <div>
            <Table striped bordered hover size='xl'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((note, i) => {
                        return (
                            <tr key={i}>
                                {console.log(note.id)}
                                <td>{note.title}</td>
                                <td>{note.desc}</td>
                                <td>{note.priority}</td>
                                <td>{note.status}</td>
                                <td>
                                    <NoteForm
                                        submitNote={updateNote} label={"Update"} variant={"secondary"} 
                                        defaultNote={note} />
                                    <Button
                                        variant="danger"
                                        onClick={() => deleteNote(note.id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </div>
    )
}
