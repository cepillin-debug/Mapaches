function P_Ampolleta(){
               document.getElementById("imgp").src="../img/A-prendida.avif";
        }

function A_Ampolleta(){
    document.getElementById("imgp").src="../img/A-apagada.avif";
        }

$(document).ready(function () {
  
  $("#formRegistro").submit(function (e) {
    let nombre = $("#nombre").val();
    let apellido = $("#apellido").val();
    let correo = $("#correo").val();
    let telefono = $("#telefono").val();
    let fecha = $("#fecha").val();
    let region = $("#region").val();

    if (nombre.trim() === "") {
      alert("El campo nombre está vacío, está mal.");
      e.preventDefault();
      return;
    }
    if (/\d/.test(nombre)) {
      alert("El nombre tiene números, está mal.");
      e.preventDefault();
      return;
    }

    if (apellido.trim() === "") {
      alert("El campo apellido está vacío, está mal.");
      e.preventDefault();
      return;
    }
    if (/\d/.test(apellido)) {
      alert("El apellido tiene números, está mal.");
      e.preventDefault();
      return;
    }

    if (correo.trim() === "") {
      alert("El campo correo está vacío, está mal.");
      e.preventDefault();
      return;
    }
    if (!correo.includes("@gmail.com")) {
      alert("El correo no es @gmail.com, está mal.");
      e.preventDefault();
      return;
    }

    if (telefono.trim() === "") {
      alert("El campo teléfono está vacío, está mal.");
      e.preventDefault();
      return;
    }
    if (isNaN(telefono)) {
      alert("El teléfono tiene letras, está mal.");
      e.preventDefault();
      return;
    }

    if (fecha === "") {
      alert("La fecha no está seleccionada, está mal.");
      e.preventDefault();
      return;
    }

    if (region === null || region === "") {
      alert("La región no está seleccionada, está mal.");
      e.preventDefault();
      return;
    }
  });

});