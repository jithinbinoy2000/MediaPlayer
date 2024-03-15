import React, { useEffect, useState } from "react";
import { Modal, Button, Form, FloatingLabel, Col, Row } from "react-bootstrap";
import Collapse from 'react-bootstrap/Collapse';
import {
  addCategoryAPI,
  getAllCategoryAPI,
  getVideoAPI,
  removeCategoryAPI,
  updateCategoryAPI,
} from "../Services/allAPI";
import VideoCard from "./VideoCard"

function Catergory(dropResponse) {
  // to hide and visible modal
  const [show, setShow] = useState(false);
  //add category & name
  const [categoryName, setcategoryName] = useState("");
  //update count value while droped
  const [updateValue,setupdateValue]=useState(false)
  //get all category
  const [allCategories, setallCategories] = useState([]);

  // functions for modals
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //state for collapse
  const [open, setOpen] = useState(false);
  //useeffect to call getallcategory while render the component
  useEffect(() => {
    getallCategory();
    setupdateValue(false)
  }, [getAllCategoryAPI,updateValue,dropResponse]);
  // api call for get all category
  const getallCategory = async () => {
    //store multiple data on array to data
    const { data } = await getAllCategoryAPI();
    setallCategories(data);
    
    
  };

  //api call to add a category name
  // set a empty array name categoryVideos to add items in a spesific array
  const handleAdd = async () => {
    if (categoryName) {
      const result = await addCategoryAPI({ categoryName, categoryVideos: [] });
      if (result.status >= 200 && result.status < 300) {
        handleClose();
        getallCategory();
      } else {
        alert(result.statusText);
        handleClose();
        setcategoryName("");
      }
    } else {
      <p className="text-danger"> please fill the form completely</p>;
    }
    c;
  };
  //delete a categot
  const removeCategoryItem = async (id) => {
    await removeCategoryAPI(id);
    getallCategory();
  };
  //btn hover
  const [activeId, setActiveId] = useState("");
  const handleMousehover = (id) => setActiveId(id);
  const handleMouseOut = () => setActiveId("");
   //drag over event && get the video id from event datatransfer
   const dragOver=(e)=>{
    //prevent to cancel / reload while on dragover
  e.preventDefault(); 
  }
  //get drag category id  and event
  const videoDroped = async (e, CategoryID) => {
    // Get video id from dataTransfer
    
    let VideoID = e.dataTransfer.getData("VideoID");
    
    // API call to fetch data of VideoID
    const { data } = await getVideoAPI(VideoID);

    //get category 
    const selectedCategory = allCategories.find(item=>item.id===CategoryID);
    
    // push data to seleted category
    selectedCategory.categoryVideos.push(data);
    
    //api call to store selectedCategory datas
     await updateCategoryAPI(CategoryID,selectedCategory);
    //get all categories for auto reload
    getAllCategoryAPI();
    setupdateValue(true);
}
// drag to delete
const videoDragStarted=(e,videoId,CategoryId)=>{
  //to pass mutiple data convert into object
 let dataShare ={videoId,CategoryId}
 // data transfer  --- convert data into string 
 e.dataTransfer.setData("data",JSON.stringify(dataShare))
}


  return (
    <div>
      <Button variant="dark" onClick={handleShow}>
        category
      </Button>
  
        {allCategories?.length > 0 ? (
          allCategories.map((catergory) => (
            <div className="border rounded p-3 mt-2 cat_hover" droppable="true" key={catergory.id} onDrop={e=>videoDroped(e,catergory?.id)}
            onDragOver={e=>dragOver(e)}
          //  collapse function
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}


            >
              
              <div className="d-flex justify-content-between align-items-center">
              <h6>{catergory?.categoryName}<span className="ms-2 text-warning">({catergory?.categoryVideos?.length || "no Videos"})</span></h6>
                <div onClick={() => removeCategoryItem(catergory?.id)}>
                  <span className="btn">
                    <i
                      className={`fa-solid fa-trash text-warni ${
                        activeId === catergory.id ? "text-warning" : `text-danger`
                      }`}
                      onMouseOver={() => handleMousehover(catergory.id)}
                      onMouseOut={handleMouseOut}
                    ></i>
                  </span>
                </div>
                
              </div>
   <Collapse in={open}>
            {/* display category video */}
            <Row>
              {
                catergory?.categoryVideos?.length>0?catergory.categoryVideos.map(card=>(
                  <Col draggable onDragStart={e=>videoDragStarted(e,card.id,catergory.id)} sm={12} className="mt-2 ">
                  <VideoCard video={card} insideCategory={true}></VideoCard>
                 </Col>
                )):null

              }
            </Row>
            </Collapse>
          </div>
        ))
      ) : (
        <p> nothing to display</p>
      )}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="New Category Name"
            className="mb-3"
          >
            <Form.Control
              type="Text"
              placeholder="New Category Name"
              onChange={(event) => setcategoryName(event.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Catergory;
