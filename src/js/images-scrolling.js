const bg1 =  require("../img/bg1.jpg");
const bg2 =  require("../img/bg2.jpg");
const bg3 =  require("../img/bg3.jpg");

export function enableImagesScrolling() {
    const ids = ["img1", "img2", "img3"];
    const bgs = [bg1, bg2, bg3].map(path => path.substring(1));
    bgs.forEach(bg => console.log(bg));
    const loaded = [false, false, false];

    for(const i of [0,1,2]) {
        const img = new Image();
        img.addEventListener('load', ev => {loaded[i] = true; show()}, false);
        img.src = bg1.substring(1);
    }

    function show() {
        console.log(loaded.join(", "));
        if(loaded.reduce((a,b) => a && b)) {
            let i = 0;
            for(const id of ids) {
                const el = document.getElementById(id);
                console.log("setting bg");
                el.style.backgroundImage = `url(${bgs[i]})`;
                i+=1;
            }
        }
    }

    window.addEventListener('scroll', ev => {
        try {
            const scrollPos = window.scrollY;
            for(const id of ids) {
                const element = document.getElementById(id);
                const startScroll = parseInt(element.getAttribute("startScroll")) * window.innerHeight / 100;
                if(scrollPos > startScroll) {
                    element.style.top = Math.round(startScroll).toString() + "px";
                    element.style.position = 'absolute';
                } else {
                    element.style.position = 'fixed';
                    element.style.top = "0px";
                }
            }
        } catch (e) {
            console.error(JSON.stringify(e))
        }
    })
}
