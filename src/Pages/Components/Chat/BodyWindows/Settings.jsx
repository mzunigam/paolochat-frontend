
import React from 'react'

export const Settings = () => {
  return (
    <>
      <div className='flex justify-center gap-4 w-full'>
        <div className='flex items-center'>
          Apariencia :
        </div>
        <div className='flex w-80 justify-around' >
          <button className='hint--bottom z-50 transition-all hover:drop-shadow-[0_0px_10px_rgba(22,22,22,1)]' aria-label='Modo DARK'>
            <img className='h-full max-h-[5rem] rounded-xl' src="/src/assets/images/dark.png" alt="" />
          </button>
          <button className='hint--bottom z-50 transition-all hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.11)]' aria-label='Modo LIGHT'>
            <img className='h-full max-h-[5rem] rounded-xl' src="/src/assets/images/light.png" alt="" />
          </button>
        </div>
      </div>
    </>
  )
}
