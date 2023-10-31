import { Resend } from 'resend';

import express from 'express';

import path from 'path';

import { fileURLToPath } from 'url';

import Swal from 'sweetalert2';

const alert = new Swal();

/* const express = require('express');

const path = require('path'); */

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

app.post("/cotizacion", (req, res) => {

    const userName = req.body.name;
    const userMail = req.body.mail;
    const rut = req.body.rut;
    const address = req.body.address;
    const commune = req.body.commune;
    const phone = req.body.phone;
    const products = req.body.product;
    const comment = req.body.comment;
    console.log(req.body.product);

        try {
            resend.emails.send({
                from: 'onboarding@resend.dev',
                to: 'meipulseras@gmail.com',
                subject: 'Cotización',
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
    
            /* alert.fire({
                title: 'Cotización OK',
                text: 'Su cotización fue enviada correctamente. Espere nuestra respuesta.',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                showConfirmButton: true,
            });
 */
        } catch (e) {
            console.log(e);
        } 
    
        res.redirect('/');

    
});



const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));