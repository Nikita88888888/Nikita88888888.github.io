function drawCards(array){
let cards = document.getElementById('cards');
let phonel = '';
array.map(function(phone){
//console.log(phone)
if(phone.action){
    acti = '<div class="action">Акція</div>'
}else{
    acti = ''
}
phonel += `
<div class="card">
    ${acti}
<img src="${phone.image}" class="card-img-top">
<div class="card-body">
    <h6 class="card-title">${phone.name}</h6>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>Виробник:</b> <span>${phone.developer}</span></li>
        <li class="list-group-item"><b>Відгуків:</b> <span>${phone.reviews}</span></li>
        <li class="list-group-item"><b>Ціна:</b> <span>${phone.price}₴</span></li>
    </ul>
</div>
<div class="card-body price">
    <a href="#" class="card-link">В корзину</a>
    <a href="#" class="card-link">Придбати</a>
  </div>
</div>
`
})

cards.innerHTML = phonel;
}
drawCards(phones)

function findDevelopers(){
    let developerl = [];
    phones.map(function(phone){
        phone.developer
        if(developerl.indexOf(phone.developer) == -1){
        developerl.push(phone.developer)
        }
    })
    console.log(developerl)
    let datalistOptions = document.getElementById('datalistOptions');
    let optionl = '';
developerl.map(function(dev){
    optionl += `
    <option value="${dev}">
    `
})
    datalistOptions.innerHTML = optionl
}
findDevelopers()

function saveFilter(){
    let filtered = {
        developer:document.getElementById('developer').value,
        max_price:document.getElementById('max').value,
        min_price:document.getElementById('min').value,
        name:document.getElementById('name').value,
        order:document.getElementById('order').value
    }
    console.log(filtered)
    localStorage.setItem('settings', JSON.stringify(filtered))
    showProducts(filtered)
}
function showProducts(filter_obj){
    let new_phones = phones.slice();
    if (filter_obj.name.length > 0){
        new_phones = new_phones.filter(function(phone){
        return  phone.name.includes(filter_obj.name)

        })

    }
    if (filter_obj.developer.length > 0){
        new_phones = new_phones.filter(function(phone){
        return  phone.developer == filter_obj.developer

        })
    }
        if (filter_obj.min_price.length > 0){
            new_phones = new_phones.filter(function(phone){
            return  phone.developer >= filter_obj.min_price
    
            })
        }
            if (filter_obj.max_price.length > 0){
                new_phones = new_phones.filter(function(phone){
                return  phone.developer <= filter_obj.max_price
        
                })
            }
    if(filter_obj.order > 0 && filter_obj.order == 'reviews')
    {new_phones = new_phones.sort(function(a,b){
        return a.reviews-b.reviews
    })}
    if(filter_obj.order > 0 && filter_obj.order == 'price')
    {new_phones = new_phones.sort(function(a,b){
        return a.price-b.price
    })}
drawCards(new_phones)

}
let filtered =   JSON.parse(localStorage.getItem('settings'))

if(filtered){
    showProducts(filtered)
}else{
    drawCards(phones)
}