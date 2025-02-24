// Función que intenta convertir una cadena a número
function convertirCadenaANumero(cadena) {
    try {
        // Intentamos convertir la cadena a número
        const numero = Number(cadena);

        // Verificamos si la conversión es válida (si no es un número, el valor es NaN)
        if (isNaN(numero)) {
            throw new Error("La cadena no es un número válido");
        }

        console.log("Número convertido:", numero);
    } catch (error) {
        // Si ocurre un error, lo capturamos y lo mostramos
        console.log("Error:", error.message);
    }
}

// Ejemplo de uso
convertirCadenaANumero("1");  // Resultado esperado: Número convertido: 123
convertirCadenaANumero("a");  // Resultado esperado: Error: La cadena no es un número válido
