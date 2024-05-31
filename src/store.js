document.addEventListener("DOMContentLoaded", function () {
  const storeItemsDiv = document.getElementById("store-items");

  const items = [
    { id: 1, nombre: "Casco", precio: 238000, imagen: "./assets/casco.png" },
    { id: 2, nombre: "Guantes", precio: 85000, imagen: "./assets/guantes.png" },
    {
      id: 3,
      nombre: "Chaqueta",
      precio: 179000,
      imagen: "./assets/chaqueta.png",
    },
    {
      id: 4,
      nombre: "Pantalon",
      precio: 165000,
      imagen: "./assets/pantalon.png",
    },
    { id: 5, nombre: "Botas", precio: 180000, imagen: "./assets/botas.png" },
    {
      id: 6,
      nombre: "Pasamontañas",
      precio: 35000,
      imagen: "./assets/pasamontañas.png",
    },
  ];

  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("bg-white", "p-4", "rounded-lg", "shadow-md");

    const img = document.createElement("img");
    img.src = item.imagen;
    img.alt = item.nombre;
    img.classList.add("w-full", "h-auto", "mb-4");

    const nombre = document.createElement("h2");
    nombre.textContent = item.nombre;
    nombre.classList.add("text-xl", "font-bold", "mb-2");

    const precio = document.createElement("p");
    precio.textContent = `$${item.precio}`;
    precio.classList.add("text-gray-700", "mb-2");

    const agregarCarritoBtn = document.createElement("button");
    agregarCarritoBtn.textContent = "Agregar al carrito";
    agregarCarritoBtn.classList.add(
      "bg-blue-500",
      "text-white",
      "px-4",
      "py-2",
      "rounded-md",
      "hover:bg-blue-600",
      "focus:outline-none",
      "focus:border-blue-700",
      "focus:ring",
      "focus:ring-blue-200",
      "focus:ring-opacity-50",
      "mb-2"
    );
    agregarCarritoBtn.addEventListener("click", function () {
      agregarAlCarrito(item);
    });

    itemDiv.appendChild(img);
    itemDiv.appendChild(nombre);
    itemDiv.appendChild(precio);
    itemDiv.appendChild(agregarCarritoBtn);

    storeItemsDiv.appendChild(itemDiv);
  });

  function agregarAlCarrito(item) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(item);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  const cartAccessBtn = document.getElementById("cart-access-btn");

  // Mostrar u ocultar botón de acceso al carrito según el estado del carrito
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  if (carrito.length > 0) {
    cartAccessBtn.style.display = "block";
  } else {
    cartAccessBtn.style.display = "none";
  }

  // Redireccionar al carrito al hacer clic en el botón de acceso al carrito
  cartAccessBtn.addEventListener("click", function () {
    window.location.href = "./cart.html";
  });
});
