import Servicio from '../servicio/pedidosService.js'


class Controlador {
    #servicio = null

    constructor() {
        this.#servicio = new Servicio()
    }

    obtenerPedidos = async (req,res) => {
        try {
            const pedidos = await this.#servicio.obtenerPedidos()
            res.json(pedidos)
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    guardarPedido = async (req,res) => {
        try {
            const pedido = req.body

            //validación genérica
            if(!Object.keys(pedido).length) throw new Error('El pedido está vacío')

            const pedidoGuardado = await this.#servicio.guardarPedido(pedido)
            res.json(pedidoGuardado)
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    createPreference = async (req,res) => {
        try {
            const datos = req.body
            //console.log('datos',datos)
            //console.log('prefItems.body.back_urls.success',datos.prefItems.body.back_urls.success)
            //console.log('prefItems.body.back_urls.pending',datos.prefItems.body.back_urls.pending)
            //console.log('prefItems.body.back_urls.failure',datos.prefItems.body.back_urls.failure)
            /*for (const key in datos.prefItems.body) {
            console.log(key, datos.prefItems.body[key]);
            }*/
            const preferenceId = await this.#servicio.createPreference(datos)
            //console.log('preference', preferenceId)
            res.json(preferenceId)
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }
}


export default Controlador