function loadingAnimation(){
    let tl = gsap.timeline()

tl.from('.line h1', {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5
})

tl.from('#line1-part1', {
    opacity: 0,
    onStart: function() {
        let h5timer = document.querySelector('#line1-part1 h5');
        let grow = 0;
        let loaderInterval = setInterval(() => {
            if(grow<100){
                h5timer.innerHTML = grow++;
            }
            else{
                h5timer.innerHTML = grow;
                clearInterval(loaderInterval);
            }
        }, 35);
    }
})

tl.to('.line h2', {
    animationName: 'anime',
    opacity:1
})

tl.to('#loader', {
    opacity: 0,
    duration: 0.2,
    delay: 4
})

tl.from('#page1', {
    opacity: 0,
    delay: 0.2,
    y: 1500,
    duration: 0.5,
    ease: Power4
})

tl.to('#loader', {
    display: 'none'
})

tl.from('#nav',{
    opacity: 0
})

tl.from('.hero h1, .hero h2', {
    y: 130,
    stagger: 0.2
})
}

function cursorAnimation() {
    document.addEventListener('mousemove', function(dets){
        gsap.to('#crsr', {
            x: dets.x,
            y: dets.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4");
}
loadingAnimation();
cursorAnimation();