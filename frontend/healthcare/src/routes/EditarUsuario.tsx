import Profilebar from "../components/Profilebar";
import Header from "../layouts/Header";

export function EditarUsuario(){

   return(
      <Header>
         <div className="flex flex-col md:flex-row pb-7 border rounded-lg w-full">
            <Profilebar/>
            <div className="p-3 mx-auto max-w-4xl md:px-10">
               <form action="">
                  <div className="space-y-4">
                     <h3 className=" font-semibold text-lg">General Information</h3>
                     <div className=" pt-7 md:flex md:space-x-3">
                        <div className="md:w-1/2">
                           <label className=" text-gray-500 block" htmlFor="nombre">Name</label>
                           <input className="flex w-full p-2 border rounded-md" type="text" name="nombre" placeholder="Alex" />
                        </div>
                        <div className="md:w-1/2">
                           <label className=" text-gray-500 block" htmlFor="apaterno">Last Name</label>
                           <input className="flex w-full p-2 border rounded-md" type="text" name="apaterno" placeholder="Smith"/>
                        </div>
                     </div>
                     <div className=" md:flex md:space-x-3">
                        <div className="md:w-1/2">
                           <label className=" text-gray-500 block" htmlFor="especialidad">Especiality</label>
                           <input className="flex w-full p-2 border rounded-md" type="text" name="especialidad" placeholder="General" />
                        </div>
                        <div className="md:w-1/2">
                           <label className=" text-gray-500 block" htmlFor="pais">Country</label>
                           <input className="flex w-full p-2 border rounded-md" type="text" name="pais" placeholder="Mexico" />
                        </div>
                     </div>
                     <div className="md:flex md:space-x-3">
                        <div>
                           <label className=" text-gray-500 block" htmlFor="telefono">Phone Number</label>
                           <input className="flex w-full p-2 border rounded-md" type="text" name="telefono" placeholder="1928345431" />
                        </div>
                        <div>
                           <label className=" text-gray-500 block" htmlFor="cumpleanos">Date of Birth</label>
                           <input className="flex w-full p-2 border rounded-md" type="text" name="cumpleanos" placeholder="31-10-24" />
                        </div>
                        <div>
                           <label className=" text-gray-500 block" htmlFor="email">Email</label>
                           <input className="flex w-full p-2 border rounded-md" type="text" name="email" placeholder="Alex@domain.com"/>
                        </div>
                        <div>
                           <label className=" text-gray-500 block" htmlFor="edad">Age</label>
                           <input className="flex w-full p-2 border rounded-md" type="number" name="edad" placeholder="21" />
                        </div>
                     </div>
                     <div>
                        <label className=" text-gray-500 block" htmlFor="imagen">Picture</label>
                        <input className=" text-gray-500" type="file" placeholder="File" />
                        
                     </div>
                     <div className="sm:flex gap-4 justify-center md:justify-end">
                        <input type="submit" value="Cancel" className="  border rounded-lg p-3 bg-white border-gray-500 md:w-44"/>
                        <input className="border rounded-lg p-3 bg-primary text-white md:w-44" type="submit" value="Save Changes" />
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </Header>
   )
}