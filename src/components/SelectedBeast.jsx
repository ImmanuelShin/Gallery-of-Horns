import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import HornedBeast from '../components/HornedBeast';

function SelectedBeast(props) {
  const handleClick = () => {
    props.increaseFav();
  }
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={!!props.title}
      onHide={props.closeModal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.img} alt={props.description} onClick={handleClick}></img>
        <p>
          {props.description}
        </p>
        <p>&#10084;: {props.favCount}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SelectedBeast;