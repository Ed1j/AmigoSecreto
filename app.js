// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
//let amigoSorteado = [];
let listaAgregados = []; //Lista de los amigos agregados


function agregarAmigo() {
    let amigoAgregado = String(document.getElementById('amigo').value);

    // Validar que no esté vacío
    if (amigoAgregado !== "") {
        listaAgregados.push(amigoAgregado);  // Guardar en el array el valor de amigoAgregado

        // Mostrar en la lista HTML
        mostrarLista();

        // Limpiar el input
        document.getElementById('amigo').value = "";
    } else {
        alert("Por favor, escribe un nombre.");
    }
}


function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar lista existente

    // Código que se ejecuta por cada elemento
    listaAgregados.forEach(
        function (amigo) { //amigo --> variable temporal que representa el elemento actual del array mientras se recorre.
            let li = document.createElement('li');
            li.textContent = amigo;
            lista.appendChild(li);  //Lo agrega dentro del <ul>
        }
    );
}


function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    let lista = document.getElementById("listaAmigos");

    // Validar que haya al menos un amigo en la lista
    if (listaAgregados.length === 0) {
        resultado.innerHTML = "No hay amigos para sortear.";
        return;
    }

    // Generar índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaAgregados.length);

    // Obtener el nombre en ese índice
    let amigoSorteado = listaAgregados[indiceAleatorio];

    // Mostrar el resultado en el ul con id "resultado"
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;

    // Limpiar la lista de amigos en pantalla
    lista.innerHTML = "";
}

function reiniciarJuego() {
    // Vaciar la lista de amigos
    listaAgregados = [];

    // Limpiar la lista en pantalla
    const lista = document.getElementById("listaAmigos");
    if (lista) {
        lista.innerHTML = "";
    }

    // Limpiar el resultado del sorteo
    const resultado = document.getElementById("resultado");
    if (resultado) {
        resultado.innerHTML = "";
    }

    // Limpiar el campo de entrada (opcional)
    const input = document.getElementById("amigo");
    if (input) {
        input.value = "";
    }
}