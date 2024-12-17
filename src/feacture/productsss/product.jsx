import React from 'react'
import { useDeleteproductMutation, useGetproductapiQuery } from '../../productapi/productapi'
import { Link, useNavigate } from 'react-router-dom'

export default function Product() {
      var {isloading,data}= useGetproductapiQuery()
      console.log(data)
       var [deleteproductfn] = useDeleteproductMutation()
      function deletefn(id){
        console.log(id)
         deleteproductfn(id)
      }
      
  return (
    <div>
      <Link to='/addproduct'> <h1>Add products</h1></Link>
      <div className='d-flex flex-wrap'>
      {
        data?.map((a,i)=>{
         return(
            <div style={{width:'200px',border:"solid 2px red"}}>
              <img src={a.image} style={{width:'100px',height:'200px'}} />
               <Link to={`/products/${i}`}> <h1>{a.title.slice(0,10)}</h1></Link>
               <button onClick={()=>{deletefn(i)}}>Delete</button>
               <Link to={`/editproduct/${i}`}><button >Edit</button></Link>
            </div>
         )
        })
      }
       
    </div>
    </div>
  )
}
