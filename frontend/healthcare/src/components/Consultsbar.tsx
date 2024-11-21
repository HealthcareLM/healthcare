import { mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

export default function(){
   return(
      <div className="flex">
         <div className=" w-full flex flex-col sm:flex-row gap-3 justify-between">
            <nav className="flex w-11/12">
               <ul className='flex flex-col sm:flex-row items-center gap-3 p-2 bg-gray-100 rounded-md '>
                  <li className="w-24">
                     <Link className='flex  items-center py-2 px-3 text-gray-600 rounded-md hover:bg-white hover:text-black' to="/">Yesterday</Link>
                  </li>
                  <li className="w-24">
                     <Link className='flex justify-center items-center py-2 px-3  text-gray-600 rounded-md hover:bg-white hover:text-black' to="/">Today</Link>
                  </li>
                  <li className="w-24">
                     <Link className='flex justify-center items-center py-2 px-3 text-gray-600 rounded-md hover:bg-white hover:text-black' to="/">Past</Link>
                  </li>
               </ul>
            </nav>
         </div>
         <div className="flex justify-end px-4 w-full space-x-4 ">
            <input type="time" className=" rounded-lg bg-gray-100 px-3 border border-black"/>
            <Link className='flex text-white items-center justify-items-center p-3 rounded-md bg-primary' to="/">
               <Icon path={mdiPlus} size={'18px'} className='mr-2 border rounded-sm'/>New Appointment</Link>
         </div>
      </div>
   )
}