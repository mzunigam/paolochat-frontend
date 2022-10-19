import React, {  useLayoutEffect, useState } from 'react'

export const LoadingBar = ({setDone}) => {

    const loadingBar = document.getElementById('loadingBar') ? document.getElementById('loadingBar') : null
    const ShadowBar = document.getElementById('shadowBar') ? document.getElementById('shadowBar') : null
    const [Loading, setLoading] = useState(0)

    useLayoutEffect(() => {
        const time = setInterval(() => {
            if (Loading < 100) {
                setLoading(Loading + 1)
                if (loadingBar && ShadowBar ) {
                    loadingBar.style.width = `${Loading}%`
                    ShadowBar.style.width = `${Loading}%`
                }
            } else {
                clearInterval(time)
                setDone(true)
            }
        }, 100);

        return () => {
            clearInterval(time)
        }
        
    }, [Loading]);

  return (
    <div className='h-full'>
        <div className="w-full h-1 justify-end flex items-center flex-col " >
            <label className='text-xl font-extralight animate__animated animate__fadeInUpBig'>Loading...</label>
            <div className="bg-gray-300 w-3/4 md:w-[30rem] h-1  animate__animated animate__bounceInUp ">
                <div id="loadingBar" className={`w-0 h-full bg-gradient-to-r from-red-700 to-purple-700 rounded-full`} ></div>
                <div id="shadowBar" className=' w-0 shadowBar bottom-[0.33rem] relative'></div>
            </div>
        </div>
    </div>
  )
}
