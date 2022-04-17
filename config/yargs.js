const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                description: 'Solicita la base a multiplicarse X veces'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
                description: 'Listar por consola el resultado',
                default: false
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                description: 'Hasta que numero se va multiplicar',
                default: 10
            })
            .check( (argv, options) => {
                if(isNaN(argv.b)){
                    throw 'La base tiene que se un numero';
                }else{
                    // Despues de hacer las verificaciones retornar true
                    return true;
                }
                
            })
            .argv;

module.exports = argv;            