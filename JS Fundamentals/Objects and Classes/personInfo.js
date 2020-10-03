personInfo = (firstName, lastName, age) => {
    let person = {
        firstName:  firstName,
        lastName: lastName,
        age: age
    }
    for (const key in person) {
        console.log(`${key}: ${person[key]}`); // зад ${key} стои firstName ключа
    }
}
personInfo("Petar", "Pan", 20)