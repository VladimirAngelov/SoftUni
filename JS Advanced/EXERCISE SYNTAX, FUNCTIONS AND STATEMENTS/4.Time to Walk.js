function solve(steps, lengthInMeter, speed) {

    let distance = steps * lengthInMeter;
    let speedInMeters = speed / 3.6;

    let rest = Math.floor(distance / 500);
    let time = distance / speedInMeters + rest * 60;

    let timeInHours = Math.floor(time / 3600)
    let timeInMinutes = Math.floor(time / 60);
    let timeInSeconds = Math.ceil(time % 60);

    if (timeInHours < 10) {
        console.log(`${timeInHours < 10 ? 0 : ''}${timeInHours}:${timeInMinutes < 10 ? 0 : ''}${timeInMinutes}:${timeInSeconds < 10 ? 0 : ''}${timeInSeconds}`);
    } else {
        console.log(`${timeInHours}:${timeInMinutes}:${timeInSeconds}`);
    }
}
solve(4000, 0.60, 5)