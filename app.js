const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }

}).argv;

const getInfo = async(direccion) => {

    try {
        let coordenadas = await lugar.getLugarLatitudLongitud(direccion);
        let climaCiudad = await clima.getClima(coordenadas.lon, coordenadas.lat);
        return `El clima de ${direccion} es de ${climaCiudad}`;
    } catch (e) {
        return `No se pudo obtener el clima de ${direccion}`;
    }
}


getInfo(argv.direccion).then((result) => {
    console.log(result);
}).catch((resp) => {
    console.log(resp);
});