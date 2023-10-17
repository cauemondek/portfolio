let clickSwitch;

document.querySelector('.switch').addEventListener('click',()=>{
    document.getElementById('flagBall').classList.add("flagAnimation");
    setTimeout(() => {
        document.getElementById('flagBall').classList.remove("flagAnimation");
    }, 1000);
    if (clickSwitch === 0){
        document.getElementById('ballSwitch').style.transform = 'translateX(32px)';
        document.getElementById('flagBall').src = "./imgs/flagsSwitch/bandeira-EN.jpg";
        clickSwitch++;
        changeLanguage('en');
    } else {
        document.getElementById('ballSwitch').style.transform = 'translateX(0px)';
        document.getElementById('flagBall').src = "./imgs/flagsSwitch/bandeira-PT.png";
        clickSwitch--;
        changeLanguage('ptBR');
    };
});

const optionsMenu = document.querySelectorAll('.optionsMenu');
optionsMenu.forEach((index, number)=>{
    optionsMenu[0].setAttribute('checkedPage', '');
        document.addEventListener('scroll',()=>{
            if (window.innerWidth <= 414) { // Mobile 1
                if (window.scrollY <= 450){
                    pageOn(0);
                } else if (500 <= window.scrollY && window.scrollY < 900){
                    pageOn(1);
                } else if (window.scrollY >= 1300 && window.scrollY < 2450){
                    pageOn(2);
                } else if (window.scrollY >= 2450){
                    pageOn(3);
                };
            } else if (window.innerWidth <= 600 && window.innerWidth >= 415) { // Mobile 2
                if (window.scrollY <= 300){
                    pageOn(0);
                } else if (550 <= window.scrollY && window.scrollY < 1600){
                    pageOn(1);
                } else if (window.scrollY >= 1600 && window.scrollY < 2300){
                    pageOn(2);
                } else if (window.scrollY >= 2300){
                    pageOn(3);
                } 
            } else { // Desktops or Tablet
                if (window.scrollY <= 110){
                    pageOn(0);
                } else if (300 <= window.scrollY && window.scrollY < 900){
                    pageOn(1);
                } else if (window.scrollY >= 900 && window.scrollY < 1600){
                    pageOn(2);
                } else if (window.scrollY >= 1600){
                    pageOn(3);
                };
            };
        });

    index.addEventListener('click',()=>{
        switch (number) {
            case 0:
                window.scrollTo(0,0); // default
                break;
            case 1:
                if (window.innerWidth <= 414){
                    window.scrollTo(0,850); // Mobile 1
                } else if (window.innerWidth <= 600 && window.innerWidth >= 415) {
                    window.scrollTo(0,820); // Mobile 2
                }else {
                    window.scrollTo(0,800); // Desktops or Tablet
                };
                break;
            case 2:
                if (window.innerWidth <= 414){
                    window.scrollTo(0,1500); // Mobile 1
                } else if (window.innerWidth <= 600 && window.innerWidth >= 415) {
                    window.scrollTo(0,1790); // Mobile 2
                } else {
                    window.scrollTo(0,1300); //Desktops or Tablet
                };
                break;
            case 3:
                window.scrollTo(0,20000); // default
                break;
            default:
                break;
        };

    });

});

function pageOn(page){
    for(let countMenu = 0; countMenu <= 3; countMenu++){
        optionsMenu[countMenu].removeAttribute('checkedPage');
    };
    optionsMenu[page].setAttribute('checkedPage', '');
};
