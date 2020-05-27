const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'crear una tarea por hacer', { descripcion })
    .command('actualizar', 'actualizar una tarea por hacer como completada', { descripcion, completado })
    .command('listar', 'Imprime en consola la tabla de mulplicar')
    .command('borrar', 'Elimina una tarea por hacer', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}