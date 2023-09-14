import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MyVerticallyCenteredModal from './clientModal';
import ClientTable from './clientTable';
import { useState } from 'react';


function BasicForm() {
    const [client, setClient] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [data, setData] = useState({
        status: "",
        source: "",
        name: "",
        number: "",
        email: "",
        notes: "",
    });

    const handleChange = (e) => {
        setClient(e.target.value);
    }

    const handleModal = () => {
        setModalShow(false);
    }

    const handleDataFromModal = (formData) => {
        setData(formData);
    };

   


    console.log(data, "data.name")
    return (
        <Container >
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
                <Button variant="primary" className='bg-white text-black' onClick={() => setModalShow(true)} type="button">
                    Add Lead +
                </Button>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={handleModal}
                   
                    onDataReceived={handleDataFromModal} // Pass the function to the modal
                />
            </Form>
            <ClientTable />
        </Container>
    );
}

export default BasicForm;