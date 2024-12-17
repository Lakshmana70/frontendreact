import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useAddproductMutation } from '../../productapi/productapi'

export default function Addproduct() {
    const [addproductfn] =useAddproductMutation()
    var initialValues = {
        title : '',
        price : '',
        image : '',
        category : '',
        description : ''
    }

    var onSubmit = (values)=> { 
       console.log(values)
       addproductfn(values)
    }
  return (
    <div style={{width:'70%',marginLeft:'200px'}} className='p-3'>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {
            ()=>{
                return <div>
                    <Form>
                        <div className="form-floating mb-3 col-12">
                            <Field type="text" className="form-control" name='title' id="name" placeholder="Title" />
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="form-floating mb-3 col-12">
                            <Field type="text" className="form-control" name='price' id="price" placeholder="Price" />
                            <label htmlFor="price">Price</label>
                        </div>
                        <div className="form-floating mb-3 col-12">
                            <Field type="text" className="form-control" name='image' id="image" placeholder="Image" />
                            <label htmlFor="image">Image URL</label>
                        </div>
                        <div className="form-floating mb-3 col-12">
                            <Field type="text" className="form-control" name='category' id="category" placeholder="Category" />
                            <label htmlFor="category">Category</label>
                        </div>
                        <div className="form-floating mb-3 col-12">
                            <Field type="text" className="form-control" name='description' id="description" placeholder="Description" />
                            <label htmlFor="description">Description</label>
                        </div>
                        <button className='btn btn-secondary px-5' style={{marginLeft:'420px'}}>Submit</button>
                    </Form>
                    </div>
            }
        }
      </Formik>
    </div>


  )
}
