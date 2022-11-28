
export const jquery_helper = (props) => {

    const location = $.fn.location = function (X, Y, center) {
        if (center) {
            this.css("top", ($(window).height() - this.height()) / (Y ? Y : 3.5) + "px");
            this.css("left", ($(window).width() - this.width()) / (X ? X : 2) + "px");
        } else {
            this.css("top", Y ? Y : "0px");
            this.css("left", X ? X : "0px");
        }
        return this;
    }

    const moveable = $.fn.moveable = function () {
        let l = 0
        let t = 0;
        let c_width = $(window)?.width();
        let c_height = $(window)?.height();
        t = $(this)?.offset()?.top;
        l = $(this)?.offset()?.left;
        t = t?.toFixed(0);
        l = l?.toFixed(0);
        let newtop;
        let newleft;
        newtop = t * (100 / c_height);
        newleft = l * (100 / c_width);

        if (newtop < 99 && newleft < 99) {
            $(this).css({
                top: newtop + ".%",
                left: newleft + "%"
            });
        }

    }

    const changeSize = $.fn.changeSize = function () {
        const fontSize = document.querySelector('html').style.fontSize;
        const fontSizeNumber = fontSize.substring(0, fontSize.length - 2);
        $(this).width($(this).width() * (fontSizeNumber / 16) + "px");
        console.log($(this).width());


    }


    return {
        location,
        moveable,
        changeSize
    }

}
