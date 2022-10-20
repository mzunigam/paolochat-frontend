import React, { useEffect,  useState } from 'react'
import { FooterDesktop } from './FooterDesktop'
import { FooterMobile } from './FooterMobile'

export const Footer = ({minimizedWindows,setMinimizedWindows}) => {

  const [Mobile, setMobile] = useState(false)

  const isMobile = (e) => {

    const width = window.innerWidth;

    if (width < 500 && !Mobile) {
        setMobile(true)
    }
    else {
        setMobile(false)
    }

  }

  useEffect(() => {
    window.addEventListener('resize', isMobile);
    if (window.innerWidth < 500) {
        setMobile(true)
    }
   },[0] );

  if(Mobile){
    return <>
    <FooterMobile/>
        </>
  }
  else{
  return (
    <FooterDesktop minimizedWindows={minimizedWindows} setMinimizedWindows={setMinimizedWindows} />
  )
  }
}
