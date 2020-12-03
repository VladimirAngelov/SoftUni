import {auth} from "./auth.js";
import {getArticle} from "./auth.js";
import {getArticleInfo} from "./auth.js";
import {getData} from "./auth.js";
import {handler} from "./main.js";
import {authService} from "./main.js";

const router = (path) => {
    const app = document.getElementById('root');
    app.addEventListener('click', handler)
    app.addEventListener('click', authService)
    const id = window.location.pathname.split('/').slice(-1)[0];
    let template;

    let templateData = {
        js: [],
        csharp: [],
        java: [],
        python: []
    };

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
                    Object.keys(res)
                        .map(key => {
                            if (res[key].category === 'JavaScript') {
                                templateData.js.push({key,...res[key]})
                            } else if (res[key].category === 'C#') {
                                templateData.csharp.push({key, ...res[key]})
                            } else if (res[key].category === 'Java') {
                                templateData.java.push({key, ...res[key]})
                            } else if (res[key].category === 'Python') {
                                templateData.python.push({key, ...res[key]})
                            }
                        })
                }).then(() => {
                app.innerHTML = template(templateData)
            })
            break;
        case 'details':
            getArticle(id)
                .then(data => {
                    data.key = id;
                    data.isAuthenticated = true;
                    data.userEmail === auth.currentUser.email ? data.sameUser = true : data.sameUser = false;
                    app.innerHTML = template(data)
                })
            break;
        case 'edit':
            getArticleInfo(id)
                .then((data) => {
                    data.isAuthenticated = true;
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