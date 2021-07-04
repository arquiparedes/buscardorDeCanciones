function validar(formulario) {

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    alert("Email inválido");
    return false;
  }

  if (formulario.contrasena.value.trim().length == 0) {
    alert("Contraseña es obligatoria");
    return false;
  }
  if (formulario.contrasena.value.trim().length < 8) {
    alert("Contraseña debe tener mínimo 8 carácteres");
    return false;
  }
  if (formulario.contrasena.value != formulario.confirmacion.value) {
    alert("Confirmación no coincide");
    return false;
  }
  if (formulario.genero.value == "") {
    alert("Genero Musical obligatorio");
    return false;
  }
  if (formulario.edad.value == "") {
    alert("Edad es obligatoria");
    return false;
  }

  

  if (!formulario.terminos.checked) {
    alert("Debe aceptar los términos y condiciones");
    return false;
  }

  return false;
}
