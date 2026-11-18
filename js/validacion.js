const URL_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRezUYaXUDMNed7mc3zjfTdtiqCvqkOX5Fu_FAhPzgXrapvNmsad2yEjBXC6-_6LpgJ9Oy-syNrjTjB/pub?output=csv';

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const gmail = document.getElementById('gmail').value.trim();
    const clave = document.getElementById('contraseña').value.trim();

    const respuesta = await fetch(URL_CSV);
    const texto = await respuesta.text();

    const filas = texto.split('\n').map(f => f.split(',').map(c => c.trim()));

    const usuario = filas.find(f => f[0] === gmail && f[1] === clave);

    if (usuario) {
    alert('Bienvenido');
    } else {
    alert('Gmail o contraseña incorrectos.');
    }
});