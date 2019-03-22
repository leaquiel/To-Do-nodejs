const fs = require('fs');

let listadoToDo = [];



const saveDB = () => {

    let data = JSON.stringify(listadoToDo);

    fs.writeFile(`DB/data.json`, data, (err) => {
        if (err) throw new Error('No se puso grabar ', err);
    });

}


const loadDB = () => {

    try {

        listadoToDo = require('../db/data.json');

    } catch (error) {

        listadoToDo = [];

    }

}

const descripcionExist = (descripcion) => {

    loadDB();

    let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion);

    if (index > 0) {
        return true;
    } else {
        return false;
    }
}


const crear = (descripcion) => {

    if (!descripcionExist(descripcion)) {

        loadDB();

        let toDo = {
            descripcion,
            completado: false
        };

        listadoToDo.push(toDo);

        saveDB();

        return toDo;
    } else {
        return ('Ya existe una tarea similar');
    }

}


const getListado = () => {

    loadDB();

    return listadoToDo;

}

const actualizar = (descripcion, completado = true) => {

    loadDB();

    let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoToDo[index].completado = completado;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    loadDB();

    let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion);

    // let nuevoListado = listadoToDo.filter( tarea => {
    //     return tarea.descripcion !== descripcion
    // });
    // ESTE METODO ME BUSCA EN EL ARRAY LO QUE MANDO Y DEVUELVE LO QUE QUIERO
    // EN ESTE CASO UN NUEVO ARRAY DONDE NO ESTA LA TAREA CON LA DESCRIPCION INGRESADA

    if (index > -1) {
        listadoToDo.splice(index, 1);
        saveDB();
        return true;
    } else {
        return false;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}