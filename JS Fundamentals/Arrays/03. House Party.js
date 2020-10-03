houseParty = (input) => {

    let guests = [];

    for (const infoLine of input) {
        let info = infoLine.split(' ');
        let name = info[0];

        if (!info.includes('not')) {


            if (!guests.includes(name)) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (guests.includes(name)) {
                guests = guests.filter((guestName) => guestName !== name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guests.join('\n'));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)