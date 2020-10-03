function listOfProducts(listArr) {

    let orderedList = listArr.sort();

    for (let i = 0; i < listArr.length; i++) {
        console.log(`${i + 1}.${orderedList[i]}`);
    }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])