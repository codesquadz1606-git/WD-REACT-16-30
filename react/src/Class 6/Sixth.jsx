import React from 'react'
import {createBrowserRouter,  RouterProvider } from 'react-router-dom'
import About from './elements/About'
import Services from './elements/Services'
import Contact from './elements/Contact'
import PageNotFound from './elements/PageNotFound'
import Java from './elements/Children/Java'
import Python from './elements/Children/Python'
import Mern from './elements/Children/Mern'
import Ds from './elements/Children/Ds'
import Navbar from './elements/Navbar'
const Sixth = () => {
    const routes=createBrowserRouter([
        {
            path:"/",
            element:<>
            <Navbar/>
            <About/>
            </>
        },
        {
            path:"/services",
            element:<>
            <Navbar/>
            <Services/>
            </>,
            children:[
                {
                    path:"java",
                    element:<Java/>
                },
                {
                    path:"python",
                    element:<Python/>
                },
                {
                    path:"mern",
                    element:<Mern/>
                },
                {
                    path:"ds",
                    element:<Ds/>
                }
            ]
        },
        {
            path:"/contact",
            element:<>
            <Navbar/>
            <Contact/>
            </>
        },
        {
            path :"*",
            element:<PageNotFound/>
        }
    ]);
  return (
    <div>
        <RouterProvider router={routes}/>
    </div>
  )
}

export default Sixth;
