const optionTech = document.querySelectorAll('.optionTech');
optionTech.forEach((index, number) => {
    optionTech[0].style.backgroundColor = '#312150';
    index.addEventListener('click',() => {
        optionTech[0].style.backgroundColor = '#030217';
        optionTech[1].style.backgroundColor = '#030217';
        index.style.backgroundColor = '#312150';
    });
});

const popUp = document.querySelector('.containerPopup');
document.querySelectorAll('.tech').forEach((index, number) => {
    index.addEventListener('click',() => {
        popUp.style.display = 'flex';
    });
});

document.querySelector('.closePopup').addEventListener('click',() => {
    popUp.style.display = 'none';
});