// ==========================================
// VALIDAR APELLIDO PATERNO
// ==========================================
const apellidoPaterno = document.getElementById('apellidoPaterno');
if (!validarCampoTexto(apellidoPaterno, 2)) {
    isValid = false;
}


// ==========================================
// VALIDAR APELLIDO MATERNO
// ==========================================
const apellidoMaterno = document.getElementById('apellidoMaterno');
if (!validarCampoTexto(apellidoMaterno, 2)) {
    isValid = false;
}


// ==========================================
// VALIDAR CÉDULA
// ==========================================
const cedula = document.getElementById('cedula');
const valorCedula = cedula.value.trim();
const cedulaRegex = /^\d{10}$/;

if (!cedulaRegex.test(valorCedula)) {
    cedula.classList.add('no-valid');
    isValid = false;
} else {
    cedula.classList.remove('no-valid');
}


// ==========================================
// VALIDAR MOTIVO
// ==========================================
const motivo = document.getElementById('motivo');
if (!validarCampoTexto(motivo, 10)) {
    isValid = false;
}


// ==========================================
// VALIDAR TIPO DE CUENTA
// ==========================================
const tipoCuenta = document.getElementById('tipoCuenta');

if (tipoCuenta.value === '') {
    tipoCuenta.classList.add('no-valid');
    isValid = false;
} else {
    tipoCuenta.classList.remove('no-valid');
}


// ==========================================
// VALIDAR CALLE
// ==========================================
const calle = document.getElementById('calle');
if (!validarCampoTexto(calle, 3)) {
    isValid = false;
}


// ==========================================
// VALIDAR NÚMERO
// ==========================================
const numero = document.getElementById('numero');
const valorNumero = numero.value.trim();

if (valorNumero === '') {
    numero.classList.add('no-valid');
    isValid = false;
} else {
    numero.classList.remove('no-valid');
}


// ==========================================
// VALIDAR INTERSECCIÓN
// ==========================================
const interseccion = document.getElementById('interseccion');
if (!validarCampoTexto(interseccion, 3)) {
    isValid = false;
}