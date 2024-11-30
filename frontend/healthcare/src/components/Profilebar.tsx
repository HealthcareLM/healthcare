import { Link, useLocation } from "react-router-dom"
export default function Profilebar(){

   const location = useLocation().pathname;

   return( 
      <div className="flex flex-col text-sm md:border-r-2 md:w-60 items-center px-3 my-3">
         <nav className="md:w-full">
            <ul className='flex md:flex-col justify-between gap-3'>
               <li>
               <Link className='flex hover:bg-gray-100 items-center text-slate-500 p-3 rounded-md hover:bg-slate-100 hover:text-primary' to="/profile">General</Link>
               </li>
               <li>
               <Link className='flex hover:bg-gray-100 items-center text-slate-500 p-3 rounded-md hover:bg-slate-100 hover:text-primary' to="/profile/history">Consultation History</Link>
               </li>
               <li>
               <Link className='flex  hover:bg-gray-100 items-center text-slate-500 p-3 rounded-md hover:bg-slate-100  hover:text-primary' to="/profile/documents">Patient Documents</Link>
               </li>
            </ul>
         </nav>
      </div>
   )
}