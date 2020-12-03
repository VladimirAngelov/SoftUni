import {router} from './router.js'

var firebaseConfig = {
    apiKey: "AIzaSyDEaiWCq6cm3VVle4niAJS4uz83ZgtMN2Y",
    authDomain: "softwiki-bb5f8.firebaseapp.com",
    databaseURL: "https://softwiki-bb5f8.firebaseio.com",
    projectId: "softwiki-bb5f8",
    storageBucket: "softwiki-bb5f8.appspot.com",
    messagingSenderId: "32858946661",
    appId: "1:32858946661:web:dabe3d0aa133f1ca121a8c"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const url = `https://softwiki-bb5f8.firebaseio.com/`

const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
        .then(() => router('home'))
        .catch((err) => {
            const notification = document.getElementById('login-notification')
            notification.style.display = 'block';
        })
}

const register = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => router('login'))
        .catch((err) => console.log(err.message));
}

const logout = () => {
    auth.signOut()
        .then(() => router('login'))
        .catch((err) => console.log(err.message));
}

const getData = () => {
    let res = fetch(`${url}.json`)
        .then((res) => res.json())
        .catch((err) => console.log(err.message));

    return res;
}

const create = (userEmail) => {
    const form = document.forms['create-form'];
    const newForm = new FormData(form)

    const title = newForm.get('title')
    const category = newForm.get('category')
    const content = newForm.get('content')

    fetch(`${url}.json`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            category,
            content,
            userEmail
        })
    }).then(() => router('home'))
        .catch((err) => console.log(err.message));
}

const getArticle = (id) => {
    let data = fetch(`${url}${id}.json`)
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
    return data;
}

const getArticleInfo = (id) => {
    let data = fetch(`${url}${id}.json`)
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
    return data;
}

const editArticle = () => {
    const id = window.location.href.split('/').slice(-1)
    const form = document.forms['edit-form'];
    const newForm = new FormData(form)

    const title = newForm.get('title')
    const category = newForm.get('category')
    const content = newForm.get('content')

    fetch(`${url}${id}.json`, {
        method: 'PATCH',
        body: JSON.stringify({
            title,
            category,
            content,
        })
    }).then(() => router(`home`))
        .catch((err) => console.log(err.message));
}

const deleteArticle = (id) => {
    fetch(`${url}${id}.json`, {method: 'DELETE'})
        .then(() => router('home'))
        .catch((err) => console.log(err.message));
}

export {auth, register, login, logout, getData, create, getArticle, getArticleInfo, editArticle, deleteArticle}