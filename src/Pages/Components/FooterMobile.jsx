import { useState } from "react"
import { DropMenu } from "./DropMenu"


export const FooterMobile = () => {

  const [Menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!Menu)
  }

  return (
    <footer className="w-full h-max bg-slate-400 bg-opacity-20 border-t-2 border-white border-opacity-10 absolute bottom-0">
     { Menu ? <DropMenu handleMenu={handleMenu}/> : null }
      <div className="w-full h-20 flex items-center px-4"> 
      <button className={`hover:scale-[1.5] transition-all ${Menu ?  'ring-stone-50 ring-opacity-10 scale-125' : '' } `} onClick={handleMenu}>
      <img src="/src/assets/images/menu.png" alt="" />
      </button>
      <h1 className="text-2xl text-center w-full font-bold">PaoloChat</h1>
      </div>
    </footer>
  )
}
