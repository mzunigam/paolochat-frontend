
import { useState } from 'react'
import { Window } from './Components/Chat/Window'
import { Footer } from './Components/Footer'
import { LoginPage } from './LoginPage'


export const MainPage = () => {

  const [minimizedWindows, setMinimizedWindows] = useState([])
  
  return (
    <>
    <div id="Background"></div>
    <div className='w-screen h-screen'>
    {/* <LoginPage/> */}
    <Window width={'max-content'} height={'max-content'} X={1.01} Y={50} setMinimizedWindows={setMinimizedWindows} />
    </div>
    <Footer minimizedWindows={minimizedWindows} setMinimizedWindows={setMinimizedWindows} />
    </>
  )
}
