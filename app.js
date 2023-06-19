class Item {

    constructor(nombre, precio, imagen) {
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
    }
  }
  
  // Variables globales
  

  const mochila = [];
  
  // Items del juego
  const pistola = new Item("Pistola", 80, "pistol.png");
  const escopeta = new Item("Escopeta", 160, "shotgun.png");
  const rifle = new Item("Rifle", 120, "sniper.png");
  
  // Pesetas
  let oro = 1000;
  
  // Elementos
  const elementoOro = document.querySelector("#oro span");
  const elementoMochila = document.querySelector("#mochila");
  elementoOro.innerText = oro;
  
  // Funciones regulares
  
  function comprar(item) {
    if (oro - item.precio <= 0) {
      alert("No tienes suficientes pesestas para comprar " + item.nombre + ".");
    } else if (mochila.length > 5) {
      alert("No tienes más espacio en el maletin.");
    } else {
      mochila.push(item);
      oro = oro - item.precio; 
      actualizarHTML();
    }
  }
  
 
  function vender(indice) {
    const item = mochila[indice];
    oro = oro + item.precio;
    mochila.splice(indice, 1);
    actualizarHTML();
  }
  
  
  function actualizarHTML() {
    elementoMochila.innerHTML = "";
    for (const item of mochila) {
      let indiceItem = mochila.indexOf(item);
      let elementoItem = `
          <li class="item" onclick="vender(${indiceItem})">
              <img src="img/${item.imagen}" />
          </li>`;
      elementoMochila.innerHTML += elementoItem;
    }
    elementoOro.innerText = oro;
  }


