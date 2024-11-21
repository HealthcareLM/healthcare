import Header from "../layouts/Header";
import PatientRecordsbar from "../components/PatientRecordsbar";
import CardPatientRecords from "../components/CardPatientRecords";
export default function PatientRecords(){

   return(

      

      <Header>
         <div>
            <PatientRecordsbar/>
            <div className=" pt-3 space-y-4">
               <CardPatientRecords/>
               <CardPatientRecords/>
               <CardPatientRecords/>
               <CardPatientRecords/>
               <CardPatientRecords/>
               <CardPatientRecords/>
               <CardPatientRecords/>
               <CardPatientRecords/>
            </div>
         </div>
      </Header>
   )
}