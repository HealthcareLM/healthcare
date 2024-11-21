import { mdiClockOutline, mdiAccountCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

export default function CardPatientRecords(){
   
   return(
      <div className="group flex flex-col sm:flex-row border rounded-lg p-3 hover:bg-gray-100 ">
         <div className="pr-5 w-1/12">
            <div className=" justify-items-center border rounded-lg px-5 py-2 bg-gray-100">
               <p className="text-xs font-extrabold ">Thu</p>
               <p className="text-xl font-extrabold ">15</p>
            </div>
         </div>
         <div className="px-5 border-l-2 group-hover:border-l-cyan-100 w-1/3 space-y-2">
            <div className="flex space-x-2 items-center">
               <Icon path={mdiClockOutline} size={'20px'} className=""/>          
               <p className="block ">09:00am - 09:30am</p>
            </div>
            <div className="flex space-x-2 items-center ">
               <Icon path={mdiAccountCircleOutline} size={'20px'}></Icon>
               <p>Stephine Claire</p>
            </div>
         </div>
         <div className="flex justify-between w-full">
            <div className="space-y-2">
               <p>Issue: Fever</p>
               <button>View Documents</button>
            </div>
            <div className=" flex justify-end py-2" >
               <Link className='group-hover:bg-white flex items-center px-10 text-black font-semibold bg-gray-100 rounded-lg ' to="/">Edit</Link>
            </div>
         </div>
      </div>
   )
}