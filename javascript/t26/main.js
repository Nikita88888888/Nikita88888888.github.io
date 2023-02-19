function drawCards(){
let number = document.getElementById('number').value;
let cards = document.getElementById('cards');
let cards_html = '';

for(i=0;i<number;i++){
cards_html += `
            <div class="card">
                <div class="card-body">
                <p class="card-text">Card ${i+1}</p>
                </div>
            </div>
`
}
cards.innerHTML = cards_html;
click_card()
}

function click_card(){
   let cards = Array.from(document.getElementsByClassName('card'))
   cards.map(function(card){
    card.addEventListener('click',function(){
        card.classList.add('anim-card')
    })

   })
   
   
}
