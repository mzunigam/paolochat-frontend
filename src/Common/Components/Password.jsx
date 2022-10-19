import { useLayoutEffect } from 'react'


export const Password = (props) => {

  useLayoutEffect(() => {
  document.getElementById(props.name).focus()
  }, [])
  
  return (
    <div className="justify-end flex h-10 bg-opacity-10 bg-white hover:bg-opacity-20  transition-all rounded-full shadow-xl backdrop-blur-[1rem] animate__animated animate__heartBeat ">
      <input
        id={props.name}
        name={props.name}
        onChange={props.onInputChange}
        className="px-8 w-[15rem] bg-transparent text-lg placeholder-white placeholder:font-normal outline-none border-none"
        placeholder={props.placeholder}
      />
      <button className="absolute h-10 pr-2 opacity-30 hover:opacity-100 scale-[1.5] transition-all">
      <i className="fa fa-arrow-circle-right text-base "></i>
      </button>
    </div>
  );
}
