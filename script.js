// function prestar() {
//     // Obtener los valores de los inputs
//     var funcionario = document.getElementById('Funcionario').value;
//     var herramientas = document.getElementById('Herramientas').value;

//     // Validar que ambos campos no estén vacíos
//     if (funcionario === "" || herramientas === "") {
//         alert('Por favor, ingrese el nombre del funcionario y la herramienta para realizar un prestamo.');
//         return;
//     }

//     // Crear un nuevo elemento de lista con los datos ingresados
//     var nuevoPrestamo = document.createElement('li');
//     nuevoPrestamo.textContent = funcionario + ' - ' + herramientas;

//     // Agregar el nuevo elemento a la lista
//     var listaPrestamos = document.getElementById('listaDePrestamos');
//     listaPrestamos.appendChild(nuevoPrestamo);

//     // Limpiar los campos de entrada después de agregar el préstamo
//     document.getElementById('Funcionario').value = '';
//     document.getElementById('Herramientas').value = '';
// }

class Prestamo {
    constructor(funcionario, herramienta) {
        this.funcionario = funcionario;
        this.herramienta = herramienta;
        this.fechaPrestamo = new Date(); // Fecha actual como fecha de préstamo
    }

    // Método para obtener una representación de texto del préstamo
    toString() {
        return `${this.funcionario} : ${this.herramienta} - ${this.fechaPrestamo}`;
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
            li.textContent = prestamo.toString();
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


