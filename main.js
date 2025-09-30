const telaLoginRegistro = document.querySelector("#tela-login-registro");
const btnlogin = document.querySelector("#btn-login");
const btnRegistro = document.querySelector("#btn-registro");


btnRegistro.addEventListener('click', () => {
    telaLoginRegistro.classList.add('ativo')
});

btnlogin.addEventListener('click' , () => {
    telaLoginRegistro.classList.remove("ativo")
});