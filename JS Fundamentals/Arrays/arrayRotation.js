function arrayRotation(arr, num) {

    let result = [];
    let rotations = num % arr.length;

    for (let index in arr) {
        if (index >= rotations) {
            let element = arr[index];
            result.push(element);
        }
    }
    for (const index in arr) {
        if (index < rotations) {
            let element = arr[index];
            result.push(element);
        } else {
            break;
        }
    }
    console.log(result.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)