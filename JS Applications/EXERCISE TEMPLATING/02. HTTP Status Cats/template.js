const sectionToAppend = document.getElementById('allCats');

const catView = document.getElementById('cat-template').innerHTML;

const catTemplate = Handlebars.compile(catView);

const catsHtml = catTemplate({cats})

sectionToAppend.innerHTML = catsHtml

sectionToAppend.addEventListener('click', e => {
     const button = e.target.parentElement.querySelector('button');
     const info = e.target.parentElement.querySelector('.status');
     if (e.target.type === 'submit') {

          if(button.textContent === 'Hide status code.') {
               button.textContent = 'Show status code';
               info.style.display = 'none';
          } else {
               button.textContent = 'Hide status code.';
               info.style.display = 'block';
          }
     }
})