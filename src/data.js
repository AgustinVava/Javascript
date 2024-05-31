async function obtenerDatosDesdeJSON() {
  try {
    const response = await fetch("./data/personas.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al cargar el archivo JSON:", error);
  }
}
