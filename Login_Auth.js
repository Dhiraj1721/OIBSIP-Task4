const users = [
    {
        username: 'user1',
        password: 'password123'
    },
    {
        username: 'user2',
        password: 'password456'
    }
];

function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        messageElement.style.color = 'green';
        messageElement.textContent = 'Login successful!';
    } else {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Invalid username or password.';
    }
}

function gmailLogin() {
    const messageElement = document.getElementById('message');
    messageElement.style.color = 'blue';
    messageElement.textContent = 'Redirecting to Gmail login...';
}

function facebookLogin() {
    const messageElement = document.getElementById('message');
    messageElement.style.color = '#4267B2';
    messageElement.textContent = 'Redirecting to Facebook login...';
}