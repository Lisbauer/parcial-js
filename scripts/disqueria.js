class Disqueria {
    constructor() {
        this.discos = [];
        this.mostrarDiscos = false; // controlo visibilidad de los discos
        // cargar discos desde el archivo json
        this.cargarDiscos();
    }

    async cargarDiscos() {
        try {
            const response = await fetch("discos.json");
            const discos = await response.json();
    
            for (let disco of discos) {
                const nuevoDisco = new Disco(
                    disco.nombre,
                    disco.artista,
                    disco.id,
                    disco.portada,
                    disco.pistas.map(pista => new Pista(pista.nombre, pista.duracion))
                );
    
                const album = {
                    stock: Math.ceil(10 * Math.random()),
                    disco: nuevoDisco
                };
    
                this.discos.push(album); 
            }
    
        } catch (error) {
            alert("Error al cargar los discos");
        }
    }
    
    buscarPorId(id) {
        let resultados = this.discos.filter(obj => obj.disco.id == id);
        let html = "";
        if (resultados.length != 0) {
            resultados.forEach(res => {
                html += res.disco.toHTML();
            });
        } else {
            html += `<div class="alert alert-warning" role="alert">No se encontró el disco con ID: ${id}</div>`;
        }

        document.querySelector(".container").innerHTML = html;
    }

    toHTML() {
        let html = "";

        for (let obj of this.discos) {
            html += obj.disco.toHTML();
        }
        return html;
    }

    pedirDisco(nombre) {
        const disco = this.discos.find(obj => obj.disco.nombre === nombre);
        if (disco && disco.disco.stock > 0) {
            disco.disco.stock -= 1; // resta 1 del stock
            return disco.disco.stock; // devuelvo el stock restante
        }
        return 0; // si no hay stock 
    }
    devolverDisco(nombre) {
        const disco = this.discos.find(obj => obj.disco.nombre === nombre);
        if (disco) {
            disco.disco.stock += 1; // suma uno al stock
            return disco.disco.stock; // devuelve el stock actualizado
        }
        return NaN; //  caso de que no se encuentre el disco
    }

    nuevoDisco() {
        let nombre = Disco.pedirNombre();
        let artista = Disco.pedirArtista();
        let id = Number(Disco.pedirId());
        let portada = Disco.pedirPortada();
    
        if (nombre && artista && !isNaN(id) && id > 0 && portada) {
            // verifica si el id existe
            let idExists = this.discos.some(obj => obj.disco.id === id);
            
            if (idExists) {
                alert(`Ya existe un disco con ID: ${id}. Por favor, usa otro ID.`);
                return; // salgo de la funcion si el id existe
            }

            let disco = new Disco(nombre, artista, id, portada);
            const album = {
                stock: 1, // establezco stock inicial a 1 al añadir un nuevo disco
                disco: disco
            };
            this.discos.push(album); // agrego el nuevo disco al array
    
            alert(`Disco '${nombre}' añadido con exito.`); 
        } else {
            alert("Por favor, proporciona todos los datos del disco correctamente.");
        }
    }
    
    buscarPorNombre() {
        let nombre = Disco.pedirNombre();
        // filtrar discos por nombre con metodo filter
        let resultados = this.discos.filter(obj => obj.disco.nombre.toLowerCase() === nombre.toLowerCase());
        let html = "";

        if (resultados.length !== 0) {
            // armo el html de los resultados
            resultados.forEach(res => {
                html += res.disco.toHTML();
            });
        } else {
            // mensaje si no hay resultados
            html += `<div class="alert alert-warning" role="alert">
                        No se encontraron discos con ese nombre.
                     </div>`;
        }
        // mostrar resultados en html
        document.querySelector(".container").innerHTML = html;
    }
}