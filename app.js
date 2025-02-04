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

function actualizarLista() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";
    
    for (let i = 0; i < listaAmigos.length; i++) {
        let amigo = listaAmigos[i];
        let li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> ! El amigo secreto es ${amigoSorteado} !</li>`;
}

