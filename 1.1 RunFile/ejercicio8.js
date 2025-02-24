// Crear un objeto que represente un auto
let auto = {
    marca: "Toyota",
    modelo: "Tacoma",
    año: 2024,
    color: "Blanco",
    blindaje:"Blindaje 5 Plus",
};

// Imprimir el objeto en consola
console.log(auto);


// Agregar un método al objeto auto para describir el vehículo
auto.descripcion = function() {
    return `Este es una ${this.modelo} de la marca ${this.marca} es de color ${this.color} y es del año ${this.año} y cuenta con un ${this.blindaje}.` ;
};

// Llamamos al método para imprimir la descripción
console.log(auto.descripcion());
