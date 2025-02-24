// Función que toma dos números y aplica una operación (suma en este caso)

function OperarNumeros(num1, num2, operacion){
    return operacion(num1, num2);
}


function suma (a,b){
    return (a+b);
}

console.log(OperarNumeros(7,7, suma));


