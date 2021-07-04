function validar(formulario) {



  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    alert("Email inválido");
    return false;
  }

  if (formulario.contrasena.value.trim().length == 0) {
    alert("Contraseña obligatoria");
    return false;
  }

  if (formulario.contrasena.value.trim().length < 8) {
    alert("Contraseña debe tener al menos 8 carácteres");
    return false;
  }

  return false;
}
