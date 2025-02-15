import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import Premium from './components/Premium';
import About from './components/About';
import Login from './components/Login';
import Navi from './components/nav';
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
    <div className='md:mt-52 mt-28 duration-1000'>
      <Navi/>
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App
