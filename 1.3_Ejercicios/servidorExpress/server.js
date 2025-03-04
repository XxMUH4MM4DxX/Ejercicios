import express from 'express'
import path from 'node:path';

const __dirname = path.dirname('C:\\Users\\julia\\Desktop\\1.3_Ejercicios\\servidorExpress\\ \\');

const app = express();
const port = 3000;

app.use(express.static(__dirname+ "/public"));

app.get('/', (req, res) =>{
    res.sendFile(__dirname+'/views/home.html');
})
app.get('/about', (req, res)=>{
    res.sendFile(__dirname+'/views/about.html');
})
app.get('/contact', (req, res)=>{
    res.sendFile(__dirname+'/views/contact.html');
})

app.listen(port, ()=>{
    console.log(`Servidor al escucha en http://localhost:${port}/`)
})