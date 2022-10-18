import React, { useEffect } from 'react'
import { useForm } from '../..//Hooks/useForm'

export const TextField = ({ name }) => {

  const { onInputChange, formState } = useForm();
  
  return (
    <div className="justify-end flex h-10 bg-opacity-10 bg-white hover:bg-opacity-20  transition-all rounded-full shadow-xl backdrop-blur-[1rem] ">
      <input
        name={name}
        onChange={onInputChange}
        className="px-8 w-[15rem] bg-transparent text-lg placeholder-white placeholder:font-normal outline-none border-none"
        placeholder="Enter your password"
      />
      <button className="absolute h-10 pr-2 opacity-30 hover:opacity-100 scale-[1.5] transition-all">
      <i class="fa fa-arrow-circle-right text-base "></i>
      </button>
    </div>
  );
}
