import axios from "axios";
//methods - httpmethod
// url - url
//request datas -requestbody
// asyncronous function
export const commonAPI=async(htttpMehod,url,requestBody)=>{
// config a setup for axios
let reqConfig={
    method:htttpMehod,
    url,
    //says it is json application
    headers:{
        "Content-Type":"application/json"
    },
    // request body

    data:requestBody
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
// return all to call
return await axios(reqConfig).then((result)=>{
    return result
}).catch((error)=>{
    return error
})
}
