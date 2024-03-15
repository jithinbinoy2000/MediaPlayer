import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    <div className="container" style={{padding:'0px',marginLeft:'2px'}}>
      <div className="row align-item-center m-5">
        <div className="col-lg-5 landingImage">
          <h3>Welcome to <br /><span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media player app will allow you to add and remove their uploaded videos, also helps to arrange them in different categories by providing drag and drop functionalities</p>
          {/* navigation to home Page */}
          <Link to={'/home'} className='btn btn-info mt-5 fw-bolder'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid' src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="gif image" />
        </div>
      </div>
      <div className="feature " style={{marginLeft:'6vw'}}>
        <div className="text-center"><h4>Features</h4></div>
        <div className="cards mt-5 d-flex justify-content-evenly" >
     
        <Card style={{ width:'13rem' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/f5/aa/d8/f5aad8e143b8d197c25d5e884bb315a2.gif" />
        <Card.Body>
          <Card.Title>Managing Videos</Card.Title>
          <Card.Text>
           User can upload, view and remove the videos
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width:'13rem' }}>
        <Card.Img variant="top" src="https://cdn.dribbble.com/users/77098/screenshots/2485682/main-icons_2.gif" />
        <Card.Body>
          <Card.Title>Categorise Videos</Card.Title>
          <Card.Text>
           User can Categorise Videos according to their  preference using drag and drop features
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width:'13rem' }}>
        <Card.Img variant="top" src="https://media1.giphy.com/media/CcchyXQPzrDqxTCWo0/200w.gif?cid=6c09b952ywq3c6iwa8jsbm2eb6r2980atwpcq5qrdrn6wss3&ep=v1_videos_search&rid=200w.gif&ct=v" style={{height:'150px'}} />
        <Card.Body>
          <Card.Title>Watch History</Card.Title>
          <Card.Text>
           User are able to see the history of watched videos
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
      </div>
    </div>
    <div className="row mt-5 border rounded p-5">
      <div className="col-lg-6">
        <h3 className='text-warning'>Simple, Fast & Powerfull</h3>
        <p><span className='fs-5'>Play everything</span>: play any videoos  and your likes and experience ad free videos</p>
        <p><span className='fs-5'>Categories videos </span>: Categories your videos as you like without any limit</p>
        <p><span className='fs-5'>Watch History</span>: find your videos even it missed</p>
      </div>
      <div className="col-lg-6">
      <iframe width="500" height="250" src="https://www.youtube.com/embed/1yVDM5l9vDQ" title="AHUN App Promo | Blender  animated Ad" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
    </>
  )
}

export default LandingPage