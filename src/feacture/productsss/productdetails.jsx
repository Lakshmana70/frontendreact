import React from 'react'
import { useGetproductdetailsQuery } from '../../productapi/productapi'
import { useParams } from 'react-router-dom'

export default function Productdetails() {
    var {id}=useParams()
    console.log(id)
   var {isloaing,data} =useGetproductdetailsQuery(id)
   console.log(data)
  return (
    
    <div  style={{gap:'50px',display:'flex'}}>
    <img src={data?.image} style={{width:'500px',height:'500px', borderRadius:'30px',border:'2px solid red'}} />
    <div style={{marginTop:'50px'}}>
      <h1>Name:{data?.title.slice(0,10)}</h1>
      <h1>Price:{data?.price}Rs</h1>
      <h1>Category: {data?.category}</h1>
      <h1>Rating:{data?.rating.rate}</h1>
    </div>
</div>
  )
}
