class Prestamo {
    constructor(funcionario, herramienta) {
        this.funcionario = funcionario;
        this.herramienta = herramienta;
    }

    creasrPrestamo() {
        return `${this.funcionario} - ${this.herramienta}`;
    }
}

// Definición de la clase ControlHerramientas
class ControlHerramientas {
    constructor() {
        this.prestamos = []; // Array para almacenar los préstamos
    }

    // Método para prestar una herramienta
    prestar(funcionario, herramienta) {
        const nuevoPrestamo = new Prestamo(funcionario, herramienta);
        this.prestamos.push(nuevoPrestamo);
        this.actualizarLista();
    }

    // Método para actualizar la lista en el HTML
    actualizarLista() {
        const lista = document.getElementById('listaDePrestamos');
        lista.innerHTML = ''; // Limpiar la lista

        this.prestamos.forEach(prestamo => {
            const li = document.createElement('li');
            li.textContent = prestamo.creasrPrestamo();
            lista.appendChild(li);
        });
    }
}

// Instancia de ControlHerramientas
const controlHerramientas = new ControlHerramientas();

// Función para manejar el préstamo desde el botón
function prestar() {
    const funcionario = document.getElementById('Funcionario').value.trim();
    const herramienta = document.getElementById('Herramientas').value.trim();

    if (funcionario !== '' && herramienta !== '') {
        controlHerramientas.prestar(funcionario, herramienta);
        // Limpiar los campos después de prestar
        document.getElementById('Funcionario').value = '';
        document.getElementById('Herramientas').value = '';
    } else {
        alert('Por favor, ingresa el nombre del funcionario y la herramienta.');
    }
}


