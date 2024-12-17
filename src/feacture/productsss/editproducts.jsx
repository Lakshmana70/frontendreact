import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEditproductMutation, useGetproductdetailsQuery } from '../../productapi/productapi'

export default function Editproducts() {
    const [editfn]=useEditproductMutation()
    var {id}=useParams()

        const {isloading,data} =useGetproductdetailsQuery(id)
      
    
     

      var initialValues = {
        title :data?.title,
        image :data?.image,
        category :data?.category,
        description :data?.description
    }
      var onSubmit = (values)=> { 
         console.log(values)
         editfn({values,id})
      }

  return (
    <div style={{width:'70%',marginLeft:'200pdata'}} className='p-3'>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {
            ()=>{
                return <div>
                    <Form>
                        <div className="form-floating mb-3 col-12">
                            <Field type="tedatat" className="form-control" name='title' id="name" placeholder="Title" />
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="form-floating mb-3 col-12">
                            <Field type="tedatat" className="form-control" name='price' id="price" placeholder="Price" />
                            <label htmlFor="price">Price</label>
                        </div>
                        <div className="form-floating mb-3 col-12">
                            <Field type="tedatat" className="form-control" name='image' id="image" placeholder="Image" />
                            <label htmlFor="image">Image URL</label>
                        </div>
                        <div className="form-floating mb-3 col-12">
                            <Field type="tedatat" className="form-control" name='category' id="category" placeholder="Category" />
                            <label htmlFor="category">Category</label>
                        </div>
                        <div className="form-floating mb-3 col-12">
                            <Field type="tedatat" className="form-control" name='description' id="description" placeholder="Description" />
                            <label htmlFor="description">Description</label>
                        </div>
                        <button className='btn btn-secondary pdata-5' style={{marginLeft:'420pdata'}}>Submit</button>
                    </Form>
                    </div>
            }
        }
      </Formik>
    </div>
  )
}
