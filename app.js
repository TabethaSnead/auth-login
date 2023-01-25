import { signupUser, signInUser, redirectIfLoggedIn, logout } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');

const signUpForm = document.getElementById('sign-up');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    await signupUser(data.get('email'), data.get('password'));
    redirectIfLoggedIn();
    console.log(data);
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    await signInUser(data.get('email'), data.get('password'));
    redirectIfLoggedIn();
    console.log(data);
});
// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
