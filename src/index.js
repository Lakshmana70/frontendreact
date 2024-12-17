import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './appstore/store';
import Product from './feacture/productsss/product';
import Productdetails from './feacture/productsss/productdetails';
import Addproduct from './feacture/productsss/addproduct';
import Editproducts from './feacture/productsss/editproducts';
const router=createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element:<Product></Product>
      },
      {
        path: "/products/:id",
        element:<Productdetails></Productdetails>
      }
      ,
      {
        path: "/addproduct",
        element:<Addproduct></Addproduct>
      },
      {
        path: "/editproduct/:id",
        element:<Editproducts></Editproducts>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
