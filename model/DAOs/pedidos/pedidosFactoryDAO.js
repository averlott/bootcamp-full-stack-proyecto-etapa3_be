import ModelFS from "./pedidosFSDAO.js"
import ModelMem from "./pedidosMemDAO.js"
import ModelMongo from "./pedidosMongoDAO.js"


class Model {
    static get(modoPersistencia) {
        switch(modoPersistencia) {
            case 'MEM':
                console.log('*** Persistiendo en Memoria (pedidos) ***')
                return new ModelMem()
            
            case 'FS':
                console.log('*** Persistiendo en File System (pedidos) ***')
                return new ModelFS()

            case 'MONGODB':
                console.log('*** Persistiendo en Base de Datos MongoDB (pedidos) ***')
                return new ModelMongo()

            default:
                console.log('*** Persistiendo en Memoria (default) (pedidos) ***')
                return new ModelMem()
        }
    }
}

export default Model