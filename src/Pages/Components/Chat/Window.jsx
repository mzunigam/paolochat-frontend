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
    jquery_helper();

    $('#' + id).moveable();
    if (props.isMaximizable) {

      const width = window.innerWidth < 800 ? window.innerWidth*1.25 : window.innerWidth
        const height = window.innerWidth  < 600 ? window.innerHeight*1.1 : window.innerHeight
        const fontsize = height / 100 + width / 275;

      $('#' + id + ' .body').resizable({
        minWidth: fontsize * props.width,
        minHeight: fontsize * props.height,	
      });
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
    window.addEventListener('resize', () => $('#' + id).moveable());
  });
  useEffect(() => {
    if (Close) {
      setTimeout(() => {
        setDestroy(true);
      }, 750);
    } else if (Minimize) {
      setTimeout(() => {
        props.setMinimizedWindows((prev) => [...prev, { imagen: props.icon ? props.icon : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/No_icon_red.svg/1200px-No_icon_red.svg.png', text: 'Menu Inicio', id: id }]);
        $('#' + id).css('visibility', 'hidden');
        $('#' + id).removeClass('isMinimizing');
        setMinimize(false);
      }, 750);
    }
  }, [Close, Maximize, Minimize]);

  if (Destroy) return null;
  return (
    <div id={id} className={`w-max absolute ui-draggable ui-draggable-handle ${Maximize ? 'isMaximized' : ''} ${Close ? 'isClosing' : ''} ${Minimize ? 'isMinimizing' : ''}`}>
      <WindowHeader handleClose={setClose} handleMaximize={setMaximize} handleMinimize={setMinimize} isCloseable={props.isCloseable || true} isMaximizable={props.isMaximizable || true} isMinimizable={props.isMinimizable || true} />
      {props.body ? props.body :
        <div  className={`body relative bg-zinc-800 border-black border-opacity-10 rounded-b-lg select-none ${Maximize ? 'isMaximized' : ''} `} style={{width: props.width +'rem', height: props.height +'rem'}}>
          <div className='w-full h-full overflow-y-auto p-4 border border-zinc-50/25 border-t-0'>
          <h1 className='text-center w-full font-bold text-2xl '>{props.title}</h1>
          <article className='break-words text-center mt-4'>
          {props.component}
          </article>
          </div>
        </div>}
    </div>

  )

}
