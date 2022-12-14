import React, { useEffect, useState } from 'react'
import {FcHighPriority,FcMediumPriority,FcCommandLine,FcOk} from 'react-icons/fc'

export const Notifications = ({head = "",tittle="",text="",height=8 , icon = 0}) => {

  const [Notification, setNotification] = useState(true);
  const [Show, setShow] = useState(true);

  useEffect(() => {
   const time =  setTimeout(() => {
      setNotification(false);
      setTimeout(() => {
        setShow(false);
      }, 300);
    }, 4000);
    return () => {
      clearTimeout(time);
    }
  }, []);

  if(Show){
  return (
    <>
      <div className={`bg-white p-2  bg-opacity-25 w-[27.5rem] md:w-[22.5rem] mr-0 md:mr-4 mt-4 rounded-xl backdrop-blur shadow border border-slate-300 border-opacity-30 text-sm animate__animated 
        ${Notification ? 'animate__fadeInDown' : 'animate__fadeOutUpBig animate__slow'} z-[999] `}>
          
        <div className="w-full flex items-center">
          {icon == 0 ? (
            <FcHighPriority size={'16px'} />
          ) : icon == 1 ? (
            <FcMediumPriority size={'16px'} />
          ) : icon == 2 ? (
            <FcCommandLine size={'16px'} />
          ) : (
            <FcOk size={'16px'} />
          )}
          <p className="text-black text-opacity-50 ml-2 font-normal">{head}</p>
          <div className=" pl-[22rem] md:pl-[17rem] absolute text-gray-900 font-normal text-xs">
            JUST NOW
          </div>
        </div>
        <div className="text-black opacity-75 p-2  font-bold">{tittle}</div>
        <div className="text-base md:text-xs pl-2 text-gray-800 opacity-80">{text}</div>
      </div>
    </>
  );
  }else{
    return null;
  }
}
