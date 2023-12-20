import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'

import { AppRouter} from './router/AppRouter'
import MyPortfolio from './MyPortfolio.jsx'
import { App } from '../App.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
         
         <App/> 
    </BrowserRouter>
          
   
  </React.StrictMode>,
)


