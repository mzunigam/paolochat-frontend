
import React, { useEffect } from 'react'
import { Footer_Helper } from '../Helpers/Footer_Helper';


export const FooterDesktop = ({minimizedWindows,setMinimizedWindows=[]}) => {
  const {createThumbNail} =  Footer_Helper();

  useEffect(() => {
    minimizedWindows.forEach((window,index) => {
      createThumbNail(window,index)
    }
    )
    console.log('minimizedWindows',minimizedWindows)
  }, [minimizedWindows]);

  return (
    <footer className='w-full h-20  flex justify-center items-center bottom-0 absolute '>
    <div className='bg-slate-500 w-[90%] h-full mb-8 rounded-3xl bg-opacity-20 border border-slate-500 border-opacity-30 shadow-2xl flex items-center'>
      <div className='flex px-4 gap-8 h-16 md:h-20 flex-wrap'>
        <span className='hover:scale-[1.5] hover:-translate-y-4 transition-all h-max'>
          <img src="/src/assets/images/default.png" className='w-16 h-16 md:w-20 md:h-20'  />
        </span>
        <span className='hover:scale-[1.5] hover:-translate-y-4 transition-all h-max'>
          <img src="/src/assets/images/default.png" className='w-16 h-16 md:w-20 md:h-20'  />
        </span>
        <span className='hover:scale-[1.5] hover:-translate-y-4 transition-all h-max'>
          <img src="/src/assets/images/default.png" className='w-16 h-16 md:w-20 md:h-20'  />
        </span>
        {

          minimizedWindows?.map((window, index) => {
            return (
              <span key={index} id={'window_'+index} 
              onClick={(e)=>{
                let newArray = minimizedWindows.pop();

                if(newArray.length == null){
                  newArray = [];
                }
                
                setMinimizedWindows(newArray);
              }}
              className='hover:scale-[1.5] hover:-translate-y-4 transition-all h-[5rem] flex items-center'>
                
              </span>
            )
          })

        }
      </div>
    </div>        
  </footer>
  )
}
