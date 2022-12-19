
import { useRef, useState } from 'react';
import { TiImageOutline } from 'react-icons/ti'

export const Settings = () => {

  const [Image, setImage] = useState(null);
  const backgroundImage = useRef(null);
  const inputImage = useRef(null);
  const estado = useRef(null);

  const handleUploadFile = (e) => {
    let fileButton = document.createElement('input');
    fileButton.type = 'file';
    fileButton.accept = 'image/*';
    fileButton.click();
    fileButton.onchange = (e) => {
      let files = Array.from(fileButton.files);
      let reader = new FileReader();
      reader.onload = (e) => {
        console.log(e)
        backgroundImage.current.src = e.target.result;
        setImage(e.target.result);
        inputImage.current.value = "";
      };
      reader.readAsDataURL(files[0]);
    };
  };

  const handleBackgroundImage = (e) => {
    backgroundImage.current.src = e.target.value;
    setImage(e.target.value);
    console.log(e.target.value);
  };

  const imageOnError = (e) => {
    e.target.src = "https://1sq.realty/assets/img/default.png"
    setImage(null);
  };

  const conexionChange = (e) => {
    if (e.target.value == 1) {
      estado.current.style["background-color"] = "rgb(85, 255, 85)"
      estado.current.style["box-shadow"] = "0 0 5px rgb(185, 255, 85)"
    } else if (e.target.value == 2) {
      estado.current.style["background-color"] = "rgb(255, 210, 39)"
      estado.current.style["box-shadow"] = "0 0 5px rgb(255, 110, 39)"
    } else if (e.target.value == 3) {
      estado.current.style["background-color"] = "rgb(255, 255, 85)"
      estado.current.style["box-shadow"] = "0 0 5px rgb(255, 255, 185)"
    } else if (e.target.value == 4) {
      estado.current.style["background-color"] = "rgb(255, 85, 85)"
      estado.current.style["box-shadow"] = "0 0 5px rgb(255, 105, 105)"
    } else if (e.target.value == 5) {
      estado.current.style["background-color"] = "rgb(100, 100, 100)"
      estado.current.style["box-shadow"] = "0 0 5px rgb(50, 50, 50,50)"
    }

  };

  return (
    <>
      <div className='flex justify-star w-full'>
        <div className='flex items-end justify-end pb-2 w-[10rem]'>
          Apariencia :
        </div>
        <div className='flex w-60 justify-around ml-8'>
          <button className='hint--bottom z-50 transition-all hover:drop-shadow-[0_0px_10px_rgba(22,22,22,1)]' aria-label='Modo DARK'>
            <img className='h-[4rem] rounded-xl' src="/src/assets/images/dark.png" alt="" />
          </button>
          <button className='hint--bottom z-50 transition-all hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.11)]' aria-label='Modo LIGHT'>
            <img className='h-[4rem] rounded-xl' src="/src/assets/images/light.png" alt="" />
          </button>
        </div>
      </div>
      <div className='flex justify-between w-full mt-4 flex-col place-items-start'>
        <div className='flex gap-2'>
          <div className='p-1 w-[10rem] flex justify-end'>
            Fondo de pantalla :
          </div>
          <div className='ml-8'>
            <input ref={inputImage} className='p-1 border-b border-white/25 w-[15rem]' 
            onChange={handleBackgroundImage} style={{ background: '#3C3C3C' }} 
            placeholder='Ingresar fondo de pantalla' />
          </div>
          <button onClick={handleUploadFile} className='hint--right' aria-label='Subir Imagen'><TiImageOutline size={"2rem"}></TiImageOutline></button>
        </div>
        <div className='w-[22.5rem] flex justify-end mt-4 ml-8'>
          <div className='w-[10rem] flex justify-center'>
            <img id="backgroundImage" ref={backgroundImage} onError={imageOnError} src='https://1sq.realty/assets/img/default.png' alt=''
              className=' max-w-[10rem] h-[7rem] border border-white/10 rounded-lg hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.11)] object-contain bg-zinc-900/50' />
          </div>
        </div>
      </div>
      <hr className='my-4 border-white/25' />
      <div className='flex justify-star w-full'>
        <div className='flex gap-2'>
          <div className='flex items-end justify-end pb-2 w-[10rem]'>
            Guardar sesión :
          </div>
          <div className='flex gap-2 ml-8 items-center'>
            <input type="checkbox" className=' text-blue-600 bg-zinc-100 border-zinc-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-zinc-800 focus:ring-2 dark:bg-zinc-700 dark:border-zinc-600' />
            <div>
              La sesión se guardará en este dispositivo
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-star w-full'>
        <div className='flex gap-2'>
          <div className='w-[10rem] flex justify-end items-center'>
            Estado de conexión :
          </div>
          <div className='flex justify-center items-center gap-2 pl-8'>
            <select onChange={conexionChange} className='p-2' style={{ background: "#615F64" }}>
              <option value="1">Online</option>
              <option value="2">Ocupado</option>
              <option value="3">Ausente</option>
              <option value="4">No molestar</option>
              <option value="5">Desconectado</option>
            </select>
            <span ref={estado} className='w-5 h-5 rounded-full' style={{ background: '#55ff55', boxShadow: '0rem 0rem 0.5rem green' }}> </span>
            <div class="group flex relative">
              <span class="px-2 py-2 flex items-center"><i className="fa fa-question-circle text-2xl text-gray-400"></i></span>
              <span class="group-hover:opacity-100 transition-opacity bg-zinc-900/50 px-1 text-sm text-gray-300 rounded-md  opacity-0 m-4 max-w-[6rem]">El estado que se mostrará a tus contactos</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-star w-full'>
        <div className='flex gap-2'>
          <div className='flex items-end justify-end pb-2 w-[10rem]'>
          Notificaciones :
          </div>
          <div className='flex gap-2 ml-8 items-center'>
            <input type="checkbox" className=' text-blue-600 bg-zinc-100 border-zinc-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-zinc-800 focus:ring-2 dark:bg-zinc-700 dark:border-zinc-600' />
            <div>
              Notificaciones de mensajes activadas
            </div>
          </div>
        </div>
      </div>
      <hr className='my-4 border-white/25' />
    </>
  )
}
