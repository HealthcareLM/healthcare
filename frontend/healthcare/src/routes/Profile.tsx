import { Link } from "react-router-dom"
import Header from "../layouts/Header"
import Icon from "@mdi/react"
import { mdiRenameOutline} from "@mdi/js"
import Profilebar from "../components/Profilebar"
export default function Profile() {
  return (
    <Header>
      <div className="flex flex-col pb-7 sm:flex-row border rounded-lg w-full">
         <Profilebar/>
         <div className=" p-3 w-full space-y-8">
            <h1 className="w-full text-2xl font-bold">My profile</h1>
            <div className="w-full rounded-lg border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
               <div className="m-5 sm:w-1/4 md:w-1/12">
                  <img src="../../public/users/profile.png" alt="" className="w-full block" />
               </div>
               <div className="sm:w-2/4 md:w-3/6 lg:w-4/6">
                  <p className="text-lg font-semibold">Stevan Dux</p>
                  <p className="text-slate-400">Garstro Doctor</p>
                  <p className="text-slate-400">Unites states</p>
               </div>
               <div className=" pr-4 sm:w-1/4 md:w-2/6 lg:w-1/6 flex justify-end" >
                     <Link className='flex items-center w-24 px-6 py-2 border-black text-black font-semibold p-3 border  rounded-lg hover:border-primary hover:text-primary' to="/">Edit  <Icon path={mdiRenameOutline} size={'20px'}  /></Link>
               </div>
            </div>
            <div className="w-full p-4 rounded-lg border flex flex-col gap-4">
               <div className="justify-between flex items-center">
                  <h1 className="text-xl font-bold">Personal Information</h1>
                  <Link className='flex items-center w-24 px-6 py-2 border-black text-black font-semibold p-3 border  rounded-lg hover:border-primary hover:text-primary' to="/">Edit  <Icon path={mdiRenameOutline} size={'20px'}  /></Link>
               </div>
                  <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
                     <div className="sm:w-1/3 md:w-3/6 lg:w-4/6">
                        <p className="text-slate-400">Name</p>
                        <p>Stavn dux</p>
                        <p className="text-slate-400 pt-3">Phone Number</p>
                        <p>+ 1982378473</p>
                     </div>
                     <div className="sm:w-1/3 md:w-3/6 lg:w-4/6">
                        <p className="text-slate-400">Date of Birth</p>
                        <p>03/04/1996</p>
                        <p className="text-slate-400 pt-3">Email Address</p>
                        <p>email@ugto.mx</p>
                     </div>
                     <div className="sm:w-1/3 md:w-3/6 lg:w-4/6" >
                        <p className="text-slate-400" >Age</p>
                        <p>56</p>
                        <p className="text-slate-400 pt-3" >Bio</p>
                        <p>Gartro Doctor</p>
                     </div>
                  </div>
            </div>
            <div className="w-full p-4 rounded-lg border flex flex-col gap-4">
               <h1 className="w-full text-xl font-bold">Pre-existing Diseases</h1>
               <div className="w-full flex flex-col sm:flex-row sm:justify-between">
                  <div className="sm:w:1/2 md:w-1/2 lg:w-1/2 ">
                     <p className="text-slate-400 border-r-4">Speech</p>
                     <p className="border-r-4">None</p>
                     <p className="text-slate-400 pt-3">Speech</p>
                     <p>None</p>
                  </div>
                  <div className="sm:w:1/2 md:w-1/2 lg:w-1/2 pl-4">
                     <p className="text-slate-400 ">Speech</p>
                     <p>None</p>
                  </div>
               </div>
            </div>
            <div className="w-full p-4 rounded-lg border flex flex-col gap-4">
               <h1 className="w-full text-xl font-bold ">General</h1>
               <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="sm:w:1/2 md:w-1/2 lg:w-1/2 border-r-4 flex flex-col sm:flex-row items-center justify-between pr-4">
                     <p className="text-lg font-semibold">Change Password</p>
                     <Link className='flex items-center  border-black text-black font-semibold px-3 py-2 border rounded-lg hover:border-primary hover:text-primary' to="/">Change</Link>                     
                  </div>
                  <div className="sm:w:1/2 md:w-1/2 lg:w-1/2 pl-4 flex flex-col sm:flex-row items-center justify-between">
                     <p className="text-lg font-semibold">Notifications</p>
                     <label className="inline-flex items-center cursor-pointer space-x-5">
                        <input type="checkbox" value="" className="sr-only peer"/>
                        <span className=" text-base dark:text-slate-400">Enable Notifications</span>
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:bg-primary rounded-full peer dark:bg-slate-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                     </label>
                  </div>
               </div>
            </div>
         </div>
      </div>


    </Header>
  )
}
