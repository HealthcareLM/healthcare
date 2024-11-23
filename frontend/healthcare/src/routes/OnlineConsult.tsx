import Checkbox from "@material-tailwind/react/components/Checkbox"
import Radio from "@material-tailwind/react/components/Radio"
import Header from "../layouts/Header"
export default function OnlineConsult(){
   return(
      <Header>
         <div className="border rounded-lg p-4">
            <h1 className="font-bold text-xl w-full">Consultation Info</h1>
            <form action="">
               <div className="flex flex-col xl:flex-row xl:space-x-14 ">
                  <div className="flex xl:w-1/2 flex-col sm:flex-row justify-between">
                     <div className="">
                        <p className="text-sm ">Availability</p>
                        <div className="">
                           <Radio 
                              value="a"
                              name="radio-inputs" 
                              label="Disable"
                              color="cyan"
                              crossOrigin={undefined}                     
                              />
                              <Radio
                              value="b"
                              name="radio-inputs" 
                              label="Enable"
                              color="cyan"
                              crossOrigin={undefined}                     
                              />
                        </div>
                     </div>
                     <div className="">
                        <p className="text-sm">Type of Availability</p>
                        <div className="flex w-full flex-row">
                           <Checkbox label="Text" color="cyan" crossOrigin={undefined} />
                           <Checkbox label="Video" color="cyan" size={2} crossOrigin={undefined}/>
                           <Checkbox label="Call" color="cyan" crossOrigin={undefined}/>
                        </div>
                     </div>
                  </div>
                  <div className="flex xl:w-1/2 flex-col sm:flex-row gap-4 justify-between">
                     <div className="">
                        <p className="text-sm" >Duration</p>
                        <select name="duration" defaultValue={30} id="" className="border rounded-lg p-3 flex w-full sm:w-52 xl:w-60 text-sm">
                           <option typeof="number" value={30}> 30 mins</option>
                           <option typeof="number" value={60}> 60 mins</option>
                           <option typeof="number" value={90}> 90 mins</option>
                           <option typeof="number" value={120}> 120 mins</option>
                        </select>
                     </div>
                     <div className="">
                        <p className="text-sm">Fees</p>            
                        <input type="number" min={1} className="border rounded-lg  flex w-full xl:w-60 p-3 text-sm "/>     
                     </div>
                  </div>
               </div>
               <div className=" mt-2 flex space-x-3 pt-4 border-t justify-end">
                  <input type="submit" value="Cancel" className="  border rounded-lg p-3 bg-white border-black w-44"/>
                  <input type="submit" value="Save" className="border rounded-lg p-3 bg-primary text-white w-44"/>
               </div>
            </form>
         </div>

      </Header>

   )
}