import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function MyVerticallyCenteredModal(props) {
  const [formData, setFormData] = useState({
    status: '',
    source: '',
    name: '',
    number: '',
    email: '',
    notes: '',
  });

  const handleClientNameChange = (e) => {
    const newName = e.target.value;
    setFormData({ ...formData, name: newName });
  };

  const handleNumberChange = (e) => {
    const newNumber = e.target.value;
    setFormData({ ...formData, number: newNumber });
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setFormData({ ...formData, email: newEmail });
  };

  const handleNotesChange = (e) => {
    const newNotes = e.target.value;
    setFormData({ ...formData, notes: newNotes });
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setFormData({ ...formData, status: newStatus });
  };

  const handleSourceChange = (e) => {
    const newSource = e.target.value;
    setFormData({ ...formData, source: newSource });
  };

 
  const handleSave = () => {
    props.onDataReceived(formData); 
  };

  console.log(formData,"formData")

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Lead
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label className=''><strong>Status</strong></Form.Label>
            <Form.Select className='mb-3' style={{ width: '25%' }} value={formData.status} onSelect={handleStatusChange}>
              <option value="New">New</option>
              <option value="Old">Old</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label><strong>Source</strong></Form.Label>
            <Form.Select className='mb-3' style={{ width: '25%' }} value={formData.source} onSelect={handleSourceChange}>
              <option value="Website">Website</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>

           <h3 className=''>Lead Details</h3>
          <hr />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label><strong>Name</strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="client name"
              autoFocus
              value={formData.name}
              onChange={handleClientNameChange} // Call the function when input changes
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label><strong>Number</strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="client name"
              autoFocus
              value={formData.number}
              onChange={handleNumberChange} // Call the function when input changes
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label><strong>Email</strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="client name"
              autoFocus
              value={formData.email}
              onChange={handleEmailChange} // Call the function when input changes
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label><strong>Notes</strong></Form.Label>
            <Form.Control as="textarea" rows={3} value={formData.notes} onChange={handleNotesChange}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal