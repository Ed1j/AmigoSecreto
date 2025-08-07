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

}