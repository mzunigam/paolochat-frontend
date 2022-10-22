import React from 'react'

export const WindowHeader = ({handleClose,handleMaximize,handleMinimize,isCloseable,isMaximizable,isMinimizable}) => {
  return (
    <div className='bg-slate-900 border-2 border-b-0 border-black border-opacity-10 rounded-t-xl px-2 py-1 flex window-header'>
        <div className='flex gap-2 h-full'>
          <button disabled={!isCloseable} className='bg-red-400 hover:bg-red-600 w-[1rem] h-[1rem] flex rounded-full justify-center items-center pb-1 border border-black border-opacity-50' onClick={ () => handleClose(v => !v)} ></button>
          <button disabled={!isMinimizable} className='bg-yellow-400 w-[1rem] hover:bg-yellow-500 h-[1rem] flex rounded-full justify-center items-center pb-1 border border-black border-opacity-50' onClick={ () => handleMinimize(v => !v)}></button>
          <button disabled={!isMaximizable} className='bg-green-400 w-[1rem] hover:bg-green-600 h-[1rem] flex rounded-full justify-center items-center pb-1 border border-black border-opacity-50' onClick={() => handleMaximize(v => !v)}></button>
        </div>
        <div className='h-full w-full flex justify-center'>
          {/* <label className='text-xl font-semibold'>Hello, World! <i className='fa fa-globe'></i></label> */}
        </div>
    </div>
  )
}
