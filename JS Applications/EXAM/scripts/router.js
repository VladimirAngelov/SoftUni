import {handler, authService} from "./app.js";
import {auth, getData, getOne} from "./auth.js"

const router = (path, user) => {
    const app = document.getElementById('root');
    app.addEventListener('click', handler)
    app.addEventListener('click', authService)
    const id = window.location.pathname.split('/').slice(-1)[0];
    let template = undefined;

    const templateData = {};

    if (user) {
        templateData.user = user;
    }

    fetch(`/templates/${path}.hbs`)
        .then(res => res.text())
        .then(data => {
            template = Handlebars.compile(data);
            app.innerHTML = template(templateData)
        })

    if (path === 'home') {
        getData()
            .then((res) => {
                if (res) {
                    templateData.destinations = Object.keys(res)
                        .map(key => ({key, ...res[key]}))
                }
            }).then(() => {
            app.innerHTML = template(templateData)
        })
    } else if (path === 'details') {
        getOne(id)
            .then(data => {
                data.key = id;
                data.user = user;
                data.userEmail === user.email ? data.sameUser = true : data.sameUser = false;

                app.innerHTML = template(data)
            })
    } else if (path === 'edit') {
        getOne(id)
            .then(data => {
                data.key = id;
                data.user = user;
                app.innerHTML = template(data);
            })
    } else if (path === 'destinations') {
        templateData.myDestinations = []
        getData()
            .then((res) => {
                Object.keys(res)
                    .map(key => {
                        if (res[key].userEmail === user.email) {
                            templateData.myDestinations.push({key, ...res[key]})
                        }
                    })
            }).then(() => {
            app.innerHTML = template(templateData)
        })
    }
}

const navigation = (path, id, user) => {
    if (path === 'details' || path === 'edit') {
        history.pushState({id: path}, '', `/${id}`)
        router(path, user)
    } else {
        history.pushState({id}, '', `/${path}`)
        router(path, user)
    }
}

window.addEventListener('popstate', function () {
    const stateId = history.state.id;
    const user = auth.currentUser;

    if (stateId) {
        router(stateId, user)
    } else {
        router('home', user)
    }
})

export {router, navigation}