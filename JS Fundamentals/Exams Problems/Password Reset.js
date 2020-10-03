function solve(input) {
    let password = input.shift()
    let tempPassword = '';
    let line = input.shift();

    while (line !== 'Done') {
        let [command, index, length] = line.split(' ');
        switch (command) {
            case 'TakeOdd':
                for (let i = 1; i < password.length; i += 2) {
                    tempPassword += password[i];
                }
                console.log(tempPassword);
                password = tempPassword;
                break;
            case 'Cut':
                index = Number(index);
                length = Number(length)

                let substring = password.substring(index, index + length)
                password = password.replace(substring, '');
                console.log(password)
                break;
            case 'Substitute':
                tempPassword = password;

                while (tempPassword.includes(index)) {
                    tempPassword = tempPassword.replace(index, length);
                }

                if (password.includes(index)) {
                    console.log(tempPassword)
                } else {
                    console.log(`Nothing to replace!`);
                }
                password = tempPassword;

                break;
        }
        line = input.shift();
    }
    console.log(`Your password is: ${password}`);
}

solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
])