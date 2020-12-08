import {navigation} from "./router.js";

var firebaseConfig = {
    apiKey: "AIzaSyDnszVN80amFAfcG2RVE7FCT3sRUCTUeFU",
    authDomain: "destinations-427cb.firebaseapp.com",
    projectId: "destinations-427cb",
    storageBucket: "destinations-427cb.appspot.com",
    messagingSenderId: "49334944495",
    appId: "1:49334944495:web:66a00a87d86c2ee36c111a"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const url = `https://destinations-427cb-default-rtdb.firebaseio.com/`

const createUser = () => {
    const form = document.forms['formRegister']
    const formData = new FormData(form)

    const email = formData.get('email')
    const password = formData.get('password')
    const repeatPassword = formData.get('rePassword')

    const notification = document.querySelector('.errorBox')

    if (password === repeatPassword) {
        auth.createUserWithEmailAndPassword(email, password)
            .then(() => navigation('home', 'home', auth.currentUser))
            .catch((err) => {
                notification.textContent = err.message
                notification.style.display = 'block';
            })
    } else {
        notification.textContent = 'Passwords should match!'
        notification.style.display = 'block';
    }
}

const login = () => {
    const form = document.forms['formLogin']
    const formData = new FormData(form)

    const email = formData.get('email')
    const password = formData.get('password')

    auth.signInWithEmailAndPassword(email, password)
        .then(() => navigation('home', 'home', auth.currentUser))
        .catch(() => {
            const notification = document.querySelector('.errorBox')
            notification.textContent = 'Incorrect email or password.'
            notification.style.display = 'block';
        })
}

const logout = () => {
    auth.signOut()
        .then(() => navigation('home', 'home', auth.currentUser))
        .catch((err) => console.log(err.message));
}

const create = () => {
    const userEmail = auth.currentUser.email;

    const form = document.forms['formAdddestination']
    const formData = new FormData(form);

    const destination = formData.get('destination')
    const city = formData.get('city')
    const duration = formData.get('duration')
    const departureDate = formData.get('departureDate')
    const imgUrl = formData.get('imgUrl')


    if (city && destination && duration && departureDate && imgUrl) {
        const obj = {
            destination,
            city,
            duration,
            departureDate,
            imgUrl,
            userEmail
        }

        fetch(`${url}destinations/.json`, {
            method: 'POST',
            body: JSON.stringify(obj)
        }).then(() => {
            navigation('home', 'home', auth.currentUser)
        }).catch((err) => console.log(err.message));
    }
}

const getData = () => {
    return fetch(`${url}destinations/.json`)
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
}

const getOne = (id) => {
    return fetch(`${url}destinations/${id}.json`)
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

const editDestination = (id) => {

    const form = document.forms['formAdddestination']
    const formData = new FormData(form);

    const destination = formData.get('destination')
    const city = formData.get('city')
    const duration = formData.get('duration')
    const departureDate = formData.get('departureDate')
    const imgUrl = formData.get('imgUrl')

    const obj = {
        destination,
        city,
        duration,
        departureDate,
        imgUrl,
    }
    fetch(`${url}destinations/${id}.json`, {
        method: 'PATCH',
        body: JSON.stringify(obj)
    }).then(() => {
        const id = window.location.href.split('/').slice(3).slice(-1)[0]
        navigation('details', `details/${id}`, auth.currentUser)
    })
}

const deleteDestination = (id) => {
    fetch(`${url}destinations/${id}.json`, {method: 'DELETE'})
        .then(() => navigation('destinations', 'destination', auth.currentUser))
        .catch((err) => console.log(err.message))
}

export {auth, login, logout, createUser, create, getData, getOne, deleteDestination, editDestination}