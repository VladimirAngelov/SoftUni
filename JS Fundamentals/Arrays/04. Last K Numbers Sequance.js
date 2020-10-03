solution = (n, k) => {

    let result = [1];
    
    
    for (let i = 0; result.length < n; i++) {
        let kSumPreviousA = result.length;
        if(result.length < k) {
            kSumPreviousA = result.length;
        } else {
            kSumPreviousA = k;
        }
        let currentNum = result.slice(result.length - kSumPreviousA, result.length).reduce((a, b) => a+b);
        result.push(currentNum);
    }
    console.log(result.join(' '));
}
solution(6, 3);