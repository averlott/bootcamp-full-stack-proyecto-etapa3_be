import express from 'express'

import Controlador from '../controlador/pedidosController.js'


class Router {
    #controlador = null
    constructor() {
        this.#controlador = new Controlador()
    }

    config() {
        const router = express.Router()

        router.get('/',this.#controlador.obtenerPedidos)
        router.post('/', this.#controlador.guardarPedido)
        router.post('/mp/create_preference', this.#controlador.createPreference)

        return router
    }
}

export default Router