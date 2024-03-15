import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <Navbar className="nav" style={{ backgroundColor:'#b700ff',padding:'0px'}}>
        <Container style={{padding:'0px',marginLeft:'2vw'}}>
          <Navbar>
            {/*  navigate to home page in router link*/}
<Link to={"/"}style={{textDecoration:'none'}}>
            <h2 className='heading mt-2' style={{color:"#FFFF"}}><i className="fa-solid fa-photo-film logo"></i> &nbsp;Media Player</h2>
  
</Link>              
          </Navbar>
        </Container>
      </Navbar>
    </>
  )
}

export default Header