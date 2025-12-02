import ModelFS from "./productosFSDAO.js"
import ModelMem from "./productosMemDAO.js"
import ModelMongo from "./productosMongoDAO.js"


class Model {
    static get(modoPersistencia) {
        switch(modoPersistencia) {
            case 'MEM':
                console.log('*** Persistiendo en Memoria (productos) ***')
                return new ModelMem()
            
            case 'FS':
                console.log('*** Persistiendo en File System (productos) ***')
                return new ModelFS()

            case 'MONGODB':
                console.log('*** Persistiendo en Base de Datos MongoDB (productos) ***')
                return new ModelMongo()

            default:
                console.log('*** Persistiendo en Memoria (default) (productos) ***')
                return new ModelMem()
        }
    }
}

export default Model