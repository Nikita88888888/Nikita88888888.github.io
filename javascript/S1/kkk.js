﻿	let x = 0;
		if(confirm('Архонт Мондштадта, Венти?') == true){
			x= x+10;
			
		}
		if(confirm(`Паймон народилась 5 червня?`) == false){
			x= x+30;
			
		}
		if(confirm(`Сяо защитник якса?`) == true){
			x= x+10;
			
		}
		
		if(prompt(`Идеал Инадзуми?`) == `Вічність`||`Вечность`||`вічність`||`вечность`){
			x= x+15;
			
		}
		
		if(prompt(`Яким оком володіє Кадзуха?`) == `Анемо`||`анемо`){
			x= x+15;
			
		}
		if(prompt(`Скільки мори потрібно для возвищеня Делюка`) == `20000`||`20к`){
			x= x+20;
			
		}
if(x <= 10){	
alert(`Провалено ${x} балів`)
}else if(x <=50){
		alert(`Наполовину пройдено ${x} балів`)
}
else if(x <= 100){
		alert(`Пройдено ${x} балів`)
}