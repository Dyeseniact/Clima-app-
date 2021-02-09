const axios = require('axios');

class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'San Jose'];

    constructor(){
        //TODO: LEER DB SI EXISTE

    }
    async ciudad(lugar = ''){
        try {
            // peticion http
            //console.log('ciudad',lugar);
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);
            return []; //retornar todas las cuidades


        } catch (error) {
            console.log('No se encontro nada');
            return [];
        }

        
    }

}

module.exports = Busquedas;