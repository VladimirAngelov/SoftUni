function solve(array, func) {
    let mappedArray = array.reduce((acc, curr) => {
        acc.push(func(curr))

        return acc;
    }, [])
    return mappedArray;
}

