import { useEffect, useState } from 'react'
import { WindowHeader } from './WindowHeader'
import { jquery_helper } from '../../../helpers/jquery_helper';
import { Window_Helper } from './Helpers/Window_Helper';


export const Window = (props) => {
  const { generateUUID } = Window_Helper();
  const [Destroy, setDestroy] = useState(false);
  const [Close, setClose] = useState(false);
  const [Maximize, setMaximize] = useState(false);
  const [Minimize, setMinimize] = useState(false);
  const [id, setId] = useState(generateUUID());

  $(document).ready(function () {
    console.log('ready');
    jquery_helper();
    $('#' + id).moveable();
    if (props.isMaximizable) {
      $('#' + id + ' .body').resizable({
        minWidth: 200,
        minHeight: 200,
      }
      );
    }
    $('#' + id).draggable({
      handle: '.window-header',
      iframeFix: true,
      refreshPositions: false,
      revert: false,
      stack: "#screen",
      containment: "#screen",
      appendTo: "#screen",
      drag: function (event, ui) {
        $('#' + id).css('top', (ui.position.top + 3) + 'px !important');
        $('#' + id).css('left', (ui.position.left + 5) + 'px !important');
      }
    });
    $('#')
    window.addEventListener('resize', () => $('#' + id).moveable());
  });
  useEffect(() => {
    if (Close) {
      setTimeout(() => {
        setDestroy(true);
      }, 750);
    } else if (Minimize) {
      setTimeout(() => {
        props.setMinimizedWindows((prev) => [...prev, { imagen: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png', text: 'hola', id: id }]);
        $('#' + id).css('visibility', 'hidden');
        $('#' + id).removeClass('animate__animated animate__zoomOut');
        setMinimize(false);
      }, 750);
    }
  }, [Close, Maximize, Minimize]);

  if (Destroy) return null;
  return (
    <div id={id} className={`w-max absolute ui-draggable ui-draggable-handle ${Maximize ? 'isMaximized' : ''} ${Close ? 'animate__animated animate__fadeOut' : ''} ${Minimize ? 'animate__animated animate__zoomOut' : ''}`}>
      <WindowHeader handleClose={setClose} handleMaximize={setMaximize} handleMinimize={setMinimize} isCloseable={props.isCloseable || true} isMaximizable={props.isMaximizable || true} isMinimizable={props.isMinimizable || true} />
      {props.body ? props.body :
        <div  className={`body relative bg-slate-800 border-black border-opacity-10 rounded-b-lg w-[20rem] select-none ${Maximize ? 'isMaximized' : ''} `}>
          <div className='w-full h-full overflow-scroll p-4'>
          <h1 className='text-center w-full font-bold text-2xl '>Welcome to paolochat v.2</h1>
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
          </div>
        </div>}
    </div>

  )

}
