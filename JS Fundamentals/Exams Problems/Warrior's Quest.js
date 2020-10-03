function solve(input) {

    let skill = input.shift();
    let tokens = input.shift();

    while (tokens !== 'For Azeroth') {
        let commands = tokens.split(' ');

        if (tokens === 'GladiatorStance') {
            skill = skill.toUpperCase();
            console.log(skill)
        } else if (tokens === 'DefensiveStance') {
            skill = skill.toLowerCase();
            console.log(skill)
        } else if (commands[0] === 'Dispel') {
            let index = commands[1];
            let letter = commands[2];
            let oldLetter = skill[index];

            if (oldLetter !== undefined) {
                skill = skill.replace(oldLetter, letter);
                console.log('Success!')
            } else {
                console.log('Dispel too weak.')
            }
        } else if (commands[1] === 'Change' && commands[0] === 'Target') {
            let firstSubstring = commands[2];
            let secondSubstring = commands[3];
            for (let i = 0; i < tokens.length; i ++) {
                skill = skill.replace(firstSubstring, secondSubstring);
            }
            console.log(skill)
        } else if (commands[1] === 'Remove' && commands[0] === 'Target') {
            let substring = commands[2];
            skill = skill.replace(substring, '');
            console.log(skill);
        } else {
            console.log(`Command doesn't exist!`);
        }

        tokens = input.shift();
    }
}

solve([
    'DYN4MICNIC',
    'Target Remove NIC',
    'Dispel 3 A',
    'DefensiveStance',
    'Target Change d D',
    'target change D d',
    'For Azeroth'
])