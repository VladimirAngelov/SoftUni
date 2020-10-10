function deleteByEmail() {
    let input = document.querySelector('input[name ="email"]').value;
    let result = document.getElementById('result')
    let customerEmails = document.querySelectorAll('#customers td:nth-of-type(2)')
    let isDeleted = false;

    for (const customer of customerEmails) {

        if (customer.textContent === input) {
            customer.parentElement.remove();
            isDeleted = true;
        }
    }
    if (!isDeleted) {
        result.textContent = 'Not found.'
    }
}
