function solve(num, num1) {

    let gcd = function(num, num1) {
        if ( ! num1) {
            return num;
        }

        return gcd(num1, num % num1);
    };
    console.log(gcd(num, num1));
}
solve(15, 5)