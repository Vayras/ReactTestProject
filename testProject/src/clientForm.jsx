import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

import { useState } from 'react';

function ClientForm(props) {
  const [client, setClient] = useState("");

  const handleChange = (e) => {
    setClient(e.target.value);
  }

  return (
    <Container>
      <Form className="mt-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Client Data</Form.Label>
          <Form.Control
            type="text"
            placeholder="Client Data"
            value={client}
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          className="bg-white text-black"
          onClick={props.onClick} // Corrected onClick handler
          type="button"
        >
          Add Lead +
        </Button>
      </Form>
    </Container>
  );
}

ClientForm.propTypes = {
    onClick: PropTypes.func.isRequired, // Assuming onClick is a function and is required
  };

export default ClientForm;
