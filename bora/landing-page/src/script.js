const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
});

document.getElementById('link').addEventListener('click', function(event) {
    event.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = this.href;
    }, 500);
});
