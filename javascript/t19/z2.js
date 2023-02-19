function text(){
    let stored_test = document.getElementById('stored_test');
    let text = document.getElementById('text').value;
 localStorage.setItem('ovl',text);
 stored_test.innerHTML = text;
}

