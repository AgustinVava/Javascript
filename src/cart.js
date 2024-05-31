document.addEventListener("DOMContentLoaded", function () {
  const cartItemsDiv = document.getElementById("cart-items");
  const comprarBtn = document.getElementById("comprar-btn");

  mostrarCarrito();

  comprarBtn.addEventListener("click", function () {
    comprar();
  });

  function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    cartItemsDiv.innerHTML = "";
    carrito.forEach((item, index) => {
      
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("bg-white", "p-4", "rounded-lg", "shadow-md");

      const nombre = document.createElement("h2");
      nombre.textContent = item.nombre;
      nombre.classList.add("text-xl", "font-bold", "mb-2");

      const precio = document.createElement("p");
      precio.textContent = `$${item.precio}`;
      precio.classList.add("text-gray-700", "mb-2");

      // Botón de eliminar
      const eliminarBtn = document.createElement("button");
      eliminarBtn.textContent = "Eliminar";
      eliminarBtn.classList.add(
        "bg-red-500",
        "text-white",
        "px-4",
        "py-2",
        "rounded-md",
        "hover:bg-red-600",
        "focus:outline-none",
        "focus:border-red-700",
        "focus:ring",
        "focus:ring-red-200",
        "focus:ring-opacity-50",
        "mb-2"
      );
      eliminarBtn.addEventListener("click", function () {
        eliminarDelCarrito(index); 
      });

      itemDiv.appendChild(nombre);
      itemDiv.appendChild(precio);
      itemDiv.appendChild(eliminarBtn);

      cartItemsDiv.appendChild(itemDiv);
    });
  }

  function comprar() {
    localStorage.removeItem("carrito");
    alert("¡Gracias por tu compra!");
    window.location.href = "./index.html";
  }

  function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1); 
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito(); 
  }
});
