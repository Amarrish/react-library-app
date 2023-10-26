import React from 'react'
import "./Component.css"
const Footer = () => {
  return (
    <>
  <footer>
        <div className='d-flex justify-content-between '>
            <div className='m-3 text-light'>
                <h3>Read me</h3>
                <h6>Shops</h6>
                <h6>Links</h6>
                <h6>Top</h6>
                <h6>Authors</h6>
            </div>

            <div className='text-light'>
                <h3>Gallery</h3>
                <h6>Collections</h6>
                <h6>Pages</h6>
                <h6>Contacts</h6>
                <h6>Inquery</h6>
                <h6>Thrillers</h6>
                <h6>Investigation</h6>
            </div>

            <div className='m-3 text-light'>
            <h3>Services</h3>
                <h6>Info</h6>
                <input className='footerinput' style={{borderRight:'none', border:'none',padding:'5px', borderTopLeftRadius:'10px', borderBottomLeftRadius:'10px', outline:'none'}} type="text" placeholder='Your Email...'/>
                <button className='footerinput' style={{borderLeft:'none', border:'none',padding:'5px', backgroundColor:'red', color:'white', borderTopRightRadius:'10px', borderBottomRightRadius:'10px' }}>Subscribe</button>
                <div className='d-flex'>
                    <div><i class="fa-brands fa-linkedin-in text-light m-2"></i></div>
                    <div><i class="fa-brands fa-github text-light  m-2"></i></div>
                    <div><i class="fa-brands fa-instagram text-light  m-2"></i></div>
                </div>
            </div>
        </div>
        <div className='text-center align-items-center justify-content-center w-100 d-flex' style={{borderTop:'1px solid white', height:'40px'}}>
            <p className='align-items-center text-white'>Copyright © India 2023</p>
        </div>
        </footer>
    </>
  )
}

export default Footer