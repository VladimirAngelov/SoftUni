solution = (input) => {

    input.sort(customSort);

    console.log(input.join('\n'));

    function customSort(a, b) { // сортираме стрингове
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            return a.localeCompare(b); // сортираме стрингове по азбучен ред
        }
    }
}
solution(["alpha", "beta", "gamma"])