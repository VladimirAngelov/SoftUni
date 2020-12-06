function create(words) {
    let content = document.getElementById('content')

    for (let i = 0; i < words.length; i++) {
        let divElement = `<div class="section"><p id="paragraph" style="display: none">${words[i]}</p></div>`
        content.innerHTML += divElement;
    }
    content.addEventListener('click', (e) => {
        if (e.target.tagName === 'DIV') {
            e.target.firstElementChild.style.display = 'block';
        }
    })
}