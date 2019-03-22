const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de TO DO'
};

const completado = {
    alias: 'c',
    default: true
};




const { argv } = require('yargs')
    .command('crear', 'Crea un TO DO', { descripcion })
    .command('borrar', 'Elimina un TO DO', { descripcion })
    .command('actualizar', 'Actualiza el estado de un TO DO', { descripcion, completado })
    .command('listar', 'Muestra todos los TO DO', { completado })
    .help();


module.exports = {
    argv
}