addEventListener('DOMContentLoaded', () => {
    document.getElementById('flagBall').classList.add("flagAnimation");
    setTimeout(() => {
        document.getElementById('flagBall').classList.remove("flagAnimation");
    }, 1000);
    if (navigator.language === 'pt-BR' || navigator.language === 'pt'){
        document.getElementById('flagBall').src = "/imgs/flagsSwitch/bandeira-PT.png";
        clickSwitch = 0;
    } else {
        document.getElementById('ballSwitch').style.transform = 'translateX(32px)';
        document.getElementById('flagBall').src = "/imgs/flagsSwitch/bandeira-EN.jpg";
        clickSwitch = 1;
        changeLanguage('en');
    };
});

function changeLanguage(language){
    const dataTranslations = './js/translations.json';
    // Cria um novo objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Define o método de requisição
    xhr.open('GET', dataTranslations, true);
    // Envia a requisição
    xhr.send();
    // Quando a resposta for recebida
    xhr.onload = function() {
      // Lê o conteúdo da resposta  
        const data = xhr.responseText;
        // Converte o conteúdo da resposta em um objeto JavaScript
        const constantsTranslation = JSON.parse(data);
        
        const elementsTranslation = document.querySelectorAll('.translation');
        
        elementsTranslation.forEach((index) => {
            const key = index.getAttribute('data-key');
            // Acessa as constantes do arquivo .json
            index.textContent = constantsTranslation[language][key];
        });
    };
};