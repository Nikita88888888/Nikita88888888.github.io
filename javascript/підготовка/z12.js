let jojo = [];
for(i=1;i<100;i++){
jojo.push(`што-то ${i}`)
}
console.log(jojo)

let table = document.getElementById(`table`);
let lol = ``;

for(i=0;i<jojo.length;i++){
    if(i%2){
        lol += `
        <tr>
            <td>${i+1}</td>
            <td>${jojo[i]}</td>
        </tr>
        `}else{ 
            lol += `
            <tr class = "blue">
                <td>${i+1}</td>
                <td>${jojo[i]}</td>
            </tr>
      ` }
     
      `}else if(i%7=0){
        lol += `
        <tr class = "maroon">
            <td>${i+1}</td>
            <td>${jojo[i]}</td>
        </tr>
  ` }

      


        


      }
    
table.innerHTML = lol;