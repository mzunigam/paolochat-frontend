
import { Password } from '../../Common/Components/Password'
import '../LoginPage.css'

import { Email } from '../../Common/Components/Email'
import {Notifications} from '../../Common/Components/Notifications'
import { LoadingBar } from '../../Common/Components/LoadingBar'
import { Form_Helper } from '../Helpers/Form_Helper'
import { useState } from 'react'

export const Form = () => {

  const helper = Form_Helper();
  
  const [Done, setDone] = useState(false)

  return (
    <>
      <div className='w-full h-1 justify-end flex flex-col-reverse md:items-end items-center'>
      {
        helper.Alerts?.map((item,index) => {
          return <Notifications key={index} head={item.head} tittle={item.tittle} text={item.text} height={item.height} icon={item.icon}/>
        })
      }
      </div>

      <form id='loginForm' onSubmit={helper.validateInput} className={`${ Done  ? 'animate__animated animate__fadeOut': ''}`} >
        <div className='w-100 h-max justify-center flex tinUpIn'>
          <img
            className='rounded-full bg-white w-[10rem] h-[10rem] drop-shadow-lg border-[0.1rem] border-white hover:scale-110 transition-all'
            src='https://dlcdnrog.asus.com/rog/media/1610705538274.webp'
          />
        </div>
        <div className='w-100 h-max justify-center flex'>
          <label className='text-white font-semibold text-2xl'>
            {helper.formState.username == '' && helper.Show == true
              ? 'Welcome.'
              : helper.formState.email}
          </label>
        </div>
        <div className='flex h-max items-center justify-center gap-2'>
          {helper.Show ? (
            <Email name='email' placeholder='Here goes your email'  onInputChange={helper.validateEmail}/>
          ) : (
            !helper.ShowLoading ? (
            <Password name='password' placeholder='Enter your password' onInputChange={helper.onInputChange} />
            ) : (
            <LoadingBar setDone= {setDone}/>
            )
            )}
        </div>
      </form>
     <div></div>
    </>
  )
}
