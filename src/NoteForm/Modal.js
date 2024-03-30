import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ModalForm } from "./Form";
import { ModalSelect } from "./Select";

export const GetModal = ({
  show,
  handleClose,
  onChangeHandler,
  handleSubmit,
  handleClear,
  defaultNote,
  resetCounter,
  title
}) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm
            label={"Title"}
            pHolder={"what's the task title?"}
            onChangeHandler={onChangeHandler}
            fieldName={"title"}
            defaultValue={defaultNote.title}
            resetCounter={resetCounter}
          />
          <ModalForm
            label={"Description"}
            pHolder={"what's the task description?"}
            onChangeHandler={onChangeHandler}
            fieldName={"desc"}
            defaultValue={defaultNote.desc}
            resetCounter={resetCounter}
          />
          <ModalSelect
            label={"Priority"}
            onChangeHandler={onChangeHandler}
            fieldName={"priority"}
            defaultValue={defaultNote.priority}
            options={["low", "normal", "high"]}
            resetCounter={resetCounter}
          />
          <ModalSelect
            label={"Status"}
            onChangeHandler={onChangeHandler}
            fieldName={"status"}
            defaultValue={defaultNote.status}
            options={["pending", "inProgress", "done", "failed"]}
            resetCounter={resetCounter}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClear}>
            Clear
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
