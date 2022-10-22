

export const responsive = () => {
    const width = window.innerWidth < 800 ? window.innerWidth*1.25 : window.innerWidth
    const height = window.innerWidth < 600 ? window.innerHeight*1.1 : window.innerHeight

    const fontsize = height / 100 + width / 275;
    document.documentElement.style.fontSize = fontsize + 'px'; 
    window.addEventListener('resize', () => {
        const width = window.innerWidth < 800 ? window.innerWidth*1.25 : window.innerWidth
        const height = window.innerWidth  < 600 ? window.innerHeight*1.1 : window.innerHeight
        const fontsize = height / 100 + width / 275;
        document.documentElement.style.fontSize = fontsize + 'px'; 
    });
}
