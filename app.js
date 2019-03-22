// const { argv } = require('yargs');
const { argv } = require('./config/yargs');

const colors = require('colors');

const toDo = require('./TO-DO/TO-DO');

let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = toDo.getListado();

        for (const tarea of listado) {
            console.log('======= To Do List ======='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', (tarea.completado == true) ? 'finalizada' : 'incompleta');
            console.log('=========================='.green);
        }

        break;

    case 'actualizar':

        if (toDo.actualizar(argv.descripcion, argv.completado)) {
            console.log('Se completo la tarea');
        } else {
            console.log('No existe una tarea con ese nombre');
        }

        break;

    case 'borrar':

        let borrado = toDo.borrar(argv.descripcion);
        console.log(borrado == true ? 'Actividad eliminada'.red : 'No se encontro actividad'.yellow);

        break;

    default:
        console.log(`El comando "${comando}" no es reconocido`);
        break;
}