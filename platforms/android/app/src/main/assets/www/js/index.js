const usersAndPassword = {
    ieti : {
        correo: '',
        password: 'cordova'
    },
};

function fer_login(){
    const usuari = document.getElementById("usuari").value;
    const contrasenya = document.getElementById("contrasenya").value;
    const loginP = document.getElementById("loginP");
    let login = false;
    for (users in usersAndPassword){
        if (users === usuari && usersAndPassword[users].password === contrasenya){
            login = true;
        }
    }
    if (login){
        loginP.textContent = "The user and password are correct";
        loginP.classList.remove("incorrect");
        loginP.classList.add("correct");
        alert("Login exitós");
        
    } else{
        loginP.textContent = "The user and password are incorrect";
        loginP.classList.remove("correct");
        loginP.classList.add("incorrect");
        alert("Login incorrecte");
    }
}

function registra(){
    const reg_usuari  = document.getElementById("reg_usuari").value;
    const reg_email = document.getElementById("reg_email").value;
    const reg_contrasenya_1 = document.getElementById("reg_contrasenya_1").value;
    const reg_contrasenya_2 = document.getElementById("reg_contrasenya_2").value;
    let existente = false;
    for (users in usersAndPassword){
        if (reg_usuari === users && reg_email === usersAndPassword[users].correo){
            existente = true;
            alert("El nom o l'email ja existeix a la base de dades");
            signInP.textContent = "The name or email already exists in the database.";
            signInP.classList.remove("correct");
            signInP.classList.add("incorrect");
        }
    }
    if(reg_usuari === "" || reg_email==="" || reg_contrasenya_1==="" || reg_contrasenya_2===""){
        alert("S'han d'omplir tots els camps per crear un usuari nou");
        signInP.textContent = "All fields must be filled in to create a new user.";
        signInP.classList.remove("correct");
        signInP.classList.add("incorrect");
        existente = true;
    }
    if (reg_contrasenya_1 != reg_contrasenya_2){
        alert("Error en les contrasenyes");
        signInP.textContent = "Password error.";
        signInP.classList.remove("correct");
        signInP.classList.add("incorrect");
        
    }
    if (!existente && reg_contrasenya_1 === reg_contrasenya_2){
        usersAndPassword[reg_usuari] = {
            correo: reg_email,
            password: reg_contrasenya_1
        }
        alert("Nou usuari registrat correctament");
        signInP.textContent = "Successfully created.";
        signInP.classList.remove("incorrect");
        signInP.classList.add("correct");
        
    }
}