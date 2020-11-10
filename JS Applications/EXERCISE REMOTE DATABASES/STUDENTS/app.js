const baseUrl = `https://students-37d10.firebaseio.com`;
const tBodyElement = document.querySelector('tbody');
const createElements = (...types) => types.map((type) => document.createElement(type));

const setStudents = (students) => {
    tBodyElement.innerHTML = '';

    tBodyElement.append(
        ...Object.values(students)
            .sort((a, b) => a.id - b.id)
            .map((s) => {
                const elements = createElements('tr', 'td', 'td', 'td', 'td', 'td');
                const [trEl, id, firstName, lastName, facultyNumber, grade] = elements;

                id.innerHTML = s.id;
                firstName.innerHTML = s.firstName;
                lastName.innerHTML = s.lastName;
                facultyNumber.innerHTML = s.facultyNumber;
                grade.innerHTML = s.grade;

                trEl.append(...elements.slice(1));
                return trEl;
            })
    );
};

fetch(`${baseUrl}/Students.json`)
    .then((res) => res.json())
    .then(setStudents);