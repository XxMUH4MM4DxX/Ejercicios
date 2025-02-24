const fs = require("fs");

//usar el metodo writeFile para escribir un archivo.
// fs.writerFile(file, data[, options], callback )

fs.writeFile("archivo.txt", "texto-contenido del archivo", (err)=>{
    if(err)throw err;
    console.log("El archivo se ha creado");
})