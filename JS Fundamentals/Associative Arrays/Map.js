let contacts = new Map();

contacts.set('John Smith', '+134323432');
contacts.set('Jane Doe', '+246543345');
console.log(contacts)
console.log(contacts.get('Jane Doe')) // Взимаме номера

contacts.delete('Jane Doe'); // Изтриваме даден KVP


if (contacts.has('Jane Doe')) { // Проверява дали съществува Jane Doe
    console.log(`Found her!`);
    console.log(contacts.get('Jane Doe')); // Отново взима номера ѝ
} else {
    console.log(`Not found!`)
}

// Итерираме Мап
for (const value of contacts.values()) {
    console.log(value)
}
for (const kvp of contacts.entries()) {
    console.log(kvp)
    console.log(kvp[0]);
}

let keysArray = Array.from(contacts.values()); // Връща масив от values

// contacts.clear(); // Трием всичко в Мапа