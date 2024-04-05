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
let coursesJS = ["Pensamento Computacional [UniFil]", "Crie um site simples usando HTML, CSS e JavaScript [Fundação Bradesco]", "Fundamentos de Lógica de Programação [Fundação Bradesco]", "Introdução ao JavaScript [Fundação Bradesco]"];
let coursesHTML = ["HTML - Básico [Fundação Bradesco]", "HTML - Avançado [Fundação Bradesco]", "HTML e CSS na Prática [Fundação Bradesco]"];
let coursesCSS = ["Crie um site simples usando HTML, CSS e JavaScript [Fundação Bradesco]", "Inovando com CSS [Fundação Bradesco]", "HTML e CSS na Prática [Fundação Bradesco]"];
let coursesJava = ["Linguagem de Programação Java - BÁSICO [Fundação Bradesco]", "Linguagem de Programação Java - AVANÇADO [Fundação Bradesco]", "Introdução a Programação Orientada a Objetos (POO) [Fundação Bradesco]", "Fundamentos de Lógica de Programação [Fundação Bradesco]", "Create a Supermarket app using OOP Features in Java [Coursera]"];
let coursesPHP = ["(Nenhum - None)"];
let coursesNodeJS = ["(Nenhum - None)"];
let coursesDados = ["Linguagem de Programação Java - AVANÇADO (SQL) [Fundação Bradesco]", "Modelagem de Dados [Fundação Bradesco]", "Implementando Banco de Dados [Fundação Bradesco]"];
let coursesCPP = ["(Nenhum - None)"];
let coursesJQuery = ["(Nenhum - None)"];
let coursesPython = ["Imersão Python [Alura]"];
let coursesDotNet = ["(Nenhum - None)"];
const courses = [coursesJS, coursesHTML, coursesCSS, coursesJava, coursesPHP, coursesNodeJS, coursesDados, coursesCPP, coursesJQuery, coursesPython, coursesDotNet];
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
            case 10:
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

const techs = ["Javascript", "HTML", "CSS", "Java", "PHP", "Node.js", "Dados", "C#", "JQuery", "Python", ".NET"];
const techsLogo = ["javascript.png", "html.png", "css.png", "java.png", "oldphp.png", "nodejs.png", "bancoDados.png", "csharp.png", "jquery.png", "python.png", "dotnet.png"];

const techsLevelPT = ["Avançado", "Avançado", "Avançado", "Intermediário", "Básico", "Intermediário", "Avançado", "Intermediário", "Intermediário", "Básico", "Intermediário"];
const techsLevelEN = ["Advanced", "Advanced", "Advanced", "Intermediate", "Beginner", "Intermediate", "Advanced", "Intermediate", "Intermediate", "Beginner", "Intermediate"];
const techsLevelLanguage = [techsLevelPT, techsLevelEN];

