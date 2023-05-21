import React, { useEffect, useState } from 'react'
import './Reconcilate.css'
import axios from 'axios'
const Reconcilate = () => {
  const submitHandler=()=>{
    const[records,setRecords]=useState([])
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res=>{setRecords(res.data)})
      .catch(err=>console.log(err))
    },[])
} 
  return (
    <div>
      <button type='submit' onClick={submitHandler} className='btn btn-success w-100s' style={{marginTop:"20px", alignItems:"center", alignContent:"center", marginLeft:"15px"}}>Reconcilate</button>
      
    </div>
  )
}

export default Reconcilate
