import React, { useEffect, useState } from 'react'
import { GetModal } from './Modal'
import { Button } from 'react-bootstrap'
import { uid } from 'uid'

export const NoteForm = ({ submitNote, label, variant, defaultNote }) => {
  const [show, setShow] = useState(false);
  const [note, setNote] = useState({})
  const [resetCounter, setResetCounter] = useState(0)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => reset(), [])

  const reset = () => {
    setNote(
      defaultNote ? defaultNote :
        {
          id: uid(),
          title: "",
          desc: "",
          priority: "normal",
          status: "inProgress",
        }
    )
    setResetCounter(resetCounter + 1)
  }

  const onChangeHandler = (e) => {
    switch (e.target.id) {
      case "title":
        setNote({ ...note, title: e.target.value })
        break
      case "desc":
        setNote({ ...note, desc: e.target.value })
        break
      case "priority":
        setNote({ ...note, priority: e.target.value })
        break
      case "status":
        setNote({ ...note, status: e.target.value })
        break
      default:
        break
    }
    console.log(`name: ${e.target.id} | value: ${e.target.value}`)
  }

  const submit = (e) => {
    e.preventDefault()
    console.log(note)
    setNote(note)
    submitNote(note)
    reset()
    setShow(false)
  }

  const handleClear = (e) => {
    e.preventDefault()
    reset()
  }

  return (
    <>
      <Button variant={variant} onClick={handleShow}>
        {label}
      </Button>
      <GetModal show={show} handleClose={handleClose}
        onChangeHandler={onChangeHandler}
        handleSubmit={submit} defaultNote={note}
        handleClear={handleClear}
      />
    </>
  )
}
