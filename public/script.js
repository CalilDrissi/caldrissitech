const logo = document.querySelector('#logo');
const main = document.querySelector('#root');


function init() {
    setTimeout (()=>{
         logo.style.opacity=0;
         logo.style.display = 'none';

         main.style.display = 'block';
         setTimeout(() => (main.style.opacity =1), 50)
    },4000)
}

init();