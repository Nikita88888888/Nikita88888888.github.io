function j (){
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
document.getElementById('div').innerHTML = `<h1>
Successfully</h1>`
}else{
    document.getElementById('div').innerHTML = `<h1>
    Error</h1>`
}

}