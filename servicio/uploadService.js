class Servicio {

    constructor() {}

    recibirArchivo = async function(file) {
        //const url = 'http://localhost:8080/tmp/uploads/' + file.filename
        const url = './tmp/uploads/' + file.filename
        return url
    }
}

export default Servicio