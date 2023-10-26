import React from 'react'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { deleteBooks, getAllBooks } from '../service/aiiAPI';
import oopsimg from './cimg/download.jpg'
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Component.css'
const Science = () => {


    const [allbooks, setAllbooks] = useState([]);
    const [deletebooks,setDeletebooks] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const [validated, setValidated] = useState(false);
    const [borrowPrice, setBorrowPrice] = useState(null)
   
    
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else {
        // Simulate a successful payment
        window.alert("Payment successfully!");
      }
      setValidated(true);
    };
  
    const handleShowbutton = (price) => {
      setBorrowPrice(price);
      setShow(true);
    };
  
    const getalluploadedbooks = async () => {
      const response = await getAllBooks();
      setAllbooks(response.data);
    }
  
    //delete book
    const removebook = async(id)=>{
      //make api call 
      const response = await deleteBooks(id)
      setDeletebooks(true)
      console.log(response);
    }
  
    useEffect(() => {
      setDeletebooks()
      getalluploadedbooks();
    }, [deletebooks]);
  
  
    // Filter books with category "Science"
    const ScienceBooks = allbooks.filter((book) => book.category === "Science");


  return (
    <>
      <div className='mt-3 '>
        <h3 className='p-3 bg-primary text-light'>Sciencebooks</h3>
        <div className='d-flex flex-wrap cards'>
          {ScienceBooks.length > 0 ? (
            ScienceBooks.map((book) => (
              <div key={book.id} className='m-2'>
                <Card className='' style={{ width: '250px',height:'450px',alignItems:'center',boxShadow:'5px solid black'}}>
                  <Card.Img style={{ width: '150px', height: '150px',borderRadius:'10px' }} variant="top" src={book.url} />
                  <Card.Body>
                    <Card.Title style={{fontSize:'15px'}}>Book Name: {book.name}</Card.Title>
                    <Card.Text style={{fontSize:'15px'}}>Author: {book.author}</Card.Text>
                    <Card.Text style={{fontSize:'15px'}}>Price: {book.price}/-</Card.Text>
                    <div className='d-flex justify-content-between'>
                      <div><Link to={`/Editpage/${book.id}`}><i className="fa-regular fa-pen-to-square"></i></Link></div>
                      <div><i onClick={() => removebook(book.id)} className="fa-solid fa-trash text-danger"></i></div>
                    </div>
                    
                    <div className='text-center'>
                    <Button variant="primary" onClick={() => handleShowbutton(book.price)}>Borrow</Button>

                      <Modal
                      
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title type="submit" >Make Your Payment Here</Modal.Title>
                         
                        </Modal.Header>
                        <Modal.Body>
                          

                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Your First Name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Your Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
       
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>UPI</Form.Label>
          <Form.Control type="text" placeholder="Your UPI"  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid UPI.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder={`Rs. ${borrowPrice} /-`} disabled required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button  type="submit">Confirm your Payment</Button>
    </Form>
                        </Modal.Body>
                        
                      </Modal>
                    </div>
                    
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <p style={{fontWeight:'900', fontSize:'20px'}}><img src={oopsimg} alt="no img" style={{width:'100px',height:'100px', borderRadius:'50%'}} /> There is no Science books are availabe now!!!...</p>
          )}
        </div>
        
      </div>
    </>
  )
}

export default Science