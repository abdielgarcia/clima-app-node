const axios = require('axios');

const getLugarLatitudLongitud = async(direccion) => {

    //Codifica el parametro y viaja mas seguro
    let encondeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encondeUrl}&appid=243769a3135b7d690e093451313a89e6`,
        headers: {
            'appid': '243769a3135b7d690e093451313a89e6'
        }
    });

    const resp = await instance.get();

    const lat = resp.data.coord.lat;
    const lon = resp.data.coord.lon;

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatitudLongitud
}