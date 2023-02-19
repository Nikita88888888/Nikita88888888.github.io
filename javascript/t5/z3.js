let x = [];
let name = [1,2,3,4,5];
let lol ='Петро';
let name3 = 'математика';
let mp3 = 0;
for(i=0;i<5;i++){
    x[i] = Number(prompt(`Яка у вас оцінка?`));
    mp3 = mp3 + x[i];
}
console.log(`Вітаю ${lol}!У вас 4 з предмету ${name3}. Остання оцінка-${x[x.length-1]}.Ваш середній бал з даного предмету- ${mp3/x.length}`);