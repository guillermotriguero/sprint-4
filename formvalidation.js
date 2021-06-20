const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const searchForm = document.querySelector("searchForm");

function searchValidate() {

    let acumErrores = 0;

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

    // loginForm.classList.remove('is-invalid');

    let inputEmail = document.getElementById('loginEmail');
    let inputPass = document.getElementById('loginPassword');
    const mailRegex = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    let regexMail = mailRegex.test(inputEmail.value);

    if (inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Este campo es obligatorio";
        acumErrores++;
    }

    // Ver comentario línea 90, importante!!

    if (inputEmail.value != "" && regexMail == false) {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Esto no es un email";
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

    // registerForm.classList.remove('is-invalid');

    let inputEmail = document.getElementById('registerEmail');
    let inputPass = document.getElementById('registerPassword');
    let inputPass2 = document.getElementById('registerRepeatPassword');
    let inputProvincia = document.getElementById('provincia');
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*).{8,32}$/;
    const mailRegex = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    // Importante: si no pongo aquí el .value, ¡no funcionaba!
    let regexPass = regex.test(inputPass.value);

    let regexMail = mailRegex.test(inputEmail.value);

    if (inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmailR").textContent = "Este campo es obligatorio";
        acumErrores++;
    }

    // Aquí hay que poner dos condiciones, si ponemos solo como condición que cumpla el Regex siempre dirá que "esto no es un email", porque cuando el campo está vacío, tampoco está cumpliendo el regex.
    // Por tanto la solución es que el aviso de que no es un email cumpla 2 condiciones: que el campo NO esté vacío (porque entonces saltamos al error de campo obligatorio) y que regexMail sea false.

    if (inputEmail.value != "" && regexMail == false) {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmailR").textContent = "Esto no es un email";
        acumErrores++;
    }

    if (inputPass.value == "") {
        inputPass.classList.add("is-invalid");
        document.getElementById("errorPassR").textContent = "Este campo es obligatorio";
        acumErrores++;
    }

    if (inputPass.value != "" && regexPass == false) {
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