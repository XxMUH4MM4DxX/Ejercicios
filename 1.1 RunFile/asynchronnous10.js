
function OperacionAsincronica(x, callback){
    console.log("Procesando.....");

    setTimeout( () => {
        if(isNaN (x)){
            callback (new Error ("Ingrese un valor entero..."), null);
        }else{
            callback(null, x); 
        }
    }, 4000 )
}

OperacionAsincronica (5,(error, resultado) =>{
    if(error){
        console.error(mensaje.error);
    } else {
        console.log("resultado:", resultado); 
    }
}
 )