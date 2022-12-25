const login = document.getElementById('login');
const modal = document.getElementById('modal_container');
const cancel = document.getElementById('cancel_sesion');

login.addEventListener('click', () =>{
    modal.classList.add('show');
    alert('prueba');
});

cancel.addEventListener('click', () =>{
    modal.classList.remove('show');
});