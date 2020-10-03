function companyUsers(input) {

    let map = new Map();

    input.forEach(line => {
        let company = line.split(' -> ')[0];
        map.set(company, '');
    })

    let sortedCompanies = Array.from(map).sort((a, b) => a[0].localeCompare(b[0]));
    sortedCompanies.forEach(el => {
        let users = [];
        console.log(el[0]);

        for (const kvp of input) {
            let [currentCompany, user] = kvp.split(' -> ');

            if (currentCompany === el[0] && !users.includes(user)) {
                console.log(`-- ${user}`);
                users.push(user);
            }
        }
    })
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])
console.log(' ');

companyUsers([
        'SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345'
    ]
)