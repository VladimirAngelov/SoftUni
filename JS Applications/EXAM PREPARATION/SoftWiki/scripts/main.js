import {router} from './router.js'
import {auth} from "./auth.js";
import {register} from "./auth.js";
import {login} from "./auth.js";
import {deleteArticle} from "./auth.js";
import {logout} from "./auth.js";
import {create} from "./auth.js";
import {editArticle} from "./auth.js";

(() => {
    fetch(`/templates/header.hbs`)
        .then(res => res.text())
        .then(data => {
            const navTemplate = Handlebars.compile(data);
            Handlebars.registerPartial('header', navTemplate);
        })

    let path = window.location.pathname.split('/')[1];
    const routes = ['login', 'register', 'home', 'create', 'details', 'edit']

    auth.onAuthStateChanged(user => {
        if (user) {
            if (!routes.includes(path) || path === 'login') {
                history.pushState({id: 'home'}, '', '/home')
                router('home')
            } else if (path === '/') {
                history.pushState({id: 'home'}, '', '/home')
                router('home')
            } else if (path !== 'details' && path !== 'edit') {
                history.pushState({id: path}, '', '/' + path)
                router(path)
            } else {
                const [detailsLocation, id] = window.location.href.split('/').slice(3)
                history.pushState({id: `${detailsLocation}/${id}`}, '', '/' + `${detailsLocation}/${id}`)
                router(detailsLocation)
            }
        } else {
            if (!routes.includes(path)) {
                history.pushState({id: 'login'}, '', '/login')
                router('login')
            }
            path = 'login'
            history.pushState({id: path}, '', '/login')

            router(path)
        }
    })
})();

function handler(e) {
    e.preventDefault();

    if (e.target.tagName === 'A') {
        if (e.target.textContent === 'Logout') {
            router('login')
        } else {
            let id;
            let path = e.target.href.split('/').slice(-1)[0]
            if (e.target.textContent === 'Details') {
                let [details, rawId] = e.target.href.split('/').slice(3)
                id = rawId;
                path = details;
                history.pushState({id: path}, '', '/' + path + '/' + id)
                router(path)
            } else if(e.target.textContent === 'Edit') {
                let [details, rawId] = e.target.href.split('/').slice(3)
                id = rawId;
                path = details;
                history.pushState({id: path}, '', '/' + path + '/' + id)
                router(path)
            } else if (e.target.textContent === 'Delete') {
                let id = window.location.pathname.split('/').slice(-1)[0];
                deleteArticle(id)
            }
            else {
                history.pushState({id: path}, '', '/' + path)
                router(path)
            }
        }
    }
}

function createUser() {
    const form = document.forms['register-form'];
    const newForm = new FormData(form)

    const email = newForm.get('email')
    const password = newForm.get('password')
    const repeatPassword = newForm.get('rep-pass')

    if (password === repeatPassword) {
        register(email, password)
    } else {
        const notification = document.getElementById('register-notification')
        notification.style.display = 'block';
    }
}

function loginUser() {
    const form = document.forms['login-form'];
    const newForm = new FormData(form)

    const email = newForm.get('email')
    const password = newForm.get('password')

    login(email, password)
}

function authService(e) {
    e.preventDefault();

    if (e.target.tagName === 'BUTTON') {
        if (e.target.textContent === 'Register') {
            createUser()
        } else if (e.target.textContent === 'Log In') {
            loginUser()
        } else if (e.target.textContent === 'Create') {
            const userEmail = auth.currentUser.email;
            create(userEmail)
        } else if (e.target.textContent === 'Edit') {
            editArticle()
        }
    } else if (e.target.textContent === 'Logout') {
        logout()
    }
}

export {createUser, handler, authService, loginUser}