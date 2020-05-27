const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

let crearArchivo = (nombreArchivo, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(nombreArchivo, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(nombreArchivo);
        });
    });
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    let nombreArchivo = 'db/data.json';
    crearArchivo(nombreArchivo, data)
        .then(archivo => console.log(`Archivo creado ${colors.green(archivo)}`))
        .catch(err => console.log(err));
}

let cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let i = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (i.length == listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = i;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}