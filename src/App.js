import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import './App.css';
import { Categorylist } from './mapA';


export function App() {
  return (
    <>
         <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand  className='text-white' href="#">Админ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-white' href="#action1">Хэрэглэгч</Nav.Link>
            <Nav.Link className='text-secondary' href="#action2">Ангилал</Nav.Link>
            <NavDropdown   title="Мэдээ" id="navbarScrollingDropdown">
              <NavDropdown.Item   className='text-secondary' href="#action3">Мэдээ</NavDropdown.Item>
              <NavDropdown.Item className='text-secondary' href="#action4">
                Сэтгэгдэл
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='text-secondary' href="#action5">
                Шинэ мэдээ
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='text-secondary' href="#" disabled>
              Сэдэв
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
           <div className='gg'>
           <Button className='border border-0 bg-light text-dark' variant="outline-success">Гарах</Button>
           </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
    
  );
}
 export function Section(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
    <div className='d-flex justify-content-between mt-5 mx-auto col-6'>
      <h1 className='my-5 '>Ангилал</h1>
      <Button className='my-5' variant="outline-primary" onClick={handleShow}>Шинэ</Button>{' '}
    </div>
    <Categorylist/>
  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ангилал нэмэх</Modal.Title>
        </Modal.Header>
        <Modal.Body>Нэр</Modal.Body>
        <InputGroup className="mb-3 px-3">
        <Form.Control
          placeholder="Ангиллын нэр"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
       
      </InputGroup>
        <Modal.Footer className='d-flex justify-content-between'>
          <Button className='bg-danger border-0 ' variant="secondary" onClick={handleClose}>
            Устгах
          </Button>
          <Button  className='bg-primary border-0 ' variant="primary" onClick={handleClose}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  );
  }
  

