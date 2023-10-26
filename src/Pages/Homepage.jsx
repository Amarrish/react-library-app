import React from 'react'
import Classicbooks from '../Components/Classicbooks'
import Trending from '../Components/Trending'
import Thrillers from '../Components/Thrillers'
import { Link } from 'react-router-dom'
import Science from '../Components/Science'
import Kids from '../Components/Kids'
const Homepage = () => {
  return (
    <>
    <div>
        <div className='d-flex justify-content-between'>
        <h1>Select Your Books</h1>
        <Link style={{textDecoration:'none',padding:'10px',backgroundColor:'#18bf15',color:'white', borderRadius:'10px'}} to={'/Addbook'}><h4> <i class="fa-sharp fa-solid fa-arrow-right fa-bounce text-light"></i>Add Books</h4></Link>
        </div>
        
        <div><Classicbooks/></div>
        <div><Trending/></div>
        <div><Science/></div>
        <div><Thrillers/></div>
        <div><Kids/></div>
    </div>
    </>
  )
}

export default Homepage