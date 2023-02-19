/*let color = prompt(`color`);

if(color == 'Зелений'){
	alert(`Йди`)
	}	
	else if(color == 'жовтий'){
		alert(`пригутуйся`)
		}
		
	else if(color == 'червоний'){
		alert(`Стій`)
		}*/
		let x = 0;
		if(confirm(`2+2=4?`) == true){
			x++;
			
		}
		if(confirm(`6+6*6=17?`) == false){
			x++;
			
		}
		if(prompt(`3*5+4=19?`) == `19`){
			x++;
			
		}
		if(prompt(`2+8=10?`) == `10`){
			x++;
			
		}
alert(`Ви відповили ${x}`);


