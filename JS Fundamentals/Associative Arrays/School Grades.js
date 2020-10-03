function schoolGrades(input) {
    let students = new Map();

    for (const line of input) {
        let lineArr = line.split(' ');
        let name = lineArr.shift();
        let grades = lineArr.map(Number);

        if (students.has(name)) {
            let oldGrades = students.get(name);
            let allGrades = oldGrades.concat(grades);

            students.set(name, allGrades);
        } else {
            students.set(name, grades);
        }
    }
    let studentEntries = Array.from(students.entries());
    let sortedStudents = studentEntries.sort((a, b) => {
        let studentGradeA = a[1];
        let studentGradeB = b[1];
        let averageGradeA = getAverageGrade(studentGradeA)
        let averageGradeB = getAverageGrade(studentGradeB)

        return averageGradeA - averageGradeB;
    })

    function getAverageGrade(grades) {
        let average = grades.reduce((a, b) => a + b) / grades.length;
        return average;
    }

    for (const kvp of sortedStudents) {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`)
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)