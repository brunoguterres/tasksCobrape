document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        fetch('../users.json')
            .then(response => response.json())
            .then(users => {
                const user = users.find(u => u.username === username && u.password === password);

                if (user) {
                    if (user.status === 'True') {
                        sessionStorage.setItem('loggedIn', 'true');
                        window.location.href = 'restricted.html';
                    } else {
                        message.textContent = 'Seu acesso não está liberado. Por favor, entre em contato com o administrador em brunoguterres@cobrape.com.br';
                    }
                } else {
                    message.textContent = 'Usuário ou senha inválidos.';
                }
            })
            .catch(error => {
                console.error('Erro ao carregar dados de usuário:', error);
                message.textContent = 'Ocorreu um erro ao tentar fazer o login. Tente novamente mais tarde.';
            });
    });
});