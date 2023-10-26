import React from 'react'
import { Link } from 'react-router-dom'
import logo from './200w.gif'



const Header = () => {
  return (
    <>
        <div className='d-flex justify-content-between align-items-center w-100' style={{borderBottom:'1px solid black'}}>
            <div className='m-2 d-flex'>
               <Link style={{textDecoration:'none'}} to={'/'}><h1>Read Me</h1></Link> 
                <img style={{width:'50px', height:'50px'}} src={logo} alt="" />
            </div>
            <div  className='m-2'><Link to={'/Home'} style={{textDecoration:'none'}}>Home Page</Link></div>
        </div>
    </>
  )
}

export default Header