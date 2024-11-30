import db from "../config/database";
import { IUsuario } from "../interfaces/Usuarios";
import bcrypt from 'bcrypt'

const collectionName = 'usuarios'

export const Usuarios = {

    async all(){
        try {
            const query = await db.collection(collectionName).get()
        
            const usuarios : IUsuario[] = query.docs.map(user => {
                return {
                    id: user.id,
                    ...user.data()
                } as IUsuario
            })

            return usuarios
        } catch (error) {
            throw new Error('Ocurrió un error al obtener a todos los usuarios');
        }
    },

    async some(limit: number){
        try {
            const query = await db.collection(collectionName).limit(limit).get()

            const usuarios : IUsuario[] = query.docs.map(user => {
                return {
                    id: user.id,
                    ...user.data()
                } as IUsuario
            })

            return usuarios

        } catch (error) {
            throw new Error('Ocurrió un error algunos usuarios');
        }
    },

    async where(columna: string, valor: string) {
        try {
            const snapshot = await db.collection(collectionName).where(columna, '==', valor).get()
        
            if (snapshot.empty) {
                return false
            }

            if(snapshot.size === 1) {
                const usuario = snapshot.docs[0]

                return {
                    id: usuario.id,
                    ...usuario.data(),
                } as IUsuario
            } else {
                const usuarios : IUsuario[] = snapshot.docs.map(user => {
                    return {
                        id: user.id,
                        ...user.data()
                    } as IUsuario
                })
    
                return usuarios
            }
        } catch (error) {
            throw new Error('Ocurrió un error en la consulta where');
        }
    },

    async somewhere(columna: string, valor: string, limit: number) {
        try {
            const snapshot = await db.collection(collectionName).where(columna, '==', valor).limit(limit).get()
        
            if (snapshot.empty) {
                return false
            }

            if(snapshot.size === 1) {
                const usuario = snapshot.docs[0]

                return {
                    id: usuario.id,
                    ...usuario.data(),
                } as IUsuario
            } else {
                const usuarios : IUsuario[] = snapshot.docs.map(user => {
                    return {
                        id: user.id,
                        ...user.data()
                    } as IUsuario
                })
    
                return usuarios
            }
        } catch (error) {
            throw new Error('Ocurrió un error en la consulta where');
        }
    },

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