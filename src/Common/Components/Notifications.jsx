import React, { useEffect, useState } from 'react'
import {FcHighPriority,FcMediumPriority,FcCommandLine,FcOk} from 'react-icons/fc'

export const Notifications = ({head = "",tittle="",text="",height=8 , icon = 0}) => {

  const [Notification, setNotification] = useState(true);

  useEffect(() => {
   const time =  setTimeout(() => {
      setNotification(false);
    }, 4000);
    return () => {
      clearTimeout(time);
    }
  }, []);

  return (
    <>
      <div className={`bg-white p-2  bg-opacity-25 w-[22.5rem] mr-4 mt-4 rounded-xl backdrop-blur shadow border border-gray-300 border-opacity-30 text-sm animate__animated 
        ${Notification ? 'animate__fadeInDown' : 'animate__fadeOutUpBig animate__slow'} `}>
          
        <div className="w-full flex items-center">
          {icon == 0 ? (
            <FcHighPriority size="1.25rem" />
          ) : icon == 1 ? (
            <FcMediumPriority size="1.25rem" />
          ) : icon == 2 ? (
            <FcCommandLine size="1.25rem" />
          ) : (
            <FcOk size="1.25rem" />
          )}
          <p className="text-black text-opacity-50 ml-2 font-normal">{head}</p>
          <div className="pl-[17rem] absolute text-gray-900 font-normal text-xs">
            JUST NOW
          </div>
        </div>
        <div className="text-black opacity-75 p-2  font-bold">{tittle}</div>
        <div className="text-xs pr- 2 text-gray-800 opacity-80">{text}</div>
      </div>
    </>
  );
}
