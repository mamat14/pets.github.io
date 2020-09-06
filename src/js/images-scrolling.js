const ids = ["img1", "img2", "img3"];

export function enableImagesScrolling() {
    window.addEventListener('scroll', ev => {
        try {
            const scrollPos = window.scrollY;
            console.log("Height" +  scrollPos / window.innerHeight * 100);
            let lastBottom = 0;
            for(const id of ids) {
                const element = document.getElementById(id);
                const startScroll = parseInt(element.getAttribute("startScroll")) * window.innerHeight / 100;
                let top = 0;
                if(scrollPos >= startScroll) {
                    top = startScroll;
                    lastBottom = Math.max(element.offsetTop + element.scrollHeight, scrollPos);
                } else {
                    top = lastBottom;
                }
                element.style.top = Math.round(top).toString() + "px";
            }
        } catch (e) {
            console.error(JSON.stringify(e))
        }
    })
}
