window.addEventListener("DOMContentLoaded", () => {
    Shery.imageEffect("#back", { style: 5, 
        config: {"a":{"value":0.23,"range":[0,30]},"b":{"value":-0.94,"range":[-1,1]},"zindex":{"value":"-1","range":[-9999999,9999999]},"aspect":{"value":1.777255670974048},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":9,"range":[1,15]},"durationOut":{"value":1.75,"range":[0.1,5]},"durationIn":{"value":0.81,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":2.06,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.83,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.41,"range":[0,2]},"noise_scale":{"value":6.87,"range":[0,100]}} ,gooey: true });
    });


var elems = document.querySelectorAll(".element");
elems.forEach(function (element) {
    var h1s = element.querySelectorAll("h1");
    var index = 0;
    var animating = false;


    document.querySelector("#main")
        .addEventListener("click", function () {
           if(!animating){
            animating = true;
             gsap.to(h1s[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" });
                    animating = false;
                },
            });

            index === h1s.length - 1 ? (index = 0) : index++;

            gsap.to(h1s[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
            });
           }
        });
})
