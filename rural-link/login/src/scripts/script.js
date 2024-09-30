const togglePasswordButton = document.getElementById('togglePassword');
const passwordInput = document.getElementById('isenha');

togglePasswordButton.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Troca o ícone com base no tipo
    const icon = type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
    togglePasswordButton.innerHTML = `<i class="${icon}"></i>`;
});
