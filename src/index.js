// Función para obtener los datos de entrada de varias personas
function obtenerDatos() {
    const personas = [];
    const numPersonas = parseInt(prompt("Ingrese el número de personas:"));
    for (let i = 0; i < numPersonas; i++) {
        const nombre = prompt(`Ingrese el nombre de la persona ${i + 1}:`);
        const edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1}:`));
        personas.push({ nombre, edad });
    }
    return personas;
}

// Función para procesar los datos y determinar si cada persona es mayor o menor de edad
function procesarDatos(personas) {
    const resultados = [];
    personas.forEach(persona => {
        if (persona.edad >= 18) {
            resultados.push(`Hola ${persona.nombre}, eres mayor de edad.`);
        } else {
            resultados.push(`Hola ${persona.nombre}, eres menor de edad.`);
        }
    });
    return resultados;
}

// Función para mostrar los resultados de salida
function mostrarResultado(resultados) {
    resultados.forEach(resultado => alert(resultado));
}

// Llamada a las funciones
const personas = obtenerDatos();
const resultados = procesarDatos(personas);
mostrarResultado(resultados);   

