

export const responsive = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const fontsize = height / 100 + width / 200;
    document.documentElement.style.fontSize = fontsize + 'px'; 
    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const fontsize = height / 100 + width / 200;
        document.documentElement.style.fontSize = fontsize + 'px'; 
    });
}
