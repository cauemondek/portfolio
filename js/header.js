let clickSwitch;

document.querySelector('.switch').addEventListener('click',()=>{
    document.getElementById('flagBall').classList.add("flagAnimation")
    setTimeout(() => {
        document.getElementById('flagBall').classList.remove("flagAnimation");
    }, 1000);
    if (clickSwitch === 0){
        document.getElementById('ballSwitch').style.transform = 'translateX(32px)';
        document.getElementById('flagBall').src = "/imgs/flagsSwitch/bandeira-EN.jpg";
        clickSwitch++;
        changeLanguage('en');
    } else {
        document.getElementById('ballSwitch').style.transform = 'translateX(0px)';
        document.getElementById('flagBall').src = "/imgs/flagsSwitch/bandeira-PT.png";
        clickSwitch--;
        changeLanguage('ptBR');
    };
});

const optionsMenu = document.querySelectorAll('.optionsMenu');
optionsMenu.forEach((index, number)=>{
    optionsMenu[0].setAttribute('checkedPage', '');
        document.addEventListener('scroll',()=>{
            if (window.scrollY <= 110){
                pageOn(0);
            } else if (300 <= window.scrollY && window.scrollY < 900) {
                pageOn(1);
            } else if (window.scrollY >= 900){
                pageOn(2);
            };
            // console.log(scrollY)
        });

    index.addEventListener('click',()=>{
        if (number == 0){
            window.scrollTo(0,0);
        } else if (number == 1){
            window.scrollTo(0,800);
        } else if (number == 2){
            window.scrollTo(0,1300);
        };
    });

});

function pageOn(page){
    for(let countMenu = 0; countMenu <= 3; countMenu++){
        optionsMenu[countMenu].removeAttribute('checkedPage');
    };
    optionsMenu[page].setAttribute('checkedPage', '');
};
