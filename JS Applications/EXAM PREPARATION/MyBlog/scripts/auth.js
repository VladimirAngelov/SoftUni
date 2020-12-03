// Your web app's Firebase configuration
import {router} from "./router.js";

var firebaseConfig = {
    apiKey: "AIzaSyBPw3SvYxzZujPr-YSFG33MNHfAXfgyvkc",
    authDomain: "my-blog-cfa3a.firebaseapp.com",
    databaseURL: "https://my-blog-cfa3a-default-rtdb.firebaseio.com",
    projectId: "my-blog-cfa3a",
    storageBucket: "my-blog-cfa3a.appspot.com",
    messagingSenderId: "483768534605",
    appId: "1:483768534605:web:6f5553fb39d93a31ea3e04"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const url = `https://my-blog-cfa3a-default-rtdb.firebaseio.com/`;
const registration = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => router('login'))
        .catch((err) => console.log(err.message));
}

const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
        .then(() => router('home'))
        .catch(() => {
            const notification = document.getElementById("login-notification")
            notification.style.display = 'block';
        })
}

const logout = () => {
    auth.signOut()
        .then(() => router('home'))
        .catch((err) => console.log(err.message));
}

const getData = () => {
    let res = fetch(`${url}.json`)
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
    return res;
}

const getPost = (id) => {
    let res = fetch(`${url}${id}.json`)
        .then(res => res.json())
        .catch((err) => console.log(err.message));
    return res;
}

const editPost = (id) => {
    const form = document.forms['edit-form']
    const formData = new FormData(form)

    const title = formData.get('title')
    const content = formData.get('content')
    const category = formData.get('category')

    const obj = {
        title,
        content,
        category
    }

    fetch(`${url}${id}.json`, {
        method: 'PATCH',
        body: JSON.stringify(obj)
    }).then(() => router('home'))
        .catch((err) => console.log(err.message));
}

const deletePost = (id) => {
    fetch(`${url}${id}.json`, {method: 'DELETE'})
        .then(() => router('home'))
        .catch((err) => console.log(err.message));
}

const createPost = () => {
    const userEmail = auth.currentUser.email;

    const form = document.forms['create-post']
    const formData = new FormData(form);

    const title = formData.get('title')
    const category = formData.get('category')
    const content = formData.get('content')

    const obj = {
        title,
        category,
        content,
        userEmail
    }

    fetch(`${url}.json` , {
        method: 'POST',
        body: JSON.stringify(obj)
    }).then(() => router('home'))
        .catch((err) => console.log(err.message));
}
export {auth, login, logout, registration, getData, createPost, getPost , editPost, deletePost}