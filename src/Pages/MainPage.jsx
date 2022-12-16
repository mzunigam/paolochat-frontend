
import { useState } from 'react'
import { Window } from './Components/Chat/Window'
import { Footer } from './Components/Footer'
import {Settings} from './Components/Chat/BodyWindows/Settings'
import { Welcome } from './Components/Chat/BodyWindows/Welcome'


export const MainPage = () => {

  const [minimizedWindows, setMinimizedWindows] = useState([])
  
  return (
    <>
    <div id="Background"></div>
    <div id="screen" className='w-screen h-screen'>
    {/* <LoginPage/> */}
    {/* <Window width={30} height={25} X={0} Y={0} center={false} setMinimizedWindows={setMinimizedWindows} isMaximizable={true} component={<Welcome/>} /> */}
    <Window width={40} height={40} X={0} Y={0} center={false} setMinimizedWindows={setMinimizedWindows} isMaximizable={false} component={<Settings/>} />
    {/* <Window width={'max-content'} height={'max-content'} X={1.01} Y={50} setMinimizedWindows={setMinimizedWindows} body={<Settings/>} /> */}
    </div>
    <Footer minimizedWindows={minimizedWindows} setMinimizedWindows={setMinimizedWindows} />
    </>
  )
}
