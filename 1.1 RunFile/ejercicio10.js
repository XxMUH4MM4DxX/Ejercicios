// Función que simula una operación asincrónica
function operacionAsincrona(callback) {
    setTimeout(() => {
        const resultado = "Operación completada con éxito";
        callback(null, resultado); // Llamamos al callback con el resultado
    }, 2000); // Simula un retraso de 2 segundos
}

// Función callback para manejar el resultado
function manejarResultado(error, resultado) {
    if (error) {
        console.log("Hubo un error:", error);
    } else {
        console.log("Resultado:", resultado);
    }
}

// Llamamos a la función asincrónica y pasamos el callback
operacionAsincrona(manejarResultado);