import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1> Hola mundo </h1>");
});

app.get("/", (req, res) => {
    res.send("<p> Respuesta GET</p>");
});

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto 3000");
}
);

app.post("/registro", (req, res) => {
    res.sendStatus(201);
});

app.put('/usuario/actualizar', (req, res) => {
    res.sendStatus(200);
    res.send('usuario actualizado');
})

app.patch('/usuario/modificar', (req, res) => {
    res.sendStatus(200);
    res.send('usuario actualizado');
})

app.delete('/usuario/eliminar', (req, res) => {
    res.sendStatus(200);
    res.send('usuario eliminado');
})