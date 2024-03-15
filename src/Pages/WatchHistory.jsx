import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { getWatchHistory, removeHistoryAPI } from '../Services/allAPI';


function WatchHistory() {
  const [history,setHistory]=useState([])
useEffect(()=>{
getAllWatchHistory();
},[])
  const getAllWatchHistory =async()=>{
    
    try{
      const result = await getWatchHistory();
      if(result.status===200){
setHistory(result.data)
      }
      else{
        setHistory([])
      }
    }
    catch(error){
      console.log(error);
    }
  }
  const removeHistory = async(id)=>{
   await removeHistoryAPI(id);
    getAllWatchHistory();
  }
    return (
    <>
    <div className="container d-flex justify-content-between p-0 mt-3" style={{marginLeft:'0px'}}>
      <div><h3>Watch History</h3></div>
      <Link to={'/home'} style={{textDecoration:'none',color:"#ffff"}}><span className='hv'>
        Back To Home</span></Link>
    </div>
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>url</th>
          <th>time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          history.length>0?(
            history.sort((a,b)=>new Date(b.timestamp)- new Date(a.timestamp)).
            map((historyitems)=>(
              <tr key={historyitems.id}>
              <td>{historyitems.caption}</td>
              <td><Link to={'https://youtu.be/vXIBQZJoPqA'}>{historyitems.link}</Link></td>
              <td>{historyitems.timestamp}</td>
              <td ><Button className='btn btn-danger' onClick={()=>removeHistory(historyitems.id)}><i className="fa-solid fa-trash"></i></Button></td>
            </tr>
            ))
          )
        :(
          <h5 className='fw-bolder mt-2 '>Your Watch History Is Empty</h5>
        )
        }
      
        
      </tbody>
    </Table>
    </>
  )
}

export default WatchHistory