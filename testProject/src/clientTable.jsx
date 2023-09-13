import Table from 'react-bootstrap/Table';


function ClientTable() {
  return (
    <Table striped bordered hover className='mt-3 rounded'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Source</th>
          <th>Status</th>
          <th></th>          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
       
      </tbody>
    </Table>
  );
}

export default ClientTable;