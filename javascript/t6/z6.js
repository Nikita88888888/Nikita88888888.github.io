let pass = 3333;
let x = 3;
for(i=0;i<3;i++){
   
    if(pass == Number(prompt(`Введіть ваш пароль. Залишилось спроб - ${x}.`)))
    {
    alert(`cloak`);
    break;
    }
    
    else{
        x--;
        alert(`no`);
    }
    if(x == 1){
        alert(`333`)
    }
};