import {auth, login, logout, registration, createPost, editPost, deletePost} from "./auth.js";
import {router} from "./router.js";

(() => {
    fetch(`/templates/header.hbs`)
        .then(res => res.text())
        .then(data => {
            const navTemplate = Handlebars.compile(data);
            Handlebars.registerPartial('header', navTemplate);
        })

    let path = window.location.pathname.split('/')[1];

    if (window.location.pathname.split('/').length > 4) {
        path = 'details'
    }
    const [detailsLocation, id] = window.location.href.split('/').slice(3)

    const routes = ['login', 'register', 'home', 'create', 'details', 'edit']

    auth.onAuthStateChanged(user => {
        if (user) {
            if (!routes.includes(path) || path === 'login') {
                history.pushState({id: 'home'}, '', '/home')
                router('home')
            } else if (path === '/') {
                history.pushState({id: 'home'}, '', '/home')
                router('home')
            } else if (path !== 'details' && path !== 'edit' && path !== 'home') {
                history.pushState({id: path}, '', '/' + path)
                router(path)
            } else {
                history.pushState({id: `${detailsLocation}/${id}`}, '', '/' + `${detailsLocation}/${id}`)
                router(path)
            }
        } else {
            if (!routes.includes(path)) {
                history.pushState({id: 'home'}, '', '/home')
                router('home')
            }

            if (path === 'login') {
                history.pushState({id: 'login'}, '', '/login')
                router('login')
            } else if (path === 'register') {
                history.pushState({id: 'register'}, '', '/register')
                router('register')
            } else if (path === 'home') {
                history.pushState({id: 'home'}, '', '/home')
                router('home')
            }
        }
    })
})()

const handler = (e) => {
    e.preventDefault();

    if (e.target.tagName === 'A') {
        if (e.target.textContent === 'Logout') {
            logout()
        } else {
            let path = e.target.href.split('/').slice(-1)[0]
            let id

            if (e.target.textContent === 'Details') {
                let [details, rawId] = e.target.href.split('/').slice(3)
                id = rawId;
                path = details;
                history.pushState({id: path}, '', '/' + path + '/' + id)
                router(path)
            } else if (e.target.textContent === 'Edit') {
                let [edit, rawId] = e.target.href.split('/').slice(3)
                id = rawId;
                path = edit;
                history.pushState({id: path}, '', `/${path}/${id}`)
                router(path)
            } else if (e.target.id === 'delete-button') {
                let id = e.target.dataset.id
                deletePost(id)
            } else {
                let path = e.target.href.split('/').slice(-1)[0]
                history.pushState({id: path}, '', '/' + path)
                router(path)
            }
        }
    } else if (e.target.id === 'edit-button') {
        let id = window.location.href.split('/').slice(-1)
        editPost(id)
    }
}

function authService(e) {
    e.preventDefault();

    if (e.target.tagName === 'BUTTON') {
        if (e.target.id === 'register-button') {
            registerUser()
        } else if (e.target.id === 'login-button') {
            loginUser()
        } else if (e.target.id === 'create-button') {
            createPost();
        }
    } else if (e.target.textContent === 'Logout') {
        logout()
    }
}

function registerUser() {
    const form = document.forms['register-form']
    const formData = new FormData(form)

    const email = formData.get('email')
    const password = formData.get('password')
    const repeatPassword = formData.get('repeatPassword')

    const notification = document.getElementById("register-notification")

    password === repeatPassword ? registration(email, password) : notification.style.display = 'block';
}

function loginUser() {
    const form = document.forms['login-form']
    const formData = new FormData(form)

    const email = formData.get('email')
    const password = formData.get('password')

    login(email, password)
}

export {handler, authService}