const axios = require('axios');

const getClima = async(lon, lat) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=243769a3135b7d690e093451313a89e6&units=metric`);
    // `http:api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=243769a3135b7d690e093451313a89e6&units=metric`

    return resp.data.main.temp;
}

module.exports = {
    getClima
}