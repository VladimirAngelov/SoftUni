function solve(arr) {

    const speed = arr.shift();
    const area = arr.shift();

    switch (area) {
        case 'city':
            if (speed > 50 && speed <= 70) {
                console.log('speeding')
            } else if (speed > 70 && speed <= 90){
                console.log('excessive speeding');
            } else if (speed > 90) {
                console.log('reckless driving')
            } else if (speed <= 50) {
                console.log('');
            }
            break;
        case 'residential':
            if (speed > 20 && speed <= 40) {
                console.log('speeding')
            } else if (speed > 40 && speed <= 60){
                console.log('excessive speeding');
            } else if (speed > 60) {
                console.log('reckless driving')
            } else if (speed <= 20) {
                console.log('');
            }
            break;
        case 'interstate':
            if (speed > 90 && speed <= 110) {
                console.log('speeding')
            } else if (speed > 110 && speed <= 130){
                console.log('excessive speeding');
            } else if (speed > 130) {
                console.log('reckless driving')
            } else if (speed <= 90) {
                console.log('');
            }
            break;
        case 'motorway':
            if (speed > 130 && speed <= 150) {
                console.log('speeding')
            } else if (speed > 150 && speed <= 170){
                console.log('excessive speeding');
            } else if (speed > 170) {
                console.log('reckless driving')
            } else if (speed <= 130) {
                console.log('');
            }
            break;
    }
}

solve([40, 'city'])
solve([21, 'residential'])
solve([120, 'interstate'])
solve([200, 'motorway'])