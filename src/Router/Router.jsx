import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../Pages/LoginPage'

export const Router = () => {
  return (
    <Routes>
        <Route path='login' element={<LoginPage/>} />
    </Routes>
  )
}
