const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function fistPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    .to(".boundingelem",{
        y: 0,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: .2
    })

    .from("#herofooter",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease: Expo.easeInOut
    });
}

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector(
            "#minicircle"
        ).style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    })



}
circleMouseFollower();
fistPageAnim();