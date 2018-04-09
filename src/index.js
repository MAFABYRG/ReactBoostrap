import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import PMenu from './pmenu';
import Banner from './banner';
import Articulo from './articulo';
import Pie from './pie';




var btitulo='Cursos de programación';
var bsubtitulo='Adquiere tu curso de programación desde $10';


var atitulo1='Programación en PHP con Laravel';
var autor1='Por Hugo Gómez, Febrero 03, 2018.';

var atitulo2='Programación en Asp.net';
var autor2='Por Hugo Gómez, Febrero 03, 2018.';

var atitulo3='Arduino y el IOT';
var autor3='Por Hugo Gómez, Febrero 03, 2018.';

const mimenu = document.getElementById('menu');
const mibanner = document.getElementById('banner');
const miarticulo1 = document.getElementById('articulo1');
const miarticulo2 = document.getElementById('articulo2');
const miarticulo3 = document.getElementById('articulo3');
const mipie = document.getElementById('piedepagina');


var color1="text-light";
var fondo1="bg-secondary"


ReactDOM.render(<PMenu />, mimenu);

ReactDOM.render(<Banner titulo={btitulo} subtitulo={bsubtitulo} />, mibanner);


ReactDOM.render(<Articulo titulo={atitulo1} autor={autor1} colordetexto={color1} colordefondo={fondo1} />, miarticulo1);
ReactDOM.render(<Articulo titulo={atitulo2} autor={autor2} />, miarticulo2);
ReactDOM.render(<Articulo titulo={atitulo3} autor={autor3} />, miarticulo3);
ReactDOM.render(<Pie />, mipie);


//registerServiceWorker();
