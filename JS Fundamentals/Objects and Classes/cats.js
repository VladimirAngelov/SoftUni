function cats(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    let cats = input.map(x => { // вместо цикъла отдолу
        let [name, age] = x.split(' ');

        let cat = new Cat(name, Number(age));
        return cat;
    })
    cats.forEach(x => x.meow());

    // for(let i = 0; i < input.length; i++){
    //     let [name, age] = input[i].split(' ');
    //
    //     let cat = new Cat(name, Number(age));
    //     cats.push(cat);
    // }

}
cats(['Mellow 2', 'Tom 5'])