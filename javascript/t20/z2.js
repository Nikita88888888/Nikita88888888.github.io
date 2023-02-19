function lo(){
    let email = document.getElementById('email').value
let password = document.getElementById('password').value
let login = JSON.parse(localStorage.getItem('login'))
if(login.mail == email && login.pass == password){
    login.loged = true;
    
     

    document.getElementById('div').innerHTML = `<div class="alert alert-success col-6">Успіх</div>`
    window.location = "z3.html"
}else{
        document.getElementById('div').innerHTML = `<div class="alert alert-danger col-6">Помилка</div>`
    }
  
}