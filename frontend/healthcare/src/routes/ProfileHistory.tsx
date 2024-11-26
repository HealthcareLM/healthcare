import Profilebar from "../components/Profilebar"
import Header from "../layouts/Header"
import { mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import CardConsultationHistory from "../components/CardConsultationHistory";

export default function ProfileHistory() {

   //const [date, setDate] = useState<Date | null>(new Date());
   return(
      <Header>
         <div className="w-full flex flex-col pb-7 md:flex-row border rounded-lg ">
            <Profilebar/>
            <div className="lg:w-full m-4 flex-col sm:flex-row border rounded-lg space-y-5">
               <div className="p-4 flex flex-col sm:flex-row  justify-between items-center">
                  <h1 className="text-2xl font-bold">History</h1> 
                  <Link className='flex text-white items-center p-3 rounded-md bg-primary' to="/">
                     <Icon path={mdiPlus} size={'18px'} className='mr-2 border rounded-sm'/>New Appointment</Link>
               </div>
               <div className="m-4 space-y-2">
                  <h1 className="text-xl font-bold">Yesterday</h1>
                  <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
                        <CardConsultationHistory/>
                        <CardConsultationHistory/>           
                        <CardConsultationHistory/>           
                                            
                                                
                  </div>
               </div>
               <div className=" m-4 space-y-3 ">
                  <h1 className="text-xl font-bold ">Today</h1>
                  <CardConsultationHistory/>           
                  <CardConsultationHistory/>           
                  <CardConsultationHistory/>            

               </div>
               <div className="m-4 pb-4">
                  <h1 className="text-xl font-bold pb-2">25/07/23</h1>
                  <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
                     <CardConsultationHistory/>
                     <CardConsultationHistory/>
                  </div>
               </div>
            </div>
         </div>
      </Header>

   )
}