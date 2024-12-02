import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Profilebar from "../components/Profilebar";
import { useAuth } from "../hooks/useAuth";
import { API_URL } from "../data/Constants";
import { Link, useNavigate } from "react-router-dom";

const initialDoctor = {
   email: '',
   telefono: '',
   birthdate: '',
   rol: 'doctor',
   nombre: '',
   imagen: 'user.jpg',
   especialidad: '',
   costo: '',
   horario: ''
}
const initialPaciente = {
   email: '',
   telefono: '',
   birthdate: '',
   rol: 'paciente',
   nombre: '',
   imagen: 'user.jpg'
}

export function EditarUsuario(){

   const navigate = useNavigate()
   const { user, saveUser } = useAuth()

   const [horario, setHorario] = useState({
      entrada: '',
      salida: ''
   })
   const [paciente, setPaciente] = useState(initialPaciente)
   const [doctor, setDoctor] = useState(initialDoctor)
   const [file, setFile] = useState<File | null>(null)

   useEffect(() => {
      // Definir la función asíncrona
      const fetchUser = async () => {
        try {
          const response = await fetch(`${API_URL}/usuarios/usuario/${user.id}`);
          const data = await response.json();          
          if(user.rol === 'doctor') {
            setDoctor(data.usuario); // Actualizar el estado con los datos
            const horario = data.usuario.horario.split(' - ')
            
            setHorario({
               entrada: horario[0],
               salida: horario[1]
            })
          } else if (user.rol === 'paciente') {
            setPaciente(data.usuario)
          }
        } catch (error) {
          console.error('Error fetching doctors:', error);
        }
      };
  
      // Llamar a la función asíncrona
      fetchUser();
    }, []);
   
   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      if(e.target.files){
         setFile(e.target.files[0]);
      }
    }

   function handleChange(e: ChangeEvent<HTMLInputElement>) {
      setPaciente({
         ...paciente,
         [e.target.name]: e.target.value
      })
   }

   function handleChangeDoctor(e: ChangeEvent<HTMLInputElement>) {
      setDoctor({
         ...doctor,
         [e.target.name]: e.target.value
      })
   }

   async function UpdatePaciente(filename?: string) {
      try {
         
         const pacienteUpdate = paciente

         if(filename) {
            pacienteUpdate.imagen = filename
         } else {
            pacienteUpdate.imagen = user.imagen
         }

         const responseUpdate = await fetch(`${API_URL}/usuarios/usuarioUpdate/${user.id}`, {
            method: 'PUT',
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(pacienteUpdate)
         })

         if (responseUpdate.ok) {
            const data = await responseUpdate.json()
            
            saveUser(data.user)
            
            alert("El usuario se ha actualizado de manera correcta")
            navigate('/profile')
         }
      } catch (error) {
         alert("No se pudo actualizar el usuario")
      }
   }

   async function UpdateDoctor(filename?: string) {
      try {
         
         const doctorUpdate = doctor

         if(filename) {
            doctorUpdate.imagen = filename
         } else {
            doctorUpdate.imagen = user.imagen
         }

         doctorUpdate.horario = `${horario.entrada} - ${horario.salida}`

         const responseUpdate = await fetch(`${API_URL}/usuarios/usuarioUpdate/${user.id}`, {
            method: 'PUT',
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(doctorUpdate)
         })

         if (responseUpdate.ok) {
            const data = await responseUpdate.json()
            
            saveUser(data.user)
            
            alert("El usuario se ha actualizado de manera correcta")
            navigate('/profile')
         }
      } catch (error) {
         alert("No se pudo actualizar el usuario")
      }
   }

   async function handleSubmitPaciente(e: FormEvent<HTMLFormElement>) {
      e.preventDefault()

      if (file) {
         const formData = new FormData();
         formData.append("file", file);

         try {
            const response = await fetch(`${API_URL}/usuarios/upload`, {
               method: "POST",
               body: formData,
            });
         
            if (response.ok) {
               const data = await response.json()
               
               await UpdatePaciente(data.namefile)
            } else {
               alert("Hubo un error al subir el archivo.")
            }
         } catch (error) {
            console.error("Error al subir el archivo:", error);
         }
      } else {
         await UpdatePaciente()
      }
   }

   async function handleSubmitDoctor(e: FormEvent<HTMLFormElement>){
      e.preventDefault()

      if (file) {
         const formData = new FormData();
         formData.append("file", file);

         try {
            const response = await fetch(`${API_URL}/usuarios/upload`, {
               method: "POST",
               body: formData,
            });
         
            if (response.ok) {
               const data = await response.json()
               
               await UpdateDoctor(data.namefile)
            } else {
               alert("Hubo un error al subir el archivo.")
            }
         } catch (error) {
            console.error("Error al subir el archivo:", error);
         }
      } else {
         await UpdateDoctor()
      }
   }

   return(
      <div className="flex flex-col md:flex-row pb-7 border rounded-lg w-full">
         <Profilebar/>
         <div className="p-3 mx-auto max-w-4xl md:px-10">
            {user.rol == 'doctor' ? (
               <form encType=" multipart/form-data " onSubmit={handleSubmitDoctor}>
                  <div className="space-y-4">
                     <h3 className=" font-semibold text-lg">General Information</h3>
                     <div className="">
                        <label className=" text-gray-500 block" htmlFor="nombre">Name</label>
                        <input className="flex w-full p-2 border rounded-md" type="text" name="nombre" value={doctor.nombre} placeholder="Alex" onChange={handleChangeDoctor}/>
                     </div>
                     <div>
                        <label className=" text-gray-500 block" htmlFor="especialidad">Especiality</label>
                        <input className="flex w-full p-2 border rounded-md" type="text" name="especialidad" placeholder="General" value={doctor.especialidad} onChange={handleChangeDoctor}/>
                     </div>
                     <div className=" md:flex md:space-x-3">
                        <div className="md:w-1/2">
                           <label className=" text-gray-500 block" htmlFor="pais">Entrada</label>
                           <input className="flex w-full p-2 border rounded-md" type="time" name="entrada" value={horario.entrada} onChange={e => setHorario({...horario, entrada: e.target.value})}/>
                        </div>
                        <div className="md:w-1/2">
                           <label className=" text-gray-500 block" htmlFor="pais">Salida</label>
                           <input className="flex w-full p-2 border rounded-md" type="time" name="salida" value={horario.salida} onChange={e => setHorario({...horario, salida: e.target.value})}/>
                        </div>
                     </div>
                     <div className="md:flex md:space-x-3">
                        <div>
                           <label className=" text-gray-500 block" htmlFor="telefono">Phone Number</label>
                           <input className="flex w-full p-2 border rounded-md" type="text" name="telefono" placeholder="1928345431" value={doctor.telefono} onChange={handleChangeDoctor}/>
                        </div>
                        <div>
                           <label className=" text-gray-500 block" htmlFor="cumpleanos">Date of Birth</label>
                           <input className="flex w-full p-2 border rounded-md" type="date" name="birthdate" placeholder="31-10-24" value={doctor.birthdate} onChange={handleChangeDoctor}/>
                        </div>
                     </div>
                     <div>
                        <label className=" text-gray-500 block" htmlFor="email">Email</label>
                        <input className="flex w-full p-2 border rounded-md" type="text" name="email" placeholder="Alex@domain.com" value={doctor.email} onChange={handleChangeDoctor}/>
                     </div>
                     <div>
                        <label className=" text-gray-500 block" htmlFor="imagen">Picture</label>
                        <input className=" text-gray-500" type="file" placeholder="File" onChange={handleFileChange}/>
                        {user.imagen ? (
                           <div>
                              <img src={`/users/${user.imagen}`} alt="" className="w-32 py-2"/>
                           </div>
                        ) : ''}
                     </div>
                     <div className="sm:flex gap-4 justify-center md:justify-end">
                        <input type="submit" value="Cancel" className="  border rounded-lg p-3 bg-white border-gray-500 md:w-44"/>
                        <input className="border rounded-lg p-3 bg-primary text-white md:w-44" type="submit" value="Save Changes" />
                     </div>
                  </div>
               </form>
            ) : user.rol == 'paciente' ? (
               <form encType=" multipart/form-data " onSubmit={handleSubmitPaciente}>
                  <div className="space-y-4">
                     <h3 className=" font-semibold text-lg">General Information</h3>
                     <div className="">
                        <label className=" text-gray-500 block" htmlFor="nombre">Name (With Last Names)</label>
                        <input className="flex w-full p-2 border rounded-md" type="text" name="nombre"  placeholder="Alex" value={paciente.nombre ? paciente.nombre : user.nombre} onChange={handleChange}/>
                     </div>
                     <div className="md:flex md:space-x-3">
                        <div className="md:w-1/2">
                           <label className=" text-gray-500 block" htmlFor="telefono">Phone Number</label>
                           <input className="flex w-full p-2 border rounded-md" type="text" name="telefono" placeholder="1928345431" value={paciente.telefono} onChange={handleChange}/>
                        </div>
                        <div className="md:w-1/2">
                           <label className=" text-gray-500 block" htmlFor="cumpleanos">Date of Birth</label>
                           <input className="flex w-full p-2 border rounded-md" type="date" name="birthdate" placeholder="31-10-24" value={paciente.birthdate} onChange={handleChange}/>
                        </div>
                     </div>
                     <div>
                        <label className=" text-gray-500 block" htmlFor="email">Email</label>
                        <input className="flex w-full p-2 border rounded-md" type="text" name="email" placeholder="Alex@domain.com" value={paciente.email ? paciente.email : user.email} onChange={handleChange}/>
                     </div>
                     <div>
                        <label className=" text-gray-500 block" htmlFor="imagen">Picture</label>
                        <input className=" text-gray-500" type="file" placeholder="File" onChange={handleFileChange}/>
                     </div>
                     <div className="sm:flex gap-4 justify-center md:justify-end">
                        <Link type="submit" to={'/profile'} className="text-center  border rounded-lg p-3 bg-white border-gray-500 md:w-44">Cancel</Link>
                        <input className="border rounded-lg p-3 bg-primary text-white md:w-44 cursor-pointer" type="submit" value="Save Changes" />
                     </div>
                  </div>
               </form>
            ) : ''}
         </div>
      </div>
   )
}