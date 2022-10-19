import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../Pages/LoginPage'
import { MainPage } from '../Pages/MainPage'

export const Router = () => {
  return (
    <Routes>
        <Route path='login' element={<LoginPage/>} />
        <Route path='/' element={<MainPage/>} />
    </Routes>
  )
}
