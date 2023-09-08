const loop = setInterval(() => {
    if (window.scrollY >= 300){
        document.querySelectorAll(".aboutWriter").forEach(()=>{
            for (let countText = 0; countText < document.querySelectorAll(".aboutWriter").length; countText++){
                document.querySelectorAll(".aboutWriter")[countText].classList.add('showTextAbout');
                setTimeout(() => {
                    document.querySelectorAll(".aboutWriter")[countText].style.transform = 'translateX(0)';
                }, 1200);
            };
        });
        clearInterval(loop);
    };
}, 10);

const year = document.querySelector('#ano');
year.innerHTML = new Date().getFullYear();

// // Maybe for responsive web?
// const verifyWindow = setInterval(() => { 
//     if (window.innerWidth < 1600){
//         console.log(window.innerWidth)
//         document.querySelector('body').style.width = `${window.innerWidth}px`;
//         document.querySelector('body').style.overflowX = "hidden";
//     };
// }, 50);

