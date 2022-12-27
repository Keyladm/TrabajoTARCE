const login = document.getElementById('login');
const modal = document.getElementById('form_login');
const cancel = document.getElementById('cancel_sesion');

login.addEventListener('click', () =>{
    modal.classList.add('show');
    alert("Hola");
});

cancel.addEventListener('click', () =>{
    modal.classList.remove('show');
});