
import domtoimage from 'dom-to-image';

export const Footer_Helper = () => {

  const createThumbNail = (window,index) => {

    const spanElement = document.getElementById(`window_${index}`)
    const thumbnail = document.createElement("img");
    thumbnail.classList.add('bg-white','bg-opacity-10','border-black','rounded-lg','border-opacity-10')
    thumbnail.src = window.imagen;
    thumbnail.style.width = "4.5rem"
    thumbnail.style.height = "4.5rem"
    spanElement.setAttribute("aria-label", window.text);
    spanElement.classList.add('hint--top')
    spanElement.addEventListener("click", e => {
      e.preventDefault();
      openWindow(index);
    });
    spanElement.appendChild(thumbnail);
  }


  const openWindow = (index) =>{
    
    $('#prueba').css('visibility', 'visible');
    $('#prueba').addClass('animate__animated animate__fadeInUpBig')

  }

  return {createThumbNail }
}

