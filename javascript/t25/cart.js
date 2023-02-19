let price = 0;
function drawPhones(){
    let phone_array = JSON.parse(localStorage.getItem('cart'))
    let cart_table = document.getElementById('cart_table');
    phone_array.map(function(phone,index){
        cart_table.innerHTML += `
<tbody id="cart_table">
<tr>
  <th scope="row">${index+1}</th>
  <td>
      <img src="" class="cart-img">
  </td>
  <td>${phone.name}</td>
  <td>${phone.price}₴</td>
  <td class="text-center"><button class="btn btn-danger">x</button></td>
</tr> ` 


price = price + phone.price
})

document.getElementById('zag_price').innerHTML = `Загльна вартість - ${price} грн. <br> <button class="btn btn-success mt-4">Придбати</button>`
}
drawPhones()