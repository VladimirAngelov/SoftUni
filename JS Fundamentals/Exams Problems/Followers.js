function solve(input) {

    let info = {};

    while ((line = input.shift()) !== 'Log out') {
        let [command, name, count] = line.split(': ');
        count = Number(count);

        if (command.includes('New')) {
            if (!info.hasOwnProperty(name)) {
                info[name] = {
                    likes: 0,
                    comments: 0,
                    total: 0
                }
            }
        } else if (command.includes('Like')) {
            if (!info.hasOwnProperty(name)) {
                info[name] = {
                    likes: count,
                    total: 0
                }
                info[name].total += count;
            } else {
                info[name].likes += count;
                info[name].total += count;
            }
        } else if (command.includes('Comment')) {
            if (!info.hasOwnProperty(name)) {
                info[name] = {
                    likes: 0,
                    comments: 1,
                }
                info[name].total = 1;
            } else {
                info[name].comments += 1;
                info[name].total += 1;
            }
        } else if (command.includes('Blocked')) {
            if (info.hasOwnProperty(name)) {
                delete info[name];
            } else {
                console.log(`${name} doesn't exist.`)
            }
        }
    }
    console.log(`${Object.keys(info).length} followers`)
    Object.entries(info)
        .sort((a, b) => {
            if (a[1].total === b[1].total) {
                return a[0].localeCompare(b[0]);
            } else {
                return b[1].likes - a[1].likes;
            }
        })
        .forEach(kvp => {
            console.log(`${kvp[0]}: ${kvp[1].total}`)
        })
}

solve([
    'New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out'
])