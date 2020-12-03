import {auth, getData, getPost} from "./auth.js";
import {handler, authService} from "./app.js";

const router = (path) => {
    const app = document.getElementById('root');
    app.addEventListener('click', handler)
    app.addEventListener('click', authService)
    const id = window.location.pathname.split('/').slice(-1)[0];
    let template;

    let templateData = {};

    auth.onAuthStateChanged(user => {
        if (user) {
            templateData.isAuthenticated = true;
            templateData.email = user.email;
        } else {
            templateData.isAuthenticated = false;
            templateData.email = '';
        }
        if (template) {
            app.innerHTML = template(templateData)
        }
    })
    fetch(`/templates/${path}.hbs`)
        .then(res => res.text())
        .then(data => {
            template = Handlebars.compile(data);
            app.innerHTML = template(templateData)
        })
    switch (path) {
        case 'home':
            getData()
                .then((res) => {
                    templateData.posts = Object.keys(res)
                        .map(key => ({key, ...res[key]}))
                }).then(() => {
                app.innerHTML = template(templateData)
            })
            break;
        case 'details':
            getPost(id)
                .then(data => {
                    data.key = id;
                    data.userEmail === auth.currentUser.email ? data.sameUser = true : data.sameUser = false;
                    app.innerHTML = template(data)
                })
            break;
        case 'edit':
            getPost(id)
                .then((data) => {
                    app.innerHTML = template(data)
                })
            break;
    }
}

window.addEventListener('popstate', function () {
    const stateId = history.state.id;
    if (stateId) {
        router(stateId)
    } else {
        router('home')
    }
})

export {router}