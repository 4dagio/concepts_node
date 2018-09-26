const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime la tabla', opt)
    .command('crear', 'crea la tabla', opt)
    .help()
    .argv;

module.exports = {
    argv
}