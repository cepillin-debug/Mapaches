const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbyRc4y8z6L83UWCOjPpGgAe-cq7j_2nZ1Y4RolbRPCUUg7gN8mlPO7QXzRt1k4rpIHIpg/exec";
const URL_CSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTMgQgCVfaEZgZVtcUk3iXlHaJfDfVjWJKn0WdxLVlg2J41U_Vob2YLRd-DWR9KGw5XAxa6erY2F1Yn/pub?output=csv";

const formRegistro = document.getElementById("form-registro");
const formLogin = document.getElementById("form-login");


// ---------- CREAR CUENTA ----------
if (formRegistro) {
    formRegistro.addEventListener("submit", (e) => {
    e.preventDefault();

    const datos = new URLSearchParams({
        nombre: document.getElementById("nombre").value.trim(),
        gmail: document.getElementById("gmail").value.trim(),
        contrasena: document.getElementById("contraseña").value
    });

    fetch(URL_SCRIPT, { method: "POST", body: datos })
        .then((res) => res.text())
        .then((texto) => {
        if (texto.trim() === "ok") {
            alert("Cuenta creada correctamente");
            formRegistro.reset();
        } else {
            alert("El script respondió algo inesperado: " + texto);
        }
        })
        .catch((err) => {
        console.error(err);
        alert("No se pudo guardar, revisa la consola (F12)");
        });
    });
}


// ---------- INICIAR SESIÓN ----------
if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const gmail = document.getElementById("gmail").value.trim();
    const contrasena = document.getElementById("contraseña").value;

    fetch(URL_CSV + "&t=" + Date.now())
        .then((res) => res.text())
        .then((texto) => {
        const filas = texto.trim().split(/\r?\n/).map((r) => r.split(","));
        filas.shift();

        const usuario = filas.find(
            (f) => f[1].trim() === gmail && f[2].trim() === contrasena
        );

        if (usuario) {
            alert("Bienvenido, " + usuario[0]);
            formLogin.reset();
        } else {
            alert("Gmail o contraseña incorrectos");
        }
        })
        .catch((err) => {
        console.error(err);
        alert("Error al conectar con la base de datos");
        });
    });
}