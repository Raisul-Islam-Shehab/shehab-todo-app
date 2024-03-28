import React from 'react'
import { NoteForm } from './NoteForm/NoteForm'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'

export const NoteTable = ({ notes, updateNote, deleteNote, searchItem }) => {
    // console.log(isSearch)
    let filteredNotes = notes;
    if (searchItem.trim().length !== 0) {
        filteredNotes = notes.filter((note) =>
            note.title.toLowerCase().includes(searchItem.toLowerCase()))
    }


    return (
        <div>
            <Container>
                <Row xs={1} xl={3} md={2}>
                    {filteredNotes.map((note, index) => {
                        return (
                            <Col key={index}>
                                <Card key={index} className="card-item mb-3">
                                    <Card.Header as='h3'>{note.title}</Card.Header>
                                    <Card.Body>
                                        <Card.Text>{note.title}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button>Details</Button>{' '}
                                        <NoteForm
                                            submitNote={updateNote}
                                            label={"Update"} variant={"secondary"}
                                            defaultNote={note} />
                                        {' '} <Button className='mb-1'
                                            variant="danger"
                                            onClick={() => deleteNote(note.id)}>Delete</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container >
        </div>
    )
}
