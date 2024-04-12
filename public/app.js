const navHeader = document.querySelector('.NavigatorHome');
const loginButton = document.querySelector('.ButtonLogin');

document.addEventListener('DOMContentLoaded', getLoginInfo);

loginButton.addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/login';
});

async function getLoginInfo() {
    try {
        const response = await fetch('http://localhost:3000/profile');
        const data = await response.json();
        const img = document.createElement('img');
        img.src = data.picture;
        navHeader.appendChild(img);
    } catch (error) {
        // En caso de error, agregamos una imagen por defecto
        const img = document.createElement('img');
        img.src = './img/user.png';
        navHeader.appendChild(img);
    }
}
