import Checkbox from "@material-tailwind/react/components/Checkbox"
import Radio from "@material-tailwind/react/components/Radio"
import Header from "../layouts/Header"
export default function OnlineConsult(){
   return(
      <Header>
         <div className="border rounded-lg p-4">
            <h1 className="font-bold text-xl w-full">Consultation Info</h1>
            <form action="">
               <div className="flex flex-wrap gap-4">
                  <div className=" flex-1 md:w-1/4">
                     <p className="text-sm">Availability</p>
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
                  <div className="flex-1 md:w-1/4">
                     <p className="text-sm">Type of Availability</p>
                     <div className="flex w-full flex-col md:flex-row">
                        <Checkbox label="Text" color="cyan" crossOrigin={undefined} />
                        <Checkbox label="Video" color="cyan" size={2} crossOrigin={undefined}/>
                        <Checkbox label="Call" color="cyan" crossOrigin={undefined}/>
                     </div>
                  </div>
                  <div className="flex-1 md:w-1/4">
                     <p className="text-sm" >Duration</p>
                     <select name="duration" defaultValue={30} id="" className="border rounded-lg p-3 flex w-full text-sm">
                        <option typeof="number" value={30}> 30 mins</option>
                        <option typeof="number" value={60}> 60 mins</option>
                        <option typeof="number" value={90}> 90 mins</option>
                        <option typeof="number" value={120}> 120 mins</option>
                     </select>
                  </div>
                  <div className="flex-1 md:w-1/4">
                     <p className="text-sm">Fees</p>            
                     <input type="number" min={1} className="border rounded-lg  flex w-full p-3 text-sm "/>     
                  </div>
               </div>
               <div className=" mt-2 flex space-x-3 pt-4 border-t justify-end">
                  <input type="submit" value="Cancel" className="border rounded-lg p-3 bg-white border-black w-44"/>
                  <input type="submit" value="Save" className="border rounded-lg p-3 bg-primary text-white w-44"/>
               </div>
            </form>
         </div>

      </Header>

   )
}