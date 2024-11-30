import { Link, useLocation } from "react-router-dom"
import { SidebarLinks } from "../data/SidebarData";
export default function Profilebar(){

   const location = useLocation().pathname;
   
   return( 
         <div className="flex flex-col text-sm md:border-r-2 md:w-60 items-center px-3 my-3">
            <nav className="md:w-full">
               <ul className='flex md:flex-col justify-between gap-3'>
                  {SidebarLinks.profile.redirects.map((redirect) => (
                    <li key={redirect.title}>
                      <Link className={`flex hover:bg-gray-100  hover:text-primary items-center text-slate-500 p-3 rounded-md ${location === redirect.ruta ? 'bg-gray-100 text-primary' : ''}`} to={redirect.ruta}>{redirect.title}</Link>
                    </li>
                  ))}
               </ul>
            </nav>
         </div>
   )
}