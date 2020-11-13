// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCJtIRFpkQK4-87x_TW1QYb5E5Bbi-mD1w",
    authDomain: "my-movies-5ccf6.firebaseapp.com",
    databaseURL: "https://my-movies-5ccf6.firebaseio.com",
    projectId: "my-movies-5ccf6",
    storageBucket: "my-movies-5ccf6.appspot.com",
    messagingSenderId: "523833142829",
    appId: "1:523833142829:web:3cc5e2156e43d8802b52a4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

document.getElementById('login-btn')
    .addEventListener('click', onUserLogin)

function onUserLogin() {
    const usernameEl = document.getElementById('username');
    const passwordEl = document.getElementById('password');
    const subheaderEl = document.getElementById('login-header');
    const notification = document.getElementById('login-notification');

    auth.signInWithEmailAndPassword(usernameEl.value, passwordEl.value)
        .then(res => {
            notification.textContent = 'Successfully log in!';

            notification.style.color = 'green';
            notification.style.display = 'block';
            subheaderEl.textContent = `Hello, ${res.user.email}`;
            usernameEl.value = ''
            passwordEl.value = ''
        }).catch((err) => {
        notification.textContent = err.message;
        notification.style.display = 'block';
    })
}

document.getElementById('register-btn')
    .addEventListener('click', register);

function register() {
    const usernameEl = document.getElementById('register-username');
    const passwordEl = document.getElementById('register-password');
    const subheaderEl = document.getElementById('register-header');
    const notification = document.getElementById('register-notification');

    firebase.auth().createUserWithEmailAndPassword(usernameEl.value, passwordEl.value)
        .then((res) => {
            notification.style.display = 'block';
            notification.textContent = 'Successfully registered!';
            notification.style.color = 'green';

            subheaderEl.textContent = `Welcome ${res.user.email}!`;
            usernameEl.value = ''
            passwordEl.value = ''
        }).catch((err) => {
        notification.textContent = err.message;
        notification.style.display = 'block';
    })
}