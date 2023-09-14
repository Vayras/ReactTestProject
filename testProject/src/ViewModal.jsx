import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useMutation } from '@apollo/client';
import { UPDATE_CLIENT } from './graphql';
import PropTypes from 'prop-types';

function ViewModal(props) {
  const [formData, setFormData] = useState({
    _id: '',
    status: 'New',
    source: 'Website',
    name: '',
    number: '',
    email: '',
    notes: '',
  });

  useEffect(() => {
    setFormData({ ...props.formData });
  }, [props.formData]);

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

const [updateClientMutation] = useMutation(UPDATE_CLIENT);
const UpdateClient = async () => {
  try {
    const response = await updateClientMutation({
      variables: {
        _id: formData._id,
        name: formData.name,
        number: formData.number,
        email: formData.email,
        notes: formData.notes,
        status: formData.status,
        source: formData.source,
      },
    });

    if (response.data.updateClient) {
      console.log('Client updated:', response.data.updateClient);
      props.onHide();
    } else {
      console.error('GraphQL errors:', response.errors);
    }
  } catch (error) {
    console.error('Error updating client:', error);
  }
};
  
 
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
            onChange={handleStatusChange}
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
            onChange={handleSourceChange}
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
            onChange={handleClientNameChange}
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
            onChange={handleNumberChange}
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
            onChange={handleEmailChange}
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
            onChange={handleNotesChange}
          />
        </Form.Group>
      </Form>
    </Modal.Body>
      <Modal.Footer>
        <Button onClick={UpdateClient}>Update</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

ViewModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default ViewModal;