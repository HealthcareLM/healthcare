import { Link } from "react-router-dom"
export default function Profilebar(){
   return( 
         <div className="flex flex-col text-sm border-r-2 w-60 items-center px-3 my-3">
            <nav className="w-full">
               <ul className='flex  flex-col gap-3'>
                  <li>
                  <Link className='flex hover:bg-gray-100 items-center text-slate-500 p-3 rounded-md hover:bg-slate-100 hover:text-primary' to="/profile">General</Link>
                  </li>
                  <li>
                  <Link className='flex hover:bg-gray-100 items-center text-slate-500 p-3 rounded-md hover:bg-slate-100 hover:text-primary' to="/profilehistory">Consultation History</Link>
                  </li>
                  <li>
                  <Link className='flex  hover:bg-gray-100 items-center text-slate-500 p-3 rounded-md hover:bg-slate-100  hover:text-primary' to="/">Patient Documents</Link>
                  </li>
               </ul>
            </nav>
         </div>
   )
}