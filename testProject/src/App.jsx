import Navigation from './navbar'
import ClientForm from './clientForm'
import ClientTable from './clientTable'
import MyVerticallyCenteredModal from './clientModal';
import { useState } from 'react';

import './App.css'

function App() {
  const [modalShow, setModalShow] = useState(false);
  const handleModal = () => {
    setModalShow(false);
  }
  const showModal = () => {
    setModalShow(true);
    console.log(modalShow, "modalShow")
  }
  console.log(modalShow, "modalShow")
  return (
    <>

      <Navigation />
      <ClientForm 
       onClick={showModal}
       />
      <ClientTable/>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={handleModal}
      />
    </>
  )
}

export default App
