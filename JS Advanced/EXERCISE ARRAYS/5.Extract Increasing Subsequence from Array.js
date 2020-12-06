solve = (arr) =>
    arr
        .slice(1)
        .reduce(
            (result, value) => {
                if (value >= result[result.length - 1]) {
                    result.push(value);
                }
                return result;
            },
            [arr[0]]
        )
        .join('\n')
console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
solve([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)