const ids = ["img1", "img2", "img3"];

export function enableImagesScrolling() {
    window.addEventListener('scroll', ev => {
        try {
            const scrollPos = window.scrollY;
            console.log("h:" + scrollPos);
            for(const id of ids) {
                const element = document.getElementById(id);
                const startScroll = parseInt(element.getAttribute("startScroll")) * window.innerHeight / 100;
                if(scrollPos > startScroll) {
                    element.style.position = 'absolute';
                    element.style.top = Math.round(startScroll).toString() + "px";
                } else {
                    element.style.position = 'fixed';
                    element.style.top = null;
                }
            }
        } catch (e) {
            console.error(JSON.stringify(e))
        }
    })
}
