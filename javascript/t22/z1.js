function drawCards(){
    let cards = document.getElementById(`cards`);
    let cards_num = document.getElementById(`cards_num`).value;
    let cards_mk = ``;
for(i=0;i<cards_num;i++){
    cards_mk += `
    <div class="card">
    <div class="card-body my-2">
      <h5 class="card-title">Card ${i+1}</h5>
    </div>
  </div>
    `
}

    cards.innerHTML = cards_mk;
}

function change_color(){
    let cards_text = document.getElementById(`cards_text`).value;
    let cards_kj = document.getElementsByClassName(`card`)
    let edit_order = document.getElementById(`edit_order`).value;
    Array.from(cards_kj).map(function(kartoplya, index){
        if((index+1) % edit_order == 0){
        kartoplya.style.color = cards_text;
        }
    })
}
function change_bg(){
    let cards_fon = document.getElementById(`cards_fon`).value;
    let cards_kj = document.getElementsByClassName(`card`)
    Array.from(cards_kj).map(function(kartoplya){
        kartoplya.style.background = cards_fon;
    })
}
function delete_cards(){
    document.getElementById(`cards`).innerHTML = ``;
}
function delete_style(){
    let cards_kj = document.getElementsByClassName(`card`)
    Array.from(cards_kj).map(function(kartoplya){
        kartoplya.style.background = ``;
        kartoplya.style.color = ``;
 })
}

