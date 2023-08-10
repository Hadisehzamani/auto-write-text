let text = "Hi, I'm Hadiseh Zamani"
let h1 = document.querySelector('h1')

let index = 0;

function writeText(){
    h1.innerText = text.slice(0, index)
    index++;
    if(index > text.length){
        index = 0;
    }
}

setInterval(writeText, 150);