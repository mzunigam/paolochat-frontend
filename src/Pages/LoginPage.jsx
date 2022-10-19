import React from 'react'

import { Form } from './Components/Form'


export const LoginPage = () => {
  return (
    <div className='w-screen h-screen grid'>
        <div id="Background" className='backdrop-blur blur-[5px]'></div>
        <Form/>
    </div>
  )
}
