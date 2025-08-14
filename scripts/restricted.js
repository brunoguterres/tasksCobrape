document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
    }

    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', function() {
        sessionStorage.removeItem('loggedIn');
        window.location.href = 'login.html';
    });
});