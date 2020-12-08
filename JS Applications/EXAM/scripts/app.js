import {auth, login, logout, createUser, create, deleteDestination, editDestination} from "./auth.js";
import {navigation} from "./router.js";

let currentUser = null;

(() => {
    fetch(`/templates/header.hbs`)
        .then(res => res.text())
        .then(data => {
            const navTemplate = Handlebars.compile(data);
            Handlebars.registerPartial('header', navTemplate);
        })

    fetch(`/templates/notifications.hbs`)
        .then(res => res.text())
        .then(data => {
            const notifications = Handlebars.compile(data);
            Handlebars.registerPartial('notifications', notifications);
        })

    fetch(`/templates/footer.hbs`)
        .then(res => res.text())
        .then(data => {
            const footerTemplate = Handlebars.compile(data);
            Handlebars.registerPartial('footer', footerTemplate);
        })

    let path = window.location.pathname.split('/')[1];

    if (window.location.pathname.split('/').length > 4) {
        path = 'details'
    }
    const [detailsLocation, id] = window.location.href.split('/').slice(3)

    const routes = ['login', 'register', 'home', 'create', 'details', 'edit', 'destinations']

    auth.onAuthStateChanged(user => {
        currentUser = user;

        if (user) {
            if (!routes.includes(path) || path === 'login' || path === 'register' || path === '/') {
                navigation('home', 'home', user)
            } else if (path !== 'details' && path !== 'edit') {
                navigation(path, id, user)
            } else {
                navigation(detailsLocation, `${detailsLocation}/${id}`, user)
            }
        } else {
            if (!routes.includes(path)) {
                navigation('home', 'home', null)
            }

            if (path === 'login' || path === 'register' || path === 'home') {
                navigation(path, path, null)
            } else {
                navigation('home', 'home', null)
            }
        }
    })
})()

const handler = (e) => {
    e.preventDefault();

    if (e.target.tagName === 'A') {
        if (e.target.textContent === 'Logout') {
            logout()
            navigation('home', 'home', currentUser)
        } else {
            let id = window.location.pathname.split('/').slice(-1)[0]

            if (e.target.id === 'delete-button') {
                id = e.target.dataset.idid
                deleteDestination(id)
            } else if (e.target.href.split('/')[3] === 'edit') {
                const [edit, id] = e.target.href.split('/').slice(3)
                navigation(edit, `${edit}/${id}`, currentUser)
            } else if (e.target.href.split('/')[3] === 'details') {
                const [details, id] = e.target.href.split('/').slice(3)
                navigation(details, `${details}/${id}`, currentUser)
            } else {
                const path = e.target.href.split('/').slice(-1)[0]
                navigation(path, path, currentUser)
            }
        }
    } else {
        if (e.target.id === 'edit-button') {
            const id = window.location.href.split('/').slice(-1)
            editDestination(id)
        } else if (e.target.id === 'create-button') {
            create()
        } else if (window.location.pathname === '/home' && e.target.tagName === 'IMG') {
            if (e.target.parentElement.href.split('/')[3] === 'details') {
                const [details, id] = e.target.parentElement.href.split('/').slice(3)
                navigation(details, `${details}/${id}`, currentUser)
            }
        }
    }
}

function authService(e) {
    e.preventDefault();

    if (e.target.tagName === 'BUTTON') {
        if (e.target.id === 'create-button') {
            create();
        }
    } else if (e.target.id === 'logout') {
        logout()
    } else if (e.target.id === 'login-button') {
        login()
    } else if (e.target.id === 'register-button') {
        createUser()
    }
}

export {handler, authService}