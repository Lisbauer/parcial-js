function segundosAMinutos(segundos) {
    const minutos = Math.floor(segundos / 60); // calcular minutos
    const secs = segundos % 60; // obtengo el resto de los segundos
    return `${minutos.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

class Disco {
    constructor(nombre, artista, id, portada, pistas, stock = null) {
        this.nombre = nombre;
        this.artista = artista;
        this.id = id;
        this.portada = portada;
        this.pistas = pistas;
        this.stock = stock !== null ? stock : this.generarStockAleatorio();
    }

    // genero stock aleatorio a los discos desde json
    generarStockAleatorio() {
        return Math.floor(Math.random() * 10) + 1;
    }

    // calculo la duración total de todas las canciones en segundos
    calcularDuracionTotal() {
        const total = this.pistas.reduce((total, pista) => {
            return total + pista.duracion;
        }, 0);
        return total;
    }

    toHTML() {
        let html = "";
        html += `<div class="card">\n`;
        html += `<h2>${this.nombre}</h2>\n`;
        html += `<img src="${this.portada}" class="img">\n`;
        html += `<div>\n`;
        html += `<h3>${this.artista}</h3>\n`;
        html += `<h4>ID: ${this.id}</h4>\n`;
        html += `<h4>Pistas:</h4>\n<ul>`;

        this.pistas.forEach(pista => {
            const pistaEstilo = pista.duracion > 180 ? 'style="color: yellow;"' : '';
            html += `<li ${pistaEstilo}>${pista.nombre} - ${segundosAMinutos(pista.duracion)}</li>`;
        });

        html += `</ul>\n`; 

        const duracionTotal = this.calcularDuracionTotal();
        html += `<h4>Duración Total: ${segundosAMinutos(duracionTotal)}</h4>\n`;

        html += `</div>\n`;
        html += `<button onclick="pedirDisco('${this.nombre}')">Pedir</button>`;
        html += `<button onclick="devolverDisco('${this.nombre}')">Devolver</button>`;
        html += `</div>\n`;

        return html;
    }
    

    static pedirNombre() {
        return this.pedirString("Ingrese el nombre del disco");
    }

    static pedirArtista() {
        return this.pedirString("Ingrese el artista del disco");
    }

    static pedirId() {
        return this.pedirString("Ingrese el id del disco");
    }

    static pedirPortada() {
        return this.pedirString("Ingrese la portada del disco");
    }

    static pedirString(msg) {
        let dato;
        let datoValido = true;
        do {
            dato = prompt(msg);
            
            if (dato === null) {
                alert("Complete el campo.");
                datoValido = false;
            } else if (dato.trim() === "") {
                alert("Debe llenar el campo.");
                datoValido = false;
            } else {
                datoValido = true;
            }
        } while (!datoValido);

        return dato;  
    }
    
}
