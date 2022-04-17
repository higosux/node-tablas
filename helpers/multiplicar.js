// IMPORTACION DEL FILE SYSTEM
const fs     = require('fs');
const colors = require('colors');

const  crearArchivo  = async( base = 5 , listar, hasta)  =>  {
    try {

        let salida = '';

        for (let i = 1; i <= hasta; i++) {

            salida += `${ base } x ${i} = ${ i * base } \n`;
            
        }

        if(listar){
            console.log(colors.rainbow('====================='))
            console.log(colors.rainbow(`=== Tabla del ${base} ===`))
            console.log(colors.rainbow('====================='))
            console.log(colors.green(`${ salida } `));
        }
        

        // Escribe la salida en un txt segun el directorio que una elija

        /* fs.writeFile( `tablas/tabla-${base}.txt`, salida, 'utf8', (err) => {
            if(err) throw err;

            console.log(`tabla-${base}.txt ha sido creada`);
        } ); */

        // El problema de este es que si tiene un 
        // problema hay que hacerlo con un try catch

        fs.writeFileSync( `./tablas/tabla-${base}.txt`, salida );
        const resultado = await colors.rainbow(`tabla-${base}.txt`);
        

        return resultado;
    } catch (error) {
        throw error;
    }
    
}

// En caso de ser necesario puede ser un JSON 
module.exports = crearArchivo;


