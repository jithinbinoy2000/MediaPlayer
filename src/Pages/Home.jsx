import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Catergory from '../Components/Catergory'
const watchHistory={textDecoration:'none',fontWeight:'400',color:"#ffff",fontSize:'25px',paddingRight:'15%' }


function Home() {
  //lift state to pass dependencies for useEffect while Video Uploaded
  const [uploadVideoRespone,setuploadVideoResponse]=useState({})
  const [dropResponse,setDropResponse] = useState({})
  return (
    <div style={{width:'100%'}}>
    <div className=" mt-2 mb-2 d-flex justify-content-between "style={{padding:'0px',marginLeft:'2vw',width:"100%"}}>
      <div className="add-videos">
   {/* pass props to child components */}
        <Add setuploadVideoResponse={setuploadVideoResponse}/>
      </div>
      <Link to={'/watchhistory'} style={watchHistory}>
      <span className='hv'>Watch History</span>&nbsp;</Link>
    </div>
    <div className="container-fulid w-100 mt-1 mb-5 row">
      <div className="all-videos col-lg-9">
        <h4>Videos</h4>
        {/* pass props to child components */}
        <View uploadVideoRespone={uploadVideoRespone} setDropResponse={setDropResponse} />

      </div>
      <div className="category col-lg-3">
        <Catergory dropResponse={dropResponse}></Catergory>
      </div>
    </div>
    </div>
  ) 
      
  
}

export default Home