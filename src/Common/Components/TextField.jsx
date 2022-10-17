import React, { useEffect } from 'react'
import {useForm} from '../..//Hooks/useForm'

export const TextField = ({name}) => {

  const {onInputChange,formState} =  useForm();

  useEffect(() => {
    console.log(formState);
  }, [formState])

  return (
    <div className='justify-end flex h-10 bg-opacity-10 bg-white bg-opacity-10 hover:bg-opacity-20  transition-all rounded-full shadow-xl backdrop-blur-[1rem] '>
        <input name={name} onChange={onInputChange} className='pl-4 bg-transparent text-lg placeholder-white placeholder:font-normal outline-none border-none' placeholder='Enter your password'/>
        <button className='absolute h-10 pr-2 opacity-30 hover:opacity-100 scale-[1.5] transition-all'><i className="gg-arrow-right-o text-opacity-50 border-[0.15rem] hover:text-white hover:text-opacity-75"></i></button>
    </div>
  )
}
