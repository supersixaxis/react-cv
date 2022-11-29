import React from 'react'
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import Knowledges from '../pages/Knowledges';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

export const RouteURl = [
  {
     path: "/",
     element: <Layout/>,
     children: [
      {
        index : true,
        element: <Home />,

      },
      {
        path:"competences",
        element: <Knowledges />,
      },
      {
        path:"portfolio",
        element: <Portfolio/>

      },
      {
        path:"contact",
        element: <Contact />,
      },
      {
        path:"*",
        element: <NotFound />,
      },

     ]
 

}
]




function Layout() {
  return (
    <>
   
    <main className=''>
    <Outlet />
    </main>

    </>
  )
}