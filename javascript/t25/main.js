let cards = document.getElementById ('cards');
showProdsInCart()
phones.map(function(telephone, index){
    cards.innerHTML += `
    <div class="card">
    <img src="${telephone.image}" class="card-img-top">
    <div class="card-body">
        <h6 class="card-title">${telephone.name}</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Виробник:</b> <span>${telephone.developer}</span></li>
            <li class="list-group-item"><b>Відгуків:</b> <span>${telephone.reviews}</span></li>
            <li class="list-group-item"><b>Ціна:</b> <span>${telephone.price}₴</span></li>
        </ul>
    </div>
    <div class="card-body price">
        <a href="#" class="card-link" onclick='addToCart(${index})'>В корзину</a>
        <a href="#" class="card-link">Придбати</a>
      </div>
</div>
    `
})

function addToCart(index){
  let cart_new = getCartProducts();
  cart_new.push(phones[index])
  localStorage.setItem('cart', JSON.stringify(cart_new))
  showProdsInCart()
}
function  getCartProducts(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(cart === null){
    return [];
    }else{
        return cart;
    }
}
console.log(getCartProducts())

function  showProdsInCart(){
    document.getElementById('prod_in_card').innerHTML = `(${getCartProducts().length})`
}