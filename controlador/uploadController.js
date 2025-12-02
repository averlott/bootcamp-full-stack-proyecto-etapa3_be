import Servicio from '../servicio/uploadService.js'


class Controlador {
    #servicio = null

    constructor() {
        this.#servicio = new Servicio()
    }

    recibirArchivo = async (req,res) => {
        try {
            const file = req.file
            const urlFile = await this.#servicio.recibirArchivo(file)
            res.json({urlFile})     // es igual a -> { urlFoto: urlFoto }
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }
}


export default Controlador