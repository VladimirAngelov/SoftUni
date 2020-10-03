function solve(input) {
    let obj = {};
    let n = Number(input.shift())

    for (let i = 0; i < n; i ++) {
        let getValues = input.shift();
        let [piece, composer, key] = getValues.split('|');

        if (!obj.hasOwnProperty(piece)) {
            obj[piece] = {
                composer: composer,
                key: key
            }
        }
    }

    while ((line = input.shift()) !== 'Stop') {
        let [command, piece, composer, key] = line.split('|');

        if (command ==='Add') {

            if (obj.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`)
            } else {
                obj[piece] = {
                    composer: composer,
                    key: key
                }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            }
        } else if (command === 'Remove') {
            if (obj.hasOwnProperty(piece)) {
                delete obj[piece];
                console.log(`Successfully removed ${piece}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        } else if (command === 'ChangeKey') {
            let changedKey = composer;

            if (obj.hasOwnProperty(piece)) {
                obj[piece].key = changedKey;
                console.log(`Changed the key of ${piece} to ${changedKey}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
    }
    Object.entries(obj)
        .sort((a,b) => a[0].localeCompare(b[0])
        || a[1].composer.localeCompare(b[1].composer))
        .forEach(kvp => console.log(`${kvp[0]} -> Composer: ${kvp[1].composer}, Key: ${kvp[1].key}`))
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])