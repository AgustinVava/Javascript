document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("person-form");
  const resultsDiv = document.getElementById("results");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const numPersonsInput = document.getElementById("num-persons");
    const numPersons = parseInt(numPersonsInput.value);
    const personas = obtenerDatos(numPersons);
    const resultados = procesarDatos(personas);
    mostrarResultado(resultados);
  });
});

function obtenerDatos(numPersonas) {
  const personas = [];
  for (let i = 0; i < numPersonas; i++) {
    const nombre = prompt(`Ingrese el nombre de la persona ${i + 1}:`);
    const edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1}:`));
    personas.push({ nombre, edad });
  }
  return personas;
}

function procesarDatos(personas) {
  const resultados = [];
  personas.forEach((persona) => {
    if (persona.edad >= 18) {
      resultados.push(`Hola ${persona.nombre}, eres mayor de edad.`);
    } else {
      resultados.push(`Hola ${persona.nombre}, eres menor de edad.`);
    }
  });
  return resultados;
}
