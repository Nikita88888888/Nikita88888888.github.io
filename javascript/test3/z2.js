function jo(){
    let email = document.getElementById('email').value
let password = document.getElementById('password').value
let login = JSON.parse(localStorage.getItem('login'))
console.log(email)
console.log(password)
console.log(login.mail)
console.log(login.pass)
}