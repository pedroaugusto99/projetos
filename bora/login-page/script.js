const container = document.getElementById('container');
const registroBtn = document.getElementById('registro');
const loginBtn = document.getElementById('login');

registroBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const botao = document.getElementById('botao-entrar');

        botao.addEventListener('mouseover', () => {
            botao.textContent = 'Eai, Bora?';
        });

        botao.addEventListener('mouseout', () => {
            botao.textContent = 'Entrar';
        });

 // Função Transição
 document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in');
});
