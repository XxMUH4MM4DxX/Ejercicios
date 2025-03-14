import express from "express";
import { dirname } from "path";
import { fileURLToPath} from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log( __dirname);


const port = 3000;
const app = express();
var nombreEquipo="";

function registrador(req, res, next){
    console.log(req.body);
    nombreEquipo = req.body["mascota"] + req.body["adjetivo"]
    next();
}

app.use(bodyParser.urlencoded({ extended: true}));
app.use(registrador);

app.get ("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})


app.post("/submit", (req, res) => {
    res.send(`<h1>EL NOMBRE DE TU EQUIPO ES:</h1>${nombreEquipo} 👌👍</h2>`);
})

app.listen(port, () => {
    console.log(`Servidor Ejecutandose en el puerto en http://localhost:${port}`)
})
