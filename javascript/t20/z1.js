function S (){
    let text = document.getElementById('text').value
let email = document.getElementById('email').value
let password = document.getElementById('password').value
if(text.length > 3 && email.includes('@gmail.com') == true && password.length > 6){
    let login = {
        login: text,
        mail: email,
        pass: password
    }
    localStorage.setItem('login',JSON.stringify(login))
    document.getElementById('div').innerHTML = `<div class="alert alert-success col-6">Успіх</div>`
    }else{
        document.getElementById('div').innerHTML = `<div class="alert alert-danger col-6">Помилка</div>`
    }
}