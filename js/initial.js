const webDev = ["W","e","b"," ","D","e","v","e","l","o","p","e","r"];
const backDev = ["B","a","c","k","-","e","n","d"," ","D","e","v","e","l","o","p","e","r"];
const fullDev = ["F","u","l","l","-","s","t","a","c","k"," ","D","e","v","e","l","o","p","e","r"];
const devOps = ["D","e","v","O","p","s"];
const words = [webDev, backDev, fullDev, devOps];

const typing = document.getElementById('type');

let countWords = 0;
let wordTurn = 0;

addEventListener("DOMContentLoaded",()=>{
    setInterval(() => {
        if (countWords < (words[wordTurn].length + 10)) {
            if (countWords < words[wordTurn].length){
                typing.innerHTML = typing.innerHTML + words[wordTurn][countWords];
            };
            countWords++;
        } else {
            countWords = 0;
            wordTurn = (wordTurn + 1) % 4;
        };

        if (countWords === (words[wordTurn].length + 5)){
            document.querySelector('.typeContainer').style.width = 'max-content';
            typing.classList.add('erase');
             setTimeout(() => {
                 typing.innerHTML = ""; 
                 typing.classList.remove('erase');
                  document.querySelector('.typeContainer').style.width = 'auto';
               }, 980);
          };
    }, 200);
});

        