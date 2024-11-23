import Consultsbar from "../components/Consultsbar";
import Header from "../layouts/Header";
import CardMenuConsults from "../components/CardMenuConsults";

export default function MenuConsults(){

   return(
      <Header>
         <div>
            <Consultsbar/>
            <div className=" pt-3 space-y-4">
               <CardMenuConsults/>
               <CardMenuConsults/>
               <CardMenuConsults/>
               <CardMenuConsults/>
               <CardMenuConsults/>
               <CardMenuConsults/>
               <CardMenuConsults/>
            </div>
         </div>
      </Header>

   )
}