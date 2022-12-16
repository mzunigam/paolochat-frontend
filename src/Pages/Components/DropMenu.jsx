import React from 'react'

export const DropMenu = (props) => {

  return (
    <div className="w-full h-full flex justify-center items-center animate__animated animate__fadeIn animate__faster">
      <ul>
        <li className="flex items-center gap-2" onClick={props.handleMenu}>
          <button className="w-16 h-16 flex justify-center items-center"  >
            <img src="/src/assets/images/default.png" alt="" />
          </button>
          <p className="font-bold">BOTÓN 1</p>
        </li>
        <li className="flex items-center gap-2" onClick={props.handleMenu}>
          <button className="w-16 h-16 flex justify-center items-center"  >
            <img src="/src/assets/images/default.png" alt="" />
          </button>
          <p className="font-bold">BOTÓN 2</p>
        </li>
        <li className="flex items-center gap-2" onClick={props.handleMenu}>
          <button className="w-16 h-16 flex justify-center items-center"  >
            <img src="/src/assets/images/default.png" alt="" />
          </button>
          <p className="font-bold">BOTÓN 3</p>
        </li>
      </ul>
    </div>
  )
}
