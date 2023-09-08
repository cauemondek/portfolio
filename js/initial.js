const webDev = ["W","e","b"," ","D","e","v","e","l","o","p","e","r"];
const backDev = ["B","a","c","k","-","e","n","d"," ","D","e","v","e","l","o","p","e","r"];
const fullDev = ["F","u","l","l","-","S","t","a","c","k"," ","D","e","v","e","l","o","p","e","r"];
const words = [webDev, backDev, fullDev];

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
            wordTurn = (wordTurn + 1) % 3;
        };

        if (countWords === (words[wordTurn].length + 5)){
            document.querySelector('.typeContainer').style.width = 'max-content';
            typing.classList.add('erase');
             setTimeout(() => {
                 typing.classList.remove('erase');
                  document.querySelector('.typeContainer').style.width = 'auto';
                  typing.innerHTML = ""; 
               }, 1000);
          };
    }, 200);
});

        