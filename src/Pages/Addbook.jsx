import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import {uploadBooks} from '../service/aiiAPI'


const Addbook = () => {


    const [book,setBook] = useState({
        id:'',
        url:'',
        name:'',
        author:'',
        price:'',
        category:''
    })

    const handleUpload = async () =>{
      
        const {id,url,  name, author,  price,  category} = book
        if(!id || !url || !name || !author || !price || !category){
         alert("Please fill all the fields")
        }else{
          //make api call
          const response = await uploadBooks(book) //import uploadVideo from allapi
          if(response.status>=200 && response.status<300){
            //reset state
            setBook({
                id:'',
                url:'',
                name:'',
                author:'',
                price:'',
                category:''
            })
            //set server response
            window.alert("book added successfully!");
          // modal hide when fill form completely
          
          // console.log(response);
           
        }else{
          alert("enter unique id")
        }
      }
    }

  return (
    <>
        <div style={{height:'auto'}} className='w-100 justify-content-center align-items-center d-flex mt-5'>
            <form onSubmit={handleUpload} className=' m-5 p-3' style={{border:'1px solid black'}}>
                <div className='w-100 justify-content-between align-items-center d-flex'>
                    <label>Book ID : </label>
                    <input onChange={(e)=>setBook({...book,id:e.target.value})} style={{padding:'5px', border:'none', outline:'none', borderRadius:'2px',backgroundColor:'#abacff',color:'#fffff'}} type="text" />
                </div>

                <div className='w-100 justify-content-between align-items-center d-flex mt-3'>
                    <label>Book Img Url: </label>
                    <input onChange={(e)=>setBook({...book,url:e.target.value})} style={{padding:'5px', border:'none', outline:'none', borderRadius:'2px',backgroundColor:'#abacff',color:'#fffff'}} type="text" />
                </div>

                <div className='w-100 justify-content-between align-items-center d-flex  mt-3'>
                    <label>Book Name : </label>
                    <input onChange={(e)=>setBook({...book,name:e.target.value})} style={{padding:'5px', border:'none', outline:'none', borderRadius:'2px',backgroundColor:'#abacff',color:'#fffff'}} type="text" />
                </div>

                <div className='w-100 justify-content-between align-items-center d-flex mt-3'>
                    <label>Author Name : </label>
                    <input onChange={(e)=>setBook({...book,author:e.target.value})} style={{padding:'5px', border:'none', outline:'none', borderRadius:'2px',backgroundColor:'#abacff',color:'#fffff'}} type="text" />
                </div>

                <div className='w-100 justify-content-between align-items-center d-flex mt-3'>
                    <label>Book Price : </label>
                    <input onChange={(e)=>setBook({...book,price:e.target.value})} style={{padding:'5px', border:'none', outline:'none', borderRadius:'2px',backgroundColor:'#abacff',color:'#fffff'}} type="text" />
                </div>


                <div className='w-100 justify-content-between align-items-center d-flex mt-3'>
                    <label>Book Category : </label>
                   <select  value={book.category} onChange={(e)=>setBook({...book,category:e.target.value})}>
                   <option disabled color='black' placeholder='Select'  value="">Select</option>
                    <option value="classic">classic</option>
                    <option value="trending">trending</option>
                    <option value="Investigation">Investigation</option>
                    <option value="Science">Science</option>
                    <option value="kids">kids</option>
                   </select>
                </div>

                <div className='w-100 mt-3 justify-content-center align-items-center d-flex'><Button type='submit' className='btn' style={{ fontWeight:'900',color:'#fffff'}}>Add to library</Button></div>
            </form>
        </div>
    </>
  )
}

export default Addbook

