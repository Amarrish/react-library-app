import React from 'react'
import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById, updateBook } from '../service/aiiAPI';
import { useNavigate } from 'react-router-dom';



const Editpage = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [editedBook, setEditedBook] = useState({}); // State to store edited book details
    const navigate = useNavigate();

  
    useEffect(() => {
      // Fetch the book details based on the ID
      getBookById(id)
        .then((response) => {
          setBook(response.data);
          setEditedBook(response.data); // Initialize edited book with current details
        })
        .catch((error) => {
          // Handle error
        });
    }, [id]);
  
    // Function to handle changes in input fields
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedBook((prevBook) => ({
        ...prevBook,
        [name]: value,
      }));
    };
  
    // Function to save changes
    const handleSaveChanges = () => {
      // Call the updateBook function to save the changes
      updateBook(id, editedBook)
        .then((response) => {
          // Handle successful update
          // You might want to update the UI to reflect the changes
          setBook(editedBook); 
          // Update the displayed book with edited details
          alert("Changes Saved Successfully")
          navigate('/home');
        })
        .catch((error) => {
          // Handle error
        });
    };
  return (
    <>
    
        <div style={{height:'auto'}} className='w-100 justify-content-center align-items-center d-flex mt-5'>
            <form className=' m-5 p-3' style={{border:'1px solid black'}}>
                <div className='w-100 justify-content-between align-items-center d-flex'>
                    <label>Book ID : </label>
                     <input
                      type="text"
                      name="id"
                      value={editedBook.id}
                      onChange={handleInputChange}
                      disabled // ID is typically not editable
                    />
                </div>

               

                <div className='w-100 justify-content-between align-items-center d-flex mt-3'>
                    <label>Book Img Url : </label>
                    <input
                      type="text"
                      name="img"
                      value={editedBook.url}
                      onChange={handleInputChange}
                    />
                </div>

                <div className='w-100 justify-content-between align-items-center d-flex  mt-3'>
                    <label>Book Name : </label>
                     <input
                      type="text"
                      name="name"
                      value={editedBook.name}
                      onChange={handleInputChange}
                    />
                </div>

                <div className='w-100 justify-content-between align-items-center d-flex mt-3'>
                    <label>Author Name : </label>
                   <input
                    type="text"
                    name="author"
                    value={editedBook.author}
                    onChange={handleInputChange}
                  />
                </div>

                <div className='w-100 justify-content-between align-items-center d-flex mt-3'>
                    <label>Book Price : </label>
                     <input
                      type="text"
                      name="price"
                      value={editedBook.price}
                      onChange={handleInputChange}
                    />
                </div>

                <div className='w-100 justify-content-between align-items-center d-flex mt-3'>
                    <label>Book Category : </label>
                   <select  value={editedBook.category} onChange={(e)=>setEditedBook({...book,category:e.target.value})}>
                   <option disabled color='black' placeholder='Select'  value="">Select</option>
                    <option value="classic">classic</option>
                    <option value="trending">trending</option>
                    <option value="Investigation">Investigation</option>
                    <option value="Science">Science</option>
                    <option value="kids">kids</option>
                   </select>
                </div>

                {/* <div className='w-100 justify-content-between align-items-center d-flex mt-3'>
                    <label>Book Category : </label>
                   <input
                    type="text"
                    name="category"
                    value={editedBook.category}
                    onChange={handleInputChange}
                  />
                </div>  */}

                <div className='w-100 mt-3 justify-content-center align-items-center d-flex'>
                    <Button onClick={handleSaveChanges} className='btn' style={{ color:'black', fontWeight:'900'}}>Save Changes</Button></div>
            </form>
        </div> 
    </>
  )
}

export default Editpage