import db from "../config/database";
import { IUsuario, IPaciente, IDoctor } from "../interfaces/Usuarios";
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
    },

    async validateUser( data: any):  Promise<IDoctor | IPaciente>  {
      if (!data.email || !data.telefono || !data.password || !data.birthdate || !data.rol || !data.nombre) {
        throw new Error("Falta campos, se requiere: email', 'telefono', 'password', 'birthdate', 'rol' y 'nombre'")
      }
  
      if (data.rol === "doctor") {
        if (!data.especialidad || !data.costo) {
          throw new Error("Doctor requiere campos 'doctor' y 'costo'")
        }
        return {
          email: data.email,
          telefono: data.telefono,
          password: data.password,
          birthdate: data.birthdate,
          rol: "doctor",
          nombre: data.nombre,
          especialidad: data.especialidad,
          costo: data.costo
        }  as IDoctor
      }
  
  
      if (data.rol === "paciente") {
        return {
          email: data.email,
          telefono: data.telefono,
          password: data.password,
          birthdate: data.birthdate,
          rol: "paciente",
          nombre: data.nombre
        } as IPaciente
      }
  
      throw new Error("El rol debe ser 'paciente' o 'doctor' ")
    },

    async insertMany(users: IUsuario | IUsuario[] ) {
      try {
        const usuariosArray = Array.isArray(users) ? users : [users]

        const res = await Promise.all(usuariosArray.map( async(user) => await this.create(user)) )
        return res

      } catch (error) {
        throw new Error("Error al crear usuario(s)")
      }
    },


    async getUserId( id: string) {
      try {
        const existsUser = await db.collection(collectionName).doc(id).get()

          if (!existsUser.exists) {
            // console.error(`Usuario con ID ${id} no encontrado en Firestore.`);
            throw new Error("Usuario no encontrado")
          }

          return {
            id: existsUser.id,
            ...existsUser.data(),
          } 
          
      } catch (error) {
        throw new Error("'Error al obtener usuario por ID")
      }
    },


    async deleteUserId( id : string) {
      try {
          await db.collection(collectionName).doc(id).delete()
          return id
      } catch (error) {
        throw new Error("'Error al borrar usuario por ID")
      }
    },


    async updateUserId(id: string, usuario: IUsuario) {
      try {
        await db.collection(collectionName).doc(id).set(usuario, { merge: true})
        return id
      } catch (error) {
        throw new Error("'Error al borrar actualizar por ID")
      }
    }
}