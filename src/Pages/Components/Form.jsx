import React from 'react'
import { TextField } from '../../Common/Components/TextField'
import '../LoginPage.css'

export const Form = () => {
  return (
    <form id="loginForm">
      <div className='w-100 h-max justify-center flex tinUpIn'>
        <img className='rounded-full bg-white w-[10rem] drop-shadow-lg border border-[0.3rem] border-white hover:scale-110 transition-all' 
        src="https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-2.jpg" alt="" />
      </div>
      <div className='w-100 h-max justify-center flex'>
        <label className='text-white font-semibold text-2xl '>Username</label>
      </div>
      <div className='flex h-max items-center justify-center gap-2'>
      <TextField name={'username'}/>
      <span className='border-[0.15rem] border-white w-8 h-8 rounded-full text-center font-semibold text-xl hover:scale-125 transition-all hover:bg-slate-100 hover:bg-opacity-30 hint--right' aria-label='Forgot your password?'>?</span>
      </div>

    </form>
  )
}
