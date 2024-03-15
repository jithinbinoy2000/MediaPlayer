import { commonAPI } from "./commonAPI"
import serverURL from "./serverURL"

//API for upload a video
//argument video
 export const  uploadNewVideoAPI=async(video)=>{
    return await commonAPI("POST",`${serverURL}/allVideos`,video)
}

//API for get all video
// arguments none
 export const viewAllvideosAPI=async()=>{
   return await commonAPI("GET",`${serverURL}/allVideos`,'')
 }
 
 //get singlevideo 
 // arguments id to identify the video
  export const getVideoAPI = async(id)=>{
   return await commonAPI("GET",`${serverURL}/allVideos/${id}`,"")
 }
 
 //insert video to history
 // arguments video  to history url 
 export  const addVideoHistoryAPI =async (video)=>{
    return await commonAPI("POST",`${serverURL}/watchHistory`,video)
  }

// get watchhistory 
// arguments none

export const getWatchHistory=async()=>{
  return  await commonAPI("GET",`${serverURL}/watchHistory`,'')
}

 //delete history 
 // arguments id 
 //while delete body must be empty object
  export const removeHistoryAPI = async(id)=>{
   return await commonAPI("DELETE",`${serverURL}/watchHistory/${id}`,{})

  }
  //delete video
  //argument id 
  // while delete body must be empty object
  export const removeVideoAPI= async(id)=>{
   return await commonAPI("DELETE",`${serverURL}/allVideos/${id}`,{})
   }

   //add category
   //argument category that need to be added
   export const addCategoryAPI =async(category)=>{
    return await commonAPI("POST",`${serverURL}/categories`,category)
   }
   
   //get all category
   //arguments none
    export const getAllCategoryAPI =async()=>{
        return await commonAPI("GET",`${serverURL}/categories`,"")
    }

    //remove category
    export const removeCategoryAPI= async(id)=>{
     return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
     }
     // update Category
     //insert new items 
    export  const updateCategoryAPI =async (id,categoryDetails)=>{
      return await commonAPI("PUT",`${serverURL}/categories/${id}`,categoryDetails)
      }
      
