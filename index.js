import { Resend } from 'resend';

import express from 'express';

import path from 'path';

import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

//express.urlencoded y express.json para que pesque datos de form.html
app.use(express.urlencoded({extended: true}));

app.use(express.json());

const resend = new Resend('re_X8pamAX5_FQUm3vQAXRkkgjwf46sFrkFC');

//Para que pesque imagenes y estilos
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/cotizacion', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/form.html'));
});

app.get('/enviado', (req, res) => {

    res.sendFile(path.join(__dirname + '/views/ok.html'));

});

app.get('/noenviado', (req, res) => {

    res.sendFile(path.join(__dirname + '/views/error.html'));

});

app.post("/cotizacion", (req, res) => {

    const userName = req.body.name;
    const userMail = req.body.mail;
    const rut = req.body.rut;
    const address = req.body.address;
    const commune = req.body.commune;
    const phone = req.body.phone;
    const products = req.body.product;
    const comment = req.body.comment;
    
    var hora = new Date().toLocaleTimeString('en-US', { timezone: 'America/Chicago' });

    var fecha = new Date().toLocaleDateString('es-CL', { timezone: 'America/Santiago' });

    console.log(fecha +' '+hora);

        try {
            resend.emails.send({
                from: 'onboarding@resend.dev',
                to: 'meipulseras@gmail.com',
                subject: 'Cotización ' + fecha + ' ' + hora,
                html: '<ol>'+
                '<li><b>Nombre completo:</b> '+userName+'</li>'+
                '<li><b>RUT:</b> '+rut+'</li>'+
                '<li><b>Dirección:</b> '+address+'</li>'+
                '<li><b>Comuna:</b> '+commune+'</li>'+
                '<li><b>Teléfono:</b> '+phone+'</li>'+
                '<li><b>Email:</b> '+userMail+'</li>'+
                '</ol>'+
                '<p><b>El/los productos a cotizar son los siguientes:</b> '+products+'</p>'+
                '<p><b>Comentario:</b> '+comment+'</p>'
            });
    
            res.redirect('/enviado');

        } catch (e) {
            console.log(e);
            res.redirect('/noenviado');
        } 
    
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));