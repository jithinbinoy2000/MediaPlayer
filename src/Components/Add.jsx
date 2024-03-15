import { useState } from "react";
import React  from 'react'
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { uploadNewVideoAPI } from "../Services/allAPI";



function Add({setuploadVideoResponse}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  //toast after added
  const [showA, setShowA] = useState(false);
  const [resultname,setresultname] = useState({})
  const toggleShowA = () => setShowA(!showA);
  //store forms to add video 
  const [uploadVideo,setuploadVideo]=useState({
    id:"",
    caption:"",
    url:"",
    link:""
  })
  //call api post data
  const handleUpload=async()=>{
    //destucture
    const {id,caption,url,link}=uploadVideo
    // verify complete form
    if(!id || !caption || !url ||!link){
      alert(" please fill the form completely")
    }
    else{
      //store uploadVideo in json -server
      const result = await uploadNewVideoAPI(uploadVideo)
      if(result.status>=200 && result.status<=299){
        handleClose();
        toggleShowA();
        setTimeout(()=>setShowA(false),4000)
        setresultname(result.data)
        setuploadVideo({id:'',caption:'',url:"",link:""})
// sharing data to view component by using  state lifting
// update view while new data added
setuploadVideoResponse(result.data)
      }
      else{
        //fail response
        alert(result.message)
      }
    }
  }
  //state for error message when null value
  const [nullvalue,setnullvalue]=useState(false)

  //resole youtube link
  //url : https://www.youtube.com/watch?v=lLjtnWVOxJA
  //embede: https://www.youtube.com/embed/lLjtnWVOxJA
  //  https://youtu.be/xrW52jF_uKA?si=un1ejF0SlcFPvdvW
  // id : lLjtnWVOxJA
const getYoutubeLink =(event)=>{
    const {value}=event.target
    if(value){
     if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      setuploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}?`})
      setnullvalue(false)
     }
     else if (value.includes("?si")){
      let vID = value.split("youtu.be/")[1].split("?si")[0]
      setnullvalue(false)
      setuploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}?`})
     }else if(value.includes("youtu.be/")){
      let vID = value.split("youtu.be/")[1].slice(0,11)
      setnullvalue(false)
      setuploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}?`})
     }
     else {
      setnullvalue(true)
      setuploadVideo({...uploadVideo,link:""})
     }
    }
  }
  return (
    <div>
      <div className="d-flex align-item-center " >
        <h5>Upload new Video</h5>
        <button onClick={handleShow} className="btn"><span style={{color:'#ffff'}}><i className="fa-solid fa-plus fa-beat"></i></span></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please Fill the Following Details
        </Modal.Body>
        <div className="container">
          {/* form */}
      <Form.Control
        type="text"
        className="mt-1"
        placeholder="Enter Video ID"
        onChange={(event)=>{setuploadVideo({...uploadVideo,id:event.target.value})}}
      />
      <Form.Control
        type="text"
        className="mt-3" 
        placeholder="Enter Video Caption"
        onChange={(event)=>{setuploadVideo({...uploadVideo,caption:event.target.value})}}
      />
      <Form.Control
        type="text"
        className="mt-3"
        placeholder="Enter Video Image URL"
        onChange={(event)=>{setuploadVideo({...uploadVideo,url:event.target.value})}}
      />
      <Form.Control
        type="text"
        className="mt-3"
        placeholder="Enter YouTube Video Link"
        //filtering youtube link to embede code
        onChange={(event)=> getYoutubeLink(event)}
      />
      {nullvalue && <div className="text-danger"> invalid link</div>}
          
        </div>
        <Modal.Footer className="mt-2">
          <Button variant="secondary"
          //resolving video link to embeded code
           onClick={()=>{handleClose();setuploadVideo({id:'',caption:'',url:"",link:""});}} >
            Cancel
          </Button>
           
          <Button variant="primary" style={{backgroundColor:'#b700ff', border:'none'}}
        onClick={handleUpload}
          >Upload</Button>
        </Modal.Footer>
      </Modal>
      {/* -------------------------------toast for sucessfull uploaf------------------------------------------------ */}
      <Row>
      <Col md={12} className="mb-2">
     
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Sucessfully completed</strong>
            <small>now</small>
          </Toast.Header>
          <Toast.Body>new video <span style={{fontWeight:"900"}}>"{resultname.caption}"</span> added sucessfully at id: {resultname.id}</Toast.Body>
        </Toast>
      </Col>
    </Row>
    </div>
  )
}

export default Add