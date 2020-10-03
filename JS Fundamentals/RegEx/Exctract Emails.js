function solve(input) {

    let pattern = /^\b(?<user>[^.-_][a-z.-]+)@(?<site>[^.-_][\w-.]*[.?][\w]{2,})/g
    input[0].split(' ').forEach(word => {
        if (word.match(pattern)) {
            let result = pattern.exec(word)
            console.log(result[0])
        }
    })
}
solve([ 'Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.'])