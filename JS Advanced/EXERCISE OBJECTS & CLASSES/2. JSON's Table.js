solve = (input) => {
    let output = '<table>\n';

    let employees = [];

    input.forEach(e => {
        employees.push(JSON.parse(e));
    })

    output += arrayAsTable(employees) + '</table>';

    function arrayAsTable(employees) {
        let result = '';

        employees.forEach(e => {
            result += '\t<tr>\n'

            Object.values(e).forEach(val => {
                result += `\t\t<td>${val}</td>\n`;
            })

            result += '\t</tr>\n';

        })
        return result;
    }
    return output;
}
console.log(solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
))