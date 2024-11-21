import BarraNewUser from "../components/BarraNewUser";
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { mdiStethoscope } from '@mdi/js';
import { mdiClockTimeThreeOutline } from '@mdi/js';
import { mdiVideoOutline } from '@mdi/js';
import { mdiHandCoinOutline } from '@mdi/js';
import CalendarPatient from "../components/CalendarPatient";


export default function PatientStep1(){

  return (
    <>
    <BarraNewUser />
    <div className="bg-bgPatient h-screen">
      <div className="h-screen grid grid-cols-5 grid-rows-6 gap-2">
        <div className="bg-white col-span-3 row-span-5 col-start-2 row-start-1 grid grid-cols-3 grid-rows-4 gap-2 mt-10">
          <div className="row-span-3 m-5 border-r border-gray-200">
            <div className="m-5 rounded-ful">
              <button className="">
                <Icon path={mdiArrowLeft} size={1} />
              </button>
            </div>
            <div className="m-4 flex">
              <Icon className="text-gray_5 m-2" path={mdiStethoscope} size={1} /> <p className="text-gray_5 m-2">Dr.Stiven Jhonson</p>
            </div>
            <div className="m-4 flex">
              <Icon className="text-gray_5 m-2" path={mdiClockTimeThreeOutline} size={1} />
              <p className="text-gray_5 m-2">30 mins</p>
            </div>
            <div className="m-4 flex">
              <Icon className="text-gray_5 m-2" path={mdiVideoOutline} size={2} />
              <p className="text-gray_5 m-2">
                Video call details provided upon
                succesful confirmation
              </p>
            </div>
            <div className="m-4 flex">
              <Icon className="text-gray_5 m-2" path={mdiHandCoinOutline} size={1} />
              <p className="text-gray_5 m-2">fees: zt150</p>
            </div>
          </div>
          <div className="col-span-2 row-span-3">
            <h3 className="m-10 font-bold"> Select Date and Time</h3>
            <CalendarPatient />
            <p className="m-4 text-[16px]">Thursday, 8th November</p>
            <div className="grid grid-cols-5 gap-4">
              <div className="h-full border border-gray-500 rounded hover:bg-blue-gray-100">
                <p className="p-2 text-center">10:30am</p>
              </div>
              <div className="h-full border border-gray-500 rounded hover:bg-blue-gray-100">
                <p className="p-2 text-center">11:30am</p>
              </div>
              <div className="h-full border border-gray-500 rounded hover:bg-blue-gray-100">
                <p className="p-2 text-center">02:30pm</p>
              </div>
              <div className="h-full border border-gray-500 rounded hover:bg-blue-gray-100">
                <p className="p-2 text-center">03:00pm</p>
              </div>
              <div className="h-full border border-gray-500 rounded hover:bg-blue-gray-100">
                <p className="p-2 text-center">03:30pm</p>
              </div>
              <div className="h-full border border-gray-500 rounded hover:bg-blue-gray-100">
                <p className="p-2 text-center">04:30pm</p>
              </div>
              <div className="h-full border border-gray-500 rounded hover:bg-blue-gray-100">
                <p className="p-2 text-center">05:00pm</p>
              </div>
              <div className="h-full border border-gray-500 rounded hover:bg-blue-gray-100">
                <p className="p-2 text-center">05:30pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-4 row-start-6 justify-items-center">
        <a href="/PatientStep2" className="text-base font-medium text-white px-[75px] py-[14px] bg-primary rounded-md hover:bg-cyan-800 grid">Next</a>
        </div>
        
      </div>
    </div>


    </>
  )
}