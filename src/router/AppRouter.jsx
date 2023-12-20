import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Myprojects } from '../projects/Myprojects'
import { MyPortfolio } from '../MyPortfolio'

export const AppRouter = () => {


  return (
    <Routes>
    

            < Route path='home' element={< MyPortfolio />} />
            < Route path='my-projects' element={< Myprojects />} />
            < Route path='/*' element={< Navigate to='/home' />} />
            
        
</Routes>
  )
}

