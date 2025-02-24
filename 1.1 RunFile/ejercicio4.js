// Función que toma dos números y aplica una operación (suma en este caso)
function operarNumeros(num1, num2, operacion) {
    return operacion(num1, num2);
}

// Definimos una operación de suma
function suma(a, b) {
    return a + b;
}

// Llamamos a la función con la operación de suma
console.log(operarNumeros(7, 7, suma)); // Resultado: 8