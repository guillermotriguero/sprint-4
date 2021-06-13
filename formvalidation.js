const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const searchForm = document.querySelector("searchForm");

function searchValidate() {

    let acumErrores = 0;

    // searchForm.classList.remove('is-invalid'); ¿Por qué he de esconderlo para que funcione?

    let inputSearch = document.getElementById('search');

    const regex = /[A-Za-z]{3,}/;

    // Importante: si no pongo aquí el .value, ¡no funcionaba!
    let regexSearch = regex.test(inputSearch.value);

    if (regexSearch == false) {
        inputSearch.classList.add("is-invalid");
        document.getElementById("errorSearch").textContent = "El elemento de búsqueda ha de tener más de 3 caracteres";
        acumErrores++;
    }

    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }

}

function loginValidate() {
    let acumErrores = 0;

    loginForm.classList.remove('is-invalid');

    let inputEmail = document.getElementById('loginEmail');
    let inputPass = document.getElementById('loginPassword');

    if (inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Este campo es obligatorio";
        acumErrores++;
    }



    if (inputPass.value == "") {
        inputPass.classList.add("is-invalid");
        document.getElementById("errorPass").textContent = "Este campo es obligatorio";
        acumErrores++;
    }

    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }
}

function registerValidate() {
    let acumErrores = 0;

    registerForm.classList.remove('is-invalid');

    let inputEmail = document.getElementById('registerEmail');
    let inputPass = document.getElementById('registerPassword');
    let inputPass2 = document.getElementById('registerRepeatPassword');
    let inputProvincia = document.getElementById('provincia');
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*).{8,32}$/;

    // Importante: si no pongo aquí el .value, ¡no funcionaba!
    let regexPass = regex.test(inputPass.value);

    if (inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmailR").textContent = "Este campo es obligatorio";
        acumErrores++;
    }

    if (inputPass.value == "") {
        inputPass.classList.add("is-invalid");
        document.getElementById("errorPassR").textContent = "Este campo es obligatorio";
        acumErrores++;
    }

    if (regexPass == false) {
        inputPass.classList.add("is-invalid");
        document.getElementById("errorPassR").textContent = "La contraseña no cumple los parámetros indicados";
        acumErrores++;
    }

    if (inputPass2.value == "") {
        inputPass2.classList.add("is-invalid");
        document.getElementById("errorPassR2").textContent = "Debes repetir la contraseña";
        acumErrores++;
    }

    if (inputPass.value !== inputPass2.value) {
        inputPass2.classList.add("is-invalid");
        document.getElementById("errorPassR2").textContent = "Las contraseñas no coinciden";
        acumErrores++;
    }

    if (inputProvincia.value == "") {
        inputProvincia.classList.add("is-invalid");
        document.getElementById("errorProvincia").textContent = "Debes escoger una provincia";
        acumErrores++;
    }

    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }

}

    // Console.log que hice para chequear si las contraseñas coinciden:
    // if (inputPass.value === inputPass2.value) {
    //     console.log(" es igual")
    // } else { console.log("NO es igual") }


////////////////

// EJEMPLO IT ACADEMY: ESTO FUNCIONA

// const form = document.getElementById('myFormId');

// function registerValidate() {
//     var acumErrores = 0;

//     form.classList.remove('is-invalid');

//     var inputEmail = document.getElementById('inputEmail');


//     if (inputEmail.value == "") {
//         inputEmail.classList.add("is-invalid");
//         document.getElementById("errorEmail").textContent = "Es campo es obligatorio";
//         acumErrores++;
//     }

//     if (acumErrores > 0) {
//         return false;
//     } else {
//         return true;
//     }
// }

// var acumErrores = 0;

// form.classList.remove('is-invalid');

//var inputEmail = document.forms["myForm"]["inputEmail"];

// var inputEmail = document.getElementById('inputEmail');

// var inputPassword = document.forms["myForm"]["inputPassword"];
// var inputAddress = document.forms["myForm"]["inputAddress"];
// var inputProvince = document.forms["myForm"]["inputProvince"];
// var inputCity = document.forms["myForm"]["inputCity"];
// var inputZip = document.forms["myForm"]["inputZip"];
// var gridCheck = document.forms["myForm"]["gridCheck"];

// if (inputEmail.value == "") {
//     inputEmail.classList.add("is-invalid");
//     document.getElementById("errorEmail").textContent = "Es campo es obligatorio";
//     acumErrores++;
// } else if (!validar_email(inputEmail.value)) {
//     inputEmail.classList.add("is-invalid");
//     document.getElementById("errorEmail").textContent = "El email no cumple el formato";
//     acumErrores++;
// }

// if (inputPassword.value == "") {
//     inputPassword.classList.add("is-invalid");
//     document.getElementById("errorPassword").textContent = "Es campo es obligatorio";
//     acumErrores++;
// }

// if (inputAddress.value == "") {
//     inputAddress.classList.add("is-invalid");
//     document.getElementById("errorAddress").textContent = "Es campo es obligatorio";
//     acumErrores++;
// }

// if (inputProvince.value == "") {
//     inputProvince.classList.add("is-invalid");
//     document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
//     acumErrores++;
// }

// if (inputCity.value == "") {
//     inputCity.classList.add("is-invalid");
//     document.getElementById("errorCity").textContent = "Falta la ciutat";
//     acumErrores++;
// }

// if (inputZip.value == "" || inputZip.length != 5) {
//     inputZip.classList.add("is-invalid");
//     document.getElementById("errorZip").textContent = "El codi postal no compleix els requisitis";
//     acumErrores++;
// }

// if (!gridCheck.checked) {
//     gridCheck.classList.add("is-invalid");
//     document.getElementById("errorCheck").textContent = "Acepta las bases";
//     acumErrores++;
// }

// if (acumErrores > 0) {
//     return false;
// } else {
//     return true;
// }
// }

// form.addEventListener('blur', (event) => {
//     console.log(event);
//     if (event.target.value != '') event.target.classList.remove('is-invalid');
//     //registerValidate();
// }, true);

// function validar_email(email) {
//     var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     return regex.test(email) ? true : false;
// }
