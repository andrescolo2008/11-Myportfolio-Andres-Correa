import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Myprojects } from '../projects/Myprojects'
import { MyPortfolio } from '../MyPortfolio'
import { Navbar } from './components/Navbar'

export const AppRouter = () => {


  return (
    <>
    < Navbar />
    <Routes>
    

            < Route path='home' element={< MyPortfolio />} />
            < Route path='my-projects' element={< Myprojects />} />
            < Route path='/*' element={< Navigate to='/home' />} />
            
        
</Routes>
      </>
  )
}
