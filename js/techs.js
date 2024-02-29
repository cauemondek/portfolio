const optionTech = document.querySelectorAll('.optionTech');
optionTech.forEach((index, number) => {
    optionTech[0].style.backgroundColor = '#312150';
    index.addEventListener('click',() => {
        optionTech[0].style.backgroundColor = '#030217';
        optionTech[1].style.backgroundColor = '#030217';
        index.style.backgroundColor = '#312150';
            if (number == 0){
                document.getElementById('techsMenu').style.display = 'flex';
                document.getElementById('toolsMenu').style.display = 'none';
            } else {
                document.getElementById('techsMenu').style.display = 'none';
                document.getElementById('toolsMenu').style.display = 'flex';
            };
    });
});

const popUp = document.querySelector('.containerPopup');
let coursesJS = ["HTML5, CSS3 e Javascript na prática (3 Projetos) [Udemy]", "HTML, CSS and JavaScript for Intermediate - Movie Website [Udemy]", "Pensamento Computacional [UniFil]", "Crie um site simples usando HTML, CSS e JavaScript [Fundação Bradesco]", "Fundamentos de Lógica de Programação [Fundação Bradesco]", "Introdução ao JavaScript [Fundação Bradesco]"];
let coursesHTML = [ "HTML5, CSS3 e Javascript na prática (3 Projetos) [Udemy]", "HTML, CSS and JavaScript for Intermediate - Movie Website [Udemy]", "HTML5: Primeiros passos na carreira de Desenvolvedor [Udemy]", "Crie um site simples usando HTML, CSS e JavaScript [Udemy]", "HTML - Básico [Fundação Bradesco]", "HTML - Avançado [Fundação Bradesco]", "HTML e CSS na Prática [Fundação Bradesco]"];
let coursesCSS = [ "HTML5, CSS3 e Javascript na prática (3 Projetos) [Udemy]", "HTML, CSS and JavaScript for Intermediate - Movie Website [Udemy]", "CSS3 na prática [Udemy]", "Crie um site simples usando HTML, CSS e JavaScript [Fundação Bradesco]", "Inovando com CSS [Fundação Bradesco]", "HTML e CSS na Prática [Fundação Bradesco]"];
let coursesJava = ["Introdução ao Java e Orientação a objetos [Udemy]", "Programação Java para Iniciantes [Udemy]", "Java SE - F1 [Udemy]", "Linguagem de Programação Java - BÁSICO [Fundação Bradesco]", "Linguagem de Programação Java - AVANÇADO [Fundação Bradesco]", "Introdução a Programação Orientada a Objetos (POO) [Fundação Bradesco]", "Fundamentos de Lógica de Programação [Fundação Bradesco]", "Create a Supermarket app using OOP Features in Java [Coursera]"];
let coursesPHP = ["(Nenhum - None)"];
let coursesNodeJS = ["(Nenhum - None)"];
let coursesDados = ["Linguagem de Programação Java - AVANÇADO (SQL) [Fundação Bradesco]", "Modelagem de Dados [Fundação Bradesco]", "Implementando Banco de Dados [Fundação Bradesco]"];
let coursesCPP = ["Escrever seu primeiro programa em C++ [Microsoft]"];
let coursesJQuery = ["(Nenhum - None)"];
let coursesPython = ["(Nenhum - None)"];
const courses = [coursesJS, coursesHTML, coursesCSS, coursesJava, coursesPHP, coursesNodeJS, coursesDados, coursesCPP, coursesJQuery, coursesPython];
const coursesPage = document.querySelector('.courses');
document.querySelectorAll('.tech').forEach((index, number) => {
    index.addEventListener('click',() => {
        popUp.style.display = 'flex';

        switch (number) {
            case 0:
                pullTechData(number);
                break;
            case 1:
                pullTechData(number);
                break;
            case 2:
                pullTechData(number);
                break;
            case 3:
                pullTechData(number);
                break;
            case 4:
                pullTechData(number);
                break;
            case 5:
                pullTechData(number);
                break;
            case 6:
                pullTechData(number);
                break;
            case 7:
                pullTechData(number);
                break;
            case 8:
                pullTechData(number);
                break;
            case 9:
                pullTechData(number);
                break;
            default:
                break;
        };
                    
        for(let courseAdd = 0; courseAdd < courses[number].length; courseAdd++){
            const newCourse = document.createElement("li");
    
            newCourse.innerHTML = courses[number][courseAdd];
    
            coursesPage.appendChild(newCourse);
        };
    });
});

document.querySelector('.closePopup').addEventListener('click',() => {
    popUp.style.display = 'none';

    while (coursesPage.firstChild) {
        coursesPage.removeChild(coursesPage.firstChild);
    };
});

function pullTechData(numberTech){
    document.getElementById('techLogo').src = "./imgs/skills/techs/" + techsLogo[numberTech];
    document.getElementById('skillName').innerHTML = techs[numberTech];

    let techLanguageSwitch;
    if (clickSwitch === 0) {
        techLanguageSwitch = techsLevelLanguage[0];
    } else {
        techLanguageSwitch = techsLevelLanguage[1];
    };

    document.getElementById('levelType').innerHTML = techLanguageSwitch[numberTech];
};

const techs = ["Javascript", "HTML", "CSS", "Java", "PHP", "Node.js", "Dados", "C++", "JQuery", "Python"];
const techsLogo = ["javascript.png", "html.png", "css.png", "java.png", "oldphp.png", "nodejs.png", "bancoDados.png", "c++.png", "jquery.png", "python.png"];

const techsLevelPT = ["Avançado", "Avançado", "Avançado", "Intermediário", "Intermediário", "Intermediário", "Intermediário", "Básico", "Intermediário", "Intermediário"];
const techsLevelEN = ["Advanced", "Advanced", "Advanced", "Intermediate", "Intermediate", "Intermediate", "Intermediate", "Beginner", "Intermediate", "Intermediate"];
const techsLevelLanguage = [techsLevelPT, techsLevelEN];

