import { useEffect, useState } from 'react'
import { WindowHeader } from './WindowHeader'
import { jquery_helper } from '../../../helpers/jquery_helper';

export const Window = (props) => {
  
  const [Destroy,setDestroy] = useState(false);
  const [Close, setClose] = useState(false);
  const [Maximize, setMaximize] = useState(false);
  const [Minimize, setMinimize] = useState(false);

  $(document).ready(function () {
    jquery_helper();
    $('#prueba').moveable();
    $('#prueba').draggable({
      handle: '.window-header',
      drag : function(event, ui) {
        $('#prueba').css('top', ui.position.top+'px !important');
        $('#prueba').css('left', ui.position.left+'px !important');
      }
    });
    window.addEventListener('resize', ()=> $('#prueba').moveable() );
  });


  useEffect(() => {
    if (Close) {
      setTimeout(() => {
      setDestroy(true);
      }, 750);
    }else if (Minimize) {
      setTimeout(() => {
        props.setMinimizedWindows((prev) => [...prev, {imagen: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' , text: 'hola'}]);
        $('#prueba').css('visibility', 'hidden');
        $('#prueba').removeClass('animate__animated animate__zoomOut');
        setMinimize(false);
      }, 750);
    }
  },[Close,Maximize,Minimize]);

  if(Destroy) return null;

    return (
      <div id="prueba" className={`w-max ui-draggable ui-draggable-handle ${Maximize ? 'isMaximized' : ''} ${Close ? 'animate__animated animate__fadeOut' : ''} ${Minimize ? 'animate__animated animate__zoomOut' : '' }`}>
        <WindowHeader handleClose={setClose} handleMaximize={setMaximize} handleMinimize={setMinimize} />
        {props.body ? props.body :
          <div id="cuerpo" className={`bg-slate-800 p-4  border-black border-opacity-10 rounded-b-lg w-[20rem] select-none ${Maximize ? 'isMaximized' : ''} `}>
            <h1 className='text-center w-full font-bold text-2xl'>Welcome to paolochat v.2</h1>
            <article className='break-words text-center mt-4'>
              <b>Paolochat</b> es una aplicación en donde puedes chatear con tus amigos y familiares, puedes crear salas de chat y compartir el link con tus amigos para que se unan a la conversación.
              esta es la version mejorada de la version 1.
              <br />
              <br></br>
              Se esta utilizando Reactjs, Jquery, Tailwind ,Sockets y Spring boot.
              <div className='w-full flex justify-center mt-2'>
                <img src="https://media1.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=6c09b9527myjk32ghqhnbtvpidwifemsmovgzz82t2v4x8ym&rid=giphy.gif&ct=s" className='w-16' />
              </div>
            </article>
          </div>}
      </div>

    )
  
}
