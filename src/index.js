import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cards from './componnets/cards/Cards';
import CarDetail from './componnets/carDetail/CarDetail';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Cards />
      },
      {
        path:'page2',
        element:<Cards index={1}/>
      },
      {
        path:'page3',
        element:<Cards index={2}/>
      },
      {
        path:'page4',
        element:<Cards index={3}/>
      },
      {
        path:'page5',
        element:<Cards index={4}/>
      },
      {
        path:'page6',
        element:<Cards index={5}/>
      },
      {
        path:'page7',
        element:<Cards index={6}/>
      },
      {
        path:'page8',
        element:<Cards index={7}/>
      },
      {
        path:'page9',
        element:<Cards index={8}/>
      },
      {
        path:'page10',
        element:<Cards index={9}/>
      },
      {
        path:'car_detail',
        element:<CarDetail/>
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
