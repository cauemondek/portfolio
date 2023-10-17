const cardsProject = document.querySelectorAll(".cardProject");

let focusCarrousel = 0;
let blockCarrousel = 0;
let leftCard;
let rightCard;
cardsProject.forEach((index, number) => {
    index.addEventListener('mouseenter', () => {
            if (blockCarrousel == 0){
                    if (focusCarrousel === 0){
                    focusCarrousel = 1;
            
                    for (let elements = 0; elements < cardsProject.length; elements++){
                        cardsProject[elements].style.animation = 'none';
                    };
            
                    index.style.transform = 'rotateY(360deg) translateZ(165px) rotateY(-360deg)';
                    index.style.opacity= '1';
                    index.style.zIndex = '10';
                    
                    leftCard = number;
                    rightCard = number;
                    switch (number) {
                        case 8:
                            leftCard = 7;
                            rightCard = 0;
                            break;
                        case 0:
                            leftCard = 8;
                            rightCard = 1;
                            break;
                        default:
                            leftCard--;
                            rightCard++;
                            break;
                    };
                    cardsProject[leftCard].style.transform = 'rotateY(330deg) translateZ(165px) rotateY(-330deg)';
                    cardsProject[rightCard].style.transform = 'rotateY(30deg) translateZ(165px) rotateY(-30deg)';
                };
            };
        });
    
    index.addEventListener('click', () => {
                if (focusCarrousel === 1){
                for (let elements = 0; elements < cardsProject.length; elements++){
                    cardsProject[elements].style.transform = 'rotateY(0) translateZ(0) rotateY(0)';
                };
        
                index.style.transform = 'rotateY(360deg) translateZ(165px) rotateY(-360deg)';
                index.style.opacity= '1';
                index.style.zIndex = '10';

                leftCard = number;
                rightCard = number;
                switch (number) {
                    case 8:
                        leftCard = 7;
                        rightCard = 0;
                        break;
                    case 0:
                        leftCard = 8;
                        rightCard = 1;
                        break;
                    default:
                        leftCard--;
                        rightCard++;
                        break;
                };
                cardsProject[leftCard].style.transform = 'rotateY(330deg) translateZ(165px) rotateY(-330deg)';
                cardsProject[rightCard].style.transform = 'rotateY(30deg) translateZ(165px) rotateY(-30deg)';
                cardsProject[leftCard].style.zIndex = 'auto';
                cardsProject[rightCard].style.zIndex = 'auto';
                cardsProject[leftCard].style.opacity = '0.6';
                cardsProject[rightCard].style.opacity = '0.6';
            };
        });

    document.querySelector('.carrousel').addEventListener('mouseleave', () => {
        if (blockCarrousel == 0){

            focusCarrousel = 0;
            
            for (let elements = 0; elements < cardsProject.length; elements++){
                cardsProject[elements].style.transform = 'rotateY(0) translateZ(0) rotateY(0)';
                cardsProject[elements].style.animation = 'carrouselRotate 18s infinite linear';
                cardsProject[elements].style.opacity = '0.6';
    
                cardsProject[0].style.animationDelay = '-16s';
                cardsProject[1].style.animationDelay = '-14s';
                cardsProject[2].style.animationDelay = '-12s';
                cardsProject[3].style.animationDelay = '-10s';
                cardsProject[4].style.animationDelay = '-8s';
                cardsProject[5].style.animationDelay = '-6s';
                cardsProject[6].style.animationDelay = '-4s';
                cardsProject[7].style.animationDelay = '-2s';
                cardsProject[8].style.animationDelay = '0s';
            };
    
            index.style.zIndex = 'auto';

        };
    });

    const verifyResponsiveCarrousel = setInterval(() => {
        if (window.innerWidth <= 1279){
            blockCarrousel = 1;
            focusCarrousel = 1;
            
            cardsProject[0].style.transform = 'rotateY(330deg) translateZ(165px) rotateY(-330deg)';
            cardsProject[1].style.transform = 'rotateY(360deg) translateZ(165px) rotateY(-360deg)';
            cardsProject[1].style.opacity= '1';
            cardsProject[1].style.zIndex = '10';
            cardsProject[2].style.transform = 'rotateY(30deg) translateZ(165px) rotateY(-30deg)';

            clearInterval(verifyResponsiveCarrousel);
        };
    }, 250);
});