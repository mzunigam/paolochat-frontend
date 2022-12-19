import React from 'react'

export const WindowHeader = ({handleClose,handleMaximize,handleMinimize,isCloseable,isMaximizable,isMinimizable,title = 'AJUSTES'}) => {
  return (
    <div className='border border-white/25 border-b-black/70 rounded-t-xl px-4 py-4 flex window-header items-center' style={{background: '#2D2733'}}>
        <div className='flex gap-2 h-full'>
          <button disabled={!isCloseable} className='bg-red-400 hover:bg-red-600 w-[1rem] h-[1rem] flex rounded-full justify-center items-center pb-1 border border-black border-opacity-10' onClick={ () => handleClose(v => !v)} ></button>
          <button disabled={!isMinimizable} className='bg-yellow-400 w-[1rem] hover:bg-yellow-500 h-[1rem] flex rounded-full justify-center items-center pb-1 border border-black border-opacity-10' onClick={ () => handleMinimize(v => !v)}></button>
          <button disabled={!isMaximizable} className='bg-green-400 w-[1rem] hover:bg-green-600 h-[1rem] flex rounded-full justify-center items-center pb-1 border border-black border-opacity-10' onClick={() => handleMaximize(v => !v)}></button>
        </div>
        <div className='h-full w-full flex justify-center gap-2 '>
           <p className='text-lg font-semibold'>{title.toUpperCase()}</p>
           <img src='https://cdn.iconscout.com/icon/free/png-256/apple-settings-1-493162.png' className='h-6'/>
        </div>
    </div>
  )
}
