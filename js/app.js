const loop = setInterval(() => {
    if (window.scrollY >= 300){
        document.querySelectorAll(".aboutParagraph").forEach(()=>{
            for (let countText = 0; countText < document.querySelectorAll(".aboutParagraph").length; countText++){
                document.querySelectorAll(".aboutParagraph")[countText].classList.add('revealText');
            };
        });
        clearInterval(loop);
    };
}, 20);

const year = document.querySelector('#ano');
year.innerHTML = new Date().getFullYear();

