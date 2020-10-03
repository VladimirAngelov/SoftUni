function solve(input) {

    let obj = {};
    let capacity = Number(input.shift());

    for (const line of input) {
        if (line.includes('=')) {
            let [command, name, first, second] = line.split('=')

            switch (command) {
                case 'Add':
                    let sent = Number(first);
                    let received = Number(second);
                    if (!obj.hasOwnProperty(name)) {
                        obj[name] = {sent: sent, received: received}
                    }
                    break;
                case 'Message':
                    if (obj.hasOwnProperty(name) && obj.hasOwnProperty(first)) {
                        obj[name].sent += 1;
                        obj[first].received += 1;
                        if ((obj[name].sent + obj[name].received) >= capacity) {
                            delete obj[name];
                            console.log(`${name} reached the capacity!`)
                        }
                        if ((obj[first].received + obj[first].sent) >= capacity) {
                            delete obj[first];
                            console.log(`${first} reached the capacity!`)
                        }
                    }
                    break;
                case 'Empty':
                    if (obj.hasOwnProperty(name)) {
                        delete obj[name];
                    }
                    if (name === 'All') {
                        obj = {};
                    }
                    break;
            }
        } else {
            break;
        }
    }
    console.log(`Users count: ${Object.keys(obj).length}`)
    Object.entries(obj)
        .sort((a, b) => b[1].received - a[1].received
            || a[0].localeCompare(b[0]))
        .forEach(kvp => console.log(`${kvp[0]} - ${kvp[1].received + kvp[1].sent}`))
}

solve([
    '20',
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
    'Add=Amy=9=9',
    'Message=Blake=Amy',
    'Message=Michael=Amy',
    'Statistics'
])