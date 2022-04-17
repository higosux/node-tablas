const crearArchivo = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();


console.log(argv);

//Ver argumentos al ejecutar node
//console.log(process.argv);
// const [,,arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');
//let base = 2;

crearArchivo( argv.base , argv.listar, argv.hasta )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));