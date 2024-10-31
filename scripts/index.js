'use strict';
/* BAUER, LISA */
const disqueria = new Disqueria();

function mostrar() {
    document.querySelector(".container").innerHTML = disqueria.toHTML();
}

function pedirDisco(nombre) {
    alert(`Quedan ${disqueria.pedirDisco(nombre)} discos de ${nombre}`);
}

function devolverDisco(nombre) {
    alert(`Quedan ${disqueria.devolverDisco(nombre)} discos de ${nombre}`);
}

function cargar() {
  //  valido el nombre del disco
  const nombre = Disco.pedirNombre();

  // valido el nombre del artista
  const artista = Disco.pedirArtista();

  //  valido el id del disco
let id;
do {
    id = prompt("Ingrese el ID del disco (solo números del 1 al 999):");
    
    if (id === null || isNaN(id) || id.trim() === "") {
        alert("Debe ingresar un número válido para el ID.");
        id = null;
    } else {
        const idNum = Number(id);
        if (idNum < 1 || idNum > 999) {
            alert("El ID debe ser un número entre 1 y 999.");
            id = null; 
        } else {
            const idExistente = disqueria.discos.some(disco => disco.disco.id === idNum);
            if (idExistente) {
                alert(`Ya existe un disco con el ID: ${id}. Por favor, ingrese otro ID.`);
                id = null;
            }
        }
    }
} while (id === null);

  // valido la portada del disco
  const portada = Disco.pedirPortada();

  // agregor las pistas dinamicamente
  const pistas = [];
  let agregarOtraPista = true;
  
  while (agregarOtraPista) {
      //  valido el nombre de la pista
      let nombrePista;
      do {
          nombrePista = prompt("Ingrese el nombre de la pista:");
          if (nombrePista === null || nombrePista.trim() === "") {
              alert("El nombre de la pista no puede estar vacío.");
          }
      } while (nombrePista === null || nombrePista.trim() === "");
      
      //  valido la duracion de la pista
      let duracionPista;
      do {
          duracionPista = prompt("Ingrese la duración de la pista en segundos (entre 0 y 1000):");
      
          if (duracionPista === "" || duracionPista === null) {
              alert("Por favor, complete el campo.");
          } else if (isNaN(duracionPista) || duracionPista < 0 || duracionPista > 1000) {
              alert("Debe ingresar una duración válida (entre 0 y 1000 segundos).");
          }
      
      } while (duracionPista === "" || duracionPista === null || isNaN(duracionPista) || duracionPista < 0 || duracionPista > 1000);
      
      alert("Duración de pista válida: " + duracionPista + " segundos.");
      
      
      // agrego la pista al array de pistas
      pistas.push(new Pista(nombrePista, Number(duracionPista)));

      agregarOtraPista = confirm("¿Desea agregar otra pista?");
  }

  const stockAleatorio = Math.floor(Math.random() * 10) + 1;

  const nuevoDisco = new Disco(nombre, artista, Number(id), portada, pistas, stockAleatorio);

  disqueria.discos.push({ disco: nuevoDisco });

  // actualizo el HTML
  const container = document.querySelector('.container');
  container.innerHTML += nuevoDisco.toHTML();

  alert(`Disco "${nombre}" agregado exitosamente.`);

  const agregarOtroDisco = confirm("¿Desea agregar otro disco?");
  if (agregarOtroDisco) {
      cargar();
  }
}
function buscar() {
    const id = prompt("Ingrese el ID del disco que desea buscar:");
    // busco mediante el id de cada disco en el array de discos, para acceder al id agregado en los prompts de cargar
    const discoEncontrado = disqueria.discos.find(obj => obj.disco.id === Number(id)); // convierto a num

    const container = document.querySelector('.container');
    container.innerHTML = ""; // limpio el html para solo mostrar el disco buscado

    if (discoEncontrado) {
        container.innerHTML = discoEncontrado.disco.toHTML();
    } else {
        container.innerHTML = `<div class="alert alert-warning" role="alert">No se encontró un disco con el ID: ${id}</div>`;
    }
}