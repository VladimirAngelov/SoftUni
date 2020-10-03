function solve(input) {
    let username = input.shift()

    // let tokens = input.shift()

    while ((line = input.shift()) !== 'Sign up') {

        let [command, firstArg, secondArg] = line.split(' ')

        switch (command) {
            case 'Case':

                if (firstArg === 'lower') {
                    username = username.toLowerCase()
                } else {
                    username = username.toUpperCase()
                }
                console.log(username)
                break;

            case 'Reverse':

                let startIndex = +firstArg
                let endIndex = +secondArg

                if (username[startIndex] !== undefined && username[endIndex] !== undefined) {
                    let replaced = username.substring(startIndex, endIndex + 1).split("").reverse().join("")
                    console.log(replaced)
                }
                break;

            case "Cut":

                if (username.includes(firstArg)) {
                    username = username.replace(firstArg, "")
                    console.log(username)
                } else {
                    console.log(`The word ${username} doesn't contain ${firstArg}.`)
                }
                break;

            case "Replace":

                let index = username.indexOf(firstArg)

                while (index > -1) {
                    username = username.replace(firstArg, "*")
                    index = username.indexOf(firstArg)
                }
                console.log(username)
                break;

            case "Check":

                if (username.includes(firstArg)) {
                    console.log("Valid")
                } else {
                    console.log(`Your username must contain ${firstArg}.`)
                }
        }
        // tokens = input.shift()
    }
}
solve([
    'ThisIsMyString',
    'Reverse 1 4',
    'Replace i',
    'Cut My',
    'Sign up'
])