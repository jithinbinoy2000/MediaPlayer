import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryAPI, removeVideoAPI } from '../Services/allAPI';


function VideoCard({video,setdeleteVideoResponse,insideCategory}) {
  
  //modal state
  const [show, setShow] = useState(false);
  // mouse hover state
  const [active,setActive]=useState(false)
  //function for mousehover
  const handleMousehover=()=>(setActive(true))
  const handleMouseOut=()=>(setActive(false))
  // function for video playing modal 
  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
   // generate data for history while modal is showned
    const {caption,link}=video
    //generate data and time by creating new object
    let today =new Date()
    let timestamp = new Intl.DateTimeFormat('en-US',{year:"2-digit",month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    let videoHistory = {caption,link,timestamp}
    // api call for video history 
    await addVideoHistoryAPI (videoHistory)
    
  }
  //delete video
  const removeVideo =async(id)=>{
removeVideoAPI(id);
setdeleteVideoResponse(true);
  }
const dragstarted=(e,id)=>{
  //save the id of video 
  e.dataTransfer.setData("VideoId",id)
}

  return (
    <>
  <div className='ms-2'>
    {/* dragg event for add to catergory  */}
    {/* arguments event & video details in {video} */}
       <Card className='mb-3 'style={{height:'15rem', width:'12rem'}} draggable onDragStart={e=>dragstarted(e,video?.id)}>
        {/* image  */}
        <Card.Img onClick={handleShow} variant="top" src={video?.url} style={{height:'auto', borderRadius:'10px',padding:'2px,2px'}} className='img-fluid  '/>
        <Card.Body>
          <Card.Title style={{fontSize:'15px'}}>{video.caption}</Card.Title>
          {/* delete button */}
       {insideCategory?null: <div className="d-flex justify-content-end align-items-end text-warning" style={{ width: '100%' }} onClick={() => removeVideo(video.id)}>
  <span className="btn">
    <i className={`fa-solid fa-trash  delete ${active ? 'text-warning' : 'text-danger'}`} onMouseOver={handleMousehover} onMouseOut={handleMouseOut}></i>
  </span>
</div>}

        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:'10px'}}>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe className='w-100' width="640" height="360" src={`${video.link}autoplay=1`} title={video?.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
  </div>
    </>
  )
}

export default VideoCard