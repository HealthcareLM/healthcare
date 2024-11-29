import db from "../config/database";
import { IUsuario } from "../interfaces/Usuarios";
import bcrypt from 'bcrypt'

const collectionName = 'usuarios'

export const Usuarios = {
    async create(usuario: IUsuario) {
        try {
            const newUser = usuario
            newUser.password = await bcrypt.hash(newUser.password, 10)

            const insert = await db.collection(collectionName).add(newUser)
        
            return insert.id
        } catch (error) {
            throw new Error('Ocurrio un error al crear el usuario')
        }
    },

    async findEmail(email: string): Promise <IUsuario | false> {
        const usuarios = await db.collection(collectionName).where('email', '==', email).get()
        
        if (usuarios.empty) {
          return false
        }

        const usuario = usuarios.docs[0]

        return {
            id: usuario.id,
            ...usuario.data(),
        } as IUsuario
    },


    async verifyPassword(password: string, hash: string) {
      const result = bcrypt.compare(password, hash)
      return result
    }
}