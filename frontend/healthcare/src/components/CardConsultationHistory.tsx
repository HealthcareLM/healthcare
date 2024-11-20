import { mdiFileDocumentOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

export default function CardConsultationHistory(){
   return(
      <div className=" p-4 sm:w-1/2 lg:w-full border rounded-lg sm:flex-row">
         <div className="flex flex-col pb-3 sm:flex-row items-center space-x-3">
            <img className="w-20 h-15" src="/users/history.png" alt="" />
            <h3 className="text-sm">Jane Cooper</h3>
            <Link className='flex flex-col sm:flex-row text-primary items-center p-3 ' to="/">
               <Icon path={mdiFileDocumentOutline} size={'30px'} className='mr-2'/></Link>                     
         </div>
         <div className="border p-3 text-primary rounded-lg bg-gray-200">
            <time >asdas</time>
         </div>
      </div>
   )
}