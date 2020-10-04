function addItem() {
    let text = document.getElementById('newItemText');
    let data = document.getElementById('newItemValue');

    let select = document.getElementById('menu');

    // First method
    let option2 = document.createElement('option')
    option2.value = data.value;
    option2.innerText = text.value;
    select.appendChild(option2);

    // Second method
    // let option = `<option value ="${data.value}">${text.value}</option>`;
    // select.innerHTML += option;

    text.value = '';
    data.value = '';
}