let listaAmigos = [];

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";
}

