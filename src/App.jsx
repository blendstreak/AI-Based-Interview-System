import { useState } from 'react';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Premium from './components/Premium';
import About from './components/About';
import Login from './components/Login';

const router = createBrowserRouter(
 [
     {
        path: "/",
        element: <Home/>
     },

     {

        path: "/Premium",
        element: <Premium/>,

     },

     {
        path:"/About",
        element: <About/>,
     },

     {
        path:"/Login",
        element: <Login/>,
     },
 ]
);

function App() {

  return (
    <> 
      <RouterProvider router = {router}/>
    </>
  );
}

export default App
