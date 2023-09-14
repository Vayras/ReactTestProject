import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from './graphql';
import { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/esm/Container';
import PropTypes from 'prop-types';
import ViewModal from './ViewModal';


function ClientTable() {
  const [modalShow , setModalShow] = useState("false")
  const [key, setKey] = useState("");
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const clients = data.clients;
  const clientFields = clients.length > 0 ? Object.keys(clients[0]) : [];
  const buttonColumnHeader = "Actions";

  const filteredClientFields = clientFields.filter((field) => field !== "__typename" && field !== '_id');

  function hideModal(){
    setModalShow(false)
  }

 function handleEditClick(client) {
    console.log(client, "client data")
    setKey("Edit")
    console.log(key)
    setModalShow(true)
   
  }

   function handleViewClick(client) {
    console.log(client, "client data")
  }

  function handleButtonClick(client) {
    console.log(client, "client data")

  }


  return (
    <Container >
      <h2>Clients</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            {filteredClientFields.map((field) => (
              <th key={field}>{field}</th>
            ))}
            <th>{buttonColumnHeader}</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client._id}>
              {filteredClientFields.map((field) => (
                <td key={field}>{client[field]}</td>
              ))}
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={() => handleEditClick(client)}>Edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={() => handleViewClick(client)}>View</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={() => handleButtonClick(client)}>Update</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>

            </tr>

          ))}
        </tbody>
      </Table>
     <ViewModal
    show={modalShow}
    onHide={hideModal}
     />
    </Container>
  );
}

ClientTable.propTypes = {
  handleEdit: PropTypes.func.isRequired, // Assuming onClick is a function and is required
};


export default ClientTable;
