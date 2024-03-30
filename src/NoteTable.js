import React from "react";
import { NoteForm } from "./NoteForm/NoteForm";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

export const NoteTable = ({
  notes,
  updateNote,
  deleteNote,
  searchItem,
  sortItem,
}) => {
  // console.log(isSearch)
  //   console.log(searchItem);

  let filteredNotes = notes;
  if (searchItem.trim().length !== 0) {
    filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchItem.toLowerCase())
    );
  }
  //   console.log(filteredNotes)

    console.log(sortItem);

  if (sortItem === "priority") {
    filteredNotes.sort((a, b) => a.priority.localeCompare(b.priority));
  }
  if (sortItem === "status") {
    filteredNotes.sort((a, b) => a.status.localeCompare(b.status));
  }
  //   if (!sortItem) {
  //     // console.log(sortItem);
  //     filteredNotes = notes;
  //   }

  return (
    <div>
      <Container>
        <Row xs={1} xl={3} md={2}>
          {filteredNotes.map((note, index) => {
            return (
              <Col key={index}>
                <Card key={index} className="card-item mb-3">
                  <Card.Header as="h3">{note.title}</Card.Header>
                  <Card.Body>
                    <Card.Text>{note.priority}</Card.Text>
                    <Card.Text>{note.status}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {/* <Button className='mt-1'>Details</Button>{' '} */}
                    <NoteForm
                      submitNote={updateNote}
                      label={"Update"}
                      variant={"secondary"}
                      defaultNote={note}
                    />{" "}
                    <Button
                      className="mt-1"
                      variant="danger"
                      onClick={() => deleteNote(note.id)}
                    >
                      Delete
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
