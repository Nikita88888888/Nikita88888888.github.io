function text(){
    let h1 = document.getElementById('h1');
    let input = document.getElementById('input').value;
 localStorage.setItem('ovl',input);

    h1.innerHTML = input;
}
function textdraw(){
    let h1 = document.getElementById('h1');
    h1.innerHTML = localStorage.getItem('ovl');
}
let key = 'Привіт усім'
textdraw();