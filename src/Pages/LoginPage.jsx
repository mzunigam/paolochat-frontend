import React from 'react'
import { Notifications } from '../Common/Components/Notifications'
import { Form } from './Components/Form'


export const LoginPage = () => {
  return (
    <div className='w-screen h-screen'>
        <div id="Background" className='backdrop-blur blur'></div>

        <div className='w-full h-1 justify-end flex flex-col-reverse items-end '>
        <Notifications head='WHOOPS, ERROR APPERED' tittle='Wrong password' text='It seems you digited wrongly your password, try again.'/>
        <Notifications head='EVERYTHING IS GOOD' tittle='ALL GOOD' text='Today was a good day.' icon={3}/>
        </div>

        <Form></Form>
    </div>
  )
}
