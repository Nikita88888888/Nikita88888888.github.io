let user = {
    name:"Петро",
    lastname:"Іванов",
     age: 14,
      email:"petro786@gmail.com",
       city:"Lviv"
}   

function showUser() {
    document.getElementById("lol").innerHTML = `
    <tr>
    <td>${user.name}</td>
    <td>${user.lastname}</td>
    <td>${user.age}</td>
    <td>${user.email}</td>
    <td>${user.city}</td>
</tr>
    `
}
showUser();

function changeName(pool){
    user.name = pool;
    showUser();
}
function changeLastName(pool){
    user.lastname = pool;
    showUser();
}
function changeAge(pool){
    user.age = pool;
    showUser();
}
function changeEmail(pool){
    user.email = pool;
    showUser();
}
function changeCity(pool){
    user.city = pool;
    showUser();
}
function changeUserData(pool,lastname,age,email,city){
    user.name = pool;
    user.lastname = lastname;
    user.age = age;
    user.email = email;
    user.city = city;
    showUser();
}