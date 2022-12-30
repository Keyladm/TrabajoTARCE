


function registrar(){
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('contraseña').value;
    firebase.auth().createUserWithEmailAndPassword(email, contraseña).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

    });
}

function inicio(){
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('contraseña').value;
    console.log('entró en login')
    firebase.auth().signInWithEmailAndPassword(email,contraseña).catch(function(error){
      console.log('tambien entró con email y contraseña')
      var errorCode = error.code;
      var errorMessage = error.message;

    });

    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            var email = user.email;
            console.log('Existe usuario activo')
            //var usuario = document.getElementById('nombre');
            //usuario.innerHTML = "Juan";
            window.location.href = "/camarero";
            
            

        }else{
            console.log('No existe usuario activo')
        }

    });
   
}

function cerrar(){
    firebase.auth().signOut().then(function(){
        console.log('Salir');
        window.location.href = "/";
    })
    .catch(function(error){
        console.log(error);
    })
}

/* function observador(){
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            var email = user.email;
            console.log('Existe usuario activo')
            //return redirect('/');
            

        }else{
            console.log('No existe usuario activo')
        }

    });
}
observador(); */

