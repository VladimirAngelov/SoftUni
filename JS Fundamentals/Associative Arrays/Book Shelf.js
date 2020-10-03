function solve(arr) {

    let obj = {};
    let shelfs = [];

    arr.forEach(line => {
        if (line.includes('->')) {
            let [id, genre] = line.split(' -> ');
            id = +id;

            if (!obj.hasOwnProperty(id)) {
                obj[id] = {}
                if (!obj[id].hasOwnProperty(genre)) {
                    obj[id][genre] = {};
                }
                shelfs.push(id);
            }
        } else if (line.includes(':')) {
            let book = line.split(':')[1];
            let genre = book.split(', ')[1];
            let addBook = line.split(', ')[0];

            shelfs.forEach(id => {
                if (obj[id].hasOwnProperty(genre)) {
                    obj[id][genre][addBook] = ''
                }
            })
        }
    })

    // TODO calc the books for each genre

    Object.entries(obj)
        .forEach(entry => {
            Object.keys(entry[1]).forEach(key => {
                console.log(entry[0], key, Object.values(entry[1][key]).length)
                Object.entries(entry[1][key]).forEach(book => {
                    console.log(`--> ${book.join(' ')}`)
                })
            })
        })
}

solve([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'])