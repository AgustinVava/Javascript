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
    carrito.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("bg-white", "p-4", "rounded-lg", "shadow-md");

      const nombre = document.createElement("h2");
      nombre.textContent = item.nombre;
      nombre.classList.add("text-xl", "font-bold", "mb-2");

      const precio = document.createElement("p");
      precio.textContent = `$${item.precio}`;
      precio.classList.add("text-gray-700", "mb-2");

      itemDiv.appendChild(nombre);
      itemDiv.appendChild(precio);

      cartItemsDiv.appendChild(itemDiv);
    });
  }

  function comprar() {
    localStorage.removeItem("carrito");
    alert("¡Gracias por tu compra!");
    window.location.href = "./index.html";
  }
});
