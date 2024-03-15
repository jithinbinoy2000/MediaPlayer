import React from 'react'
import { Container,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
    <div className="footer-content d-flex " style={{width:'97%'}}>
      <div className="title" style={{width:'45%'}}>
      <Container>
          <Navbar.Brand href="#home">
          <h2 className='heading mt-2' style={{color:"#FFFF"}}><i className="fa-solid fa-photo-film logo"></i> &nbsp;Media Player</h2>
          </Navbar.Brand>
        </Container>
        <span className='utext'> desingned and build with all the love in the world by botstrap team with the help of  our contribuion</span>
        
      </div>
      <div className="links" style={{minWidth:'15%'}}>
        <ol>
          <li><h5>Links</h5></li>
          {/* navigate to designations */}
         <Link to={"/"} className='linkitems'> <li className='hv'>Landing Page</li></Link>
          <Link to={"/home"} className='linkitems '><li className='hv'> Home</li></Link>
          <Link to={'/watchhistory'} className='linkitems'><li className='hv'>Watch History</li></Link>
        </ol>
      </div>
      <div className="guide" style={{width:'15%'}}>
        <ul>
          <li><h5>Guide</h5></li>
        <Link to={'https://react.dev/'}className='linkitems'>  <li className='hv'>React</li></Link>
        <Link to={'https://react-bootstrap.netlify.app/'}className='linkitems'>  <li className='hv'>React Bootstrap</li></Link>
          <Link to={'https://www.w3schools.com/react/react_router.asp'} className='linkitems'><li className='hv'>Routing</li></Link>
        </ul>
      </div>
      <div className="contactUs"style={{width:'25%'}}>
        <ul>
        <li><h5>Contact Us</h5></li>
         <div className='d-flex'>
            <input type="text" placeholder='Enter your Email Id'  className='form-control email'/>
             <button className='btn ms-2' style={{backgroundColor:"purple"}}><i className="fa-solid fa-arrow-right fa-1x mt-1" style={{color:"#ffff"}}></i></button>
         </div>
 
       <div className='d-flex justify-content-evenly  text-decoration-none mt-3'>
         <a className='button'href='"mailto:jithinbinoy2000@gmail.com'> <li><i className="footer_icon fa-solid fa-envelope fa-2x"></i></li></a>
         <a href="https://www.linkedin.com/in/jithin-binoy2001/"> <li><i className="footer_icon fa-brands fa-linkedin  fa-2x"></i></li></a>
          <a href='https://github.com/jithinbinoy2000'><li><i className="footer_icon fa-brands fa-github fa-2x"></i></li></a>
          <a href='#instagram'><li><i className="footer_icon fa-brands fa-instagram fa-2x"></i></li></a>
       </div>
        </ul>
      </div>
    </div>
    <p className='utext text-center'>copyright &copy; 2024 Media Player, Build with React</p>

    </>
  )
}

export default Footer