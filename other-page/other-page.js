import { checkAuth, logout } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');
// use checkAuth function to redirect is user not authenticated

window.addEventListener('load', async () => {
    if (!checkAuth()) window.location.href = '../';
});
logoutButton.addEventListener('click', () => {
    if (checkAuth()) logout();
    window.location.href = '../';
});
// add event listener to the logout button and call logout
