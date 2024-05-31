document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("person-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);

    if (edad >= 18) {
      alert(
        `Hola ${nombre}, eres mayor de edad. ¡Bienvenido/a a la tienda de motociclismo!`
      );
      window.location.href = "./store.html";
    } else {
      alert(
        `Hola ${nombre}, eres menor de edad. No puedes acceder a la tienda de motociclismo.`
      );
    }
  });
});

// Se almacena en LocalStorage
localStorage.setItem("personas", JSON.stringify(personas));

// Verifica si todos son mayores de edad
const todosMayores = personas.every((persona) => persona.edad >= 18);
if (todosMayores) {
  window.location.href = "./store.html";
}

// Obtiene datos de LocalStorage al cargar la página
const personasGuardadas = localStorage.getItem("personas");
if (personasGuardadas) {
  const personas = JSON.parse(personasGuardadas);
  const resultados = procesarDatos(personas);
  mostrarResultado(resultados);
}

async function obtenerDatos(numPersonas) {
  let personas = await obtenerDatosDesdeJSON();
  if (!personas || personas.length === 0) {
    personas = [];
    for (let i = 0; i < numPersonas; i++) {
      const nombre = `Persona ${i + 1}`;
      const edad = _.random(10, 60); 
      personas.push({ nombre, edad });
    }
  }
  return personas.slice(0, numPersonas);
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

function mostrarResultado(resultados) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Se limpia el div de resultados antes de mostrar los nuevos resultados
  resultados.forEach((resultado) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = resultado;
    resultsDiv.appendChild(paragraph);
  });
}
