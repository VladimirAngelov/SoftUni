function createArticle() {
    let titleInputElement = document.getElementById('createTitle');
    let contentInputElement = document.getElementById('createContent');
    let articleSectionElement = document.getElementById('articles');

    if (titleInputElement.value.length > 0 && contentInputElement.value.length > 0) {
        let headingElement = document.createElement('h3');
        headingElement.textContent = titleInputElement.value;

        let contentElement = document.createElement('p');
        contentElement.textContent = contentInputElement.value;

        let articleElement = document.createElement('article');
        articleElement.appendChild(headingElement);
        articleElement.appendChild(contentElement);

        articleSectionElement.appendChild(articleElement);

        contentInputElement.value = '';
        titleInputElement.value = ''
    }
}