import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Footer/Home/Home.jsx'
import About from './components/About/About.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path :'/',
    element : <Layout/>,
    children : [
      {
        path : '',
        element : <Home/>
      },
      { path : "about",
      element : <About/>
    
    }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
       <React.StrictMode>
         <BrowserRouter>
      <App />
    </BrowserRouter>
 </React.StrictMode>
)








