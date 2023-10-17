const verifyScrollAbout = setInterval(() => {
    if (window.scrollY >= 300){
        document.querySelectorAll(".aboutParagraph").forEach(()=>{
            for (let countText = 0; countText < document.querySelectorAll(".aboutParagraph").length; countText++){
                document.querySelectorAll(".aboutParagraph")[countText].classList.add('revealText');
            };
        });
        clearInterval(verifyScrollAbout);
    };
}, 20);

const year = document.querySelector('#ano');
year.innerHTML = new Date().getFullYear();

const navbarResponsive = document.getElementById('navbarResponsive');
let navbarOpen = 0;
document.getElementById('bar_checkbox').addEventListener('click', () => {
    if (navbarOpen == 0){
        navbarOpen++;
        navbarResponsive.style.height = '420px';
        navbarResponsive.style.flexDirection = 'column';

        document.querySelector('.optionsMenuContainer').style.display = document.querySelector('.switch').style.display = 'flex';
    } else {
        navbarOpen--;
        navbarResponsive.style.height = '80px';

        document.querySelector('.optionsMenuContainer').style.display = document.querySelector('.switch').style.display = 'none';
    };
});


