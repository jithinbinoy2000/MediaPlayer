import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from './VideoCard';
import { useEffect, useState } from 'react';
import { getAllCategoryAPI, updateCategoryAPI, viewAllvideosAPI } from '../Services/allAPI';

function View({uploadVideoRespone,setDropResponse}) {
  const [allVideos, setAllVideos] = useState([]);
  //update video card while deleted
  const [deleteVideoResponse,setdeleteVideoResponse]=useState(false)

  useEffect(() => {
    getAllUploadedVideos()
    //set defult or wise it will set true while delete
    setdeleteVideoResponse(false)
  }, [uploadVideoRespone,deleteVideoResponse]);

  const getAllUploadedVideos = async () => {
    try {
      const result = await viewAllvideosAPI();
      if (result.status === 200) {
        setAllVideos(result.data);
      } else {
        setAllVideos([]);

        
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
      setAllVideos([]);
    }
  }
  // drag over
  const dragOver =(e)=>{
    e.preventDefault();

  }
  //drag droped
  const videoDrop=async(e)=>{
    const {videoId,CategoryId} = JSON.parse(e.dataTransfer.getData("data"));
    const {data}= await getAllCategoryAPI ()
    const selectedCategory = data.find(item=>item.id==CategoryId)
    let result = selectedCategory.categoryVideos.filter(video=>video.id!==videoId)
    // collect arguments for update api call
    let {id,categoryName}=selectedCategory
    //argumets for api call
    let newCategory={id,categoryName,categoryVideos:result}
    // api call 
   const res= await updateCategoryAPI (CategoryId,newCategory);
   setDropResponse(res);
  
  }

  return (
    <>
      {allVideos.length > 0 ? (
        <Row droppable='true' onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e)} >
          {allVideos.map((video) => (
            <Col sm={12} md={6} lg={3} key={video.id}>
              <VideoCard  setdeleteVideoResponse={setdeleteVideoResponse} video={video} />
            </Col>
          ))}
        </Row>
      ) : (
        <p className='text-warning'>No videos uploaded</p>
      )}
    </>
  );
}

export default View;
