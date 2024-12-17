// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4900/product' }),
  endpoints: (builder) => ({
    getproductapi: builder.query({
      query: () => `/`,
    }), 
    getproductdetails: builder.query({
              query: (id) => `/${id}`,
            }),
            deleteproduct: builder.mutation({
              query(id) {
                return {
                  url: `/${id}`,
                  method: 'DELETE',
                }
              },
            }),
            addproduct: builder.mutation({
              query(products) {
                return {
                  url: `/`,
                  method: 'POST',
                  body:products
                }
              },
            }),
            editproduct: builder.mutation({
              query({values,id}) {
                return {
                  url: `/${id}`,
                  method: 'PUT',
                  body: values
                }
              },
            })
  })
  
})

export const {
  useGetproductapiQuery,
  useGetproductdetailsQuery
  ,useDeleteproductMutation
  ,useAddproductMutation
  ,useEditproductMutation
} = productsApi