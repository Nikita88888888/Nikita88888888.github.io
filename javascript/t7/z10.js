let jk = document.getElementById(`jk`);
let x = document.getElementById(`ik`)
let nen = prompt (`Ваше имья?`);
let login = true;
if(login == true){

jk.innerHTML = `<h1 align="center">Вітаю ${nen}! На вашу поштову скриньку<br> StudyLink@gmail.com відправлено лист із підтвердженням. </h1>`;
x.innerHTML = `${nen}`;
}else{
    jk.innerHTML = `<h1 align="center">Бдь ласкаб увійдіть у свій аккаунт або створіть новий.</h1>`;
    x.innerHTML = `Увійти`;
}
console.log(jk)