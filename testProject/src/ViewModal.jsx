// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import PropTypes from 'prop-types'; 

function ViewModal(props) {
  
  const formData = {
    status: 'New',
    source: 'Website',
    name: '',
    number: '',
    email: '',
    notes: '',
  };

  console.log(formData ,"formData")

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Lead</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label className="">
              <strong>Status</strong>
            </Form.Label>
            <Form.Select
              className="mb-3"
              style={{ width: '25%' }}
              value={formData.status}
    
            >
              <option value="New">New</option>
              <option value="Old">Old</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>
              <strong>Source</strong>
            </Form.Label>
            <Form.Select
              className="mb-3"
              style={{ width: '25%' }}
              value={formData.source}
 
            >
              <option value="Website">Website</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>

          <h3 className="">Lead Details</h3>
          <hr />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <strong>Name</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="client name"
              autoFocus
              value={formData.name}
         
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <strong>Number</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="client number"
              autoFocus
              value={formData.number}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <strong>Email</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="client email"
              autoFocus
              value={formData.email}
  
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>
              <strong>Notes</strong>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={formData.notes}
       
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
  
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

ViewModal.propTypes = {
  onHide: PropTypes.func.isRequired, // Assuming onClick is a function and is required
};

export default ViewModal;