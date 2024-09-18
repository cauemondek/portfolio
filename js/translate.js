addEventListener('DOMContentLoaded', () => {
    document.getElementById('flagBall').classList.add("flagAnimation");
    setTimeout(() => {
        document.getElementById('flagBall').classList.remove("flagAnimation");
    }, 1000);
    if (navigator.language === 'pt-BR' || navigator.language === 'pt'){
        document.getElementById('flagBall').src = "./imgs/flagsSwitch/bandeira-PT.png";
        clickSwitch = 0;
    } else {
        document.getElementById('ballSwitch').style.transform = 'translateX(32px)';
        document.getElementById('flagBall').src = "./imgs/flagsSwitch/bandeira-EN.jpg";
        clickSwitch = 1;
        changeLanguage('en');
    };
});

function changeLanguage(language) {
    const dataTranslations = './js/translations.json';

    fetch(dataTranslations)
        .then(response => response.text())
        .then(data => {
            const constantsTranslation = JSON.parse(data);

            const elementsTranslation = document.querySelectorAll('.translation');

            elementsTranslation.forEach((element) => {
                const key = element.getAttribute('data-key');
                element.textContent = constantsTranslation[language][key];
            });
        })
        .catch(error => {
            console.error(`Error fetching translations: ${error}`);
        });
}