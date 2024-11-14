import BarraNewUser from "../components/BarraNewUser";
import Calendar from "../components/Calendar";
import Icon from '@mdi/react';
import { mdiStethoscope } from '@mdi/js';
import { mdiClockTimeEightOutline } from '@mdi/js';
import { mdiVideoOutline } from '@mdi/js';
import { mdiHandCoinOutline } from '@mdi/js';

export default function PatientBookingStep1(){

  return (
    <>
    <BarraNewUser />
    <div className="min-h-screen max-h-70 bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-400 rounded-lg shadow-lg p-3 grid grid-cols-2 gap-1">

        <div className="p-3 space-y-3">
          <div className="flex items-center space-x-4">
            <button className="text-gray-500">

              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <Icon path={mdiStethoscope} size={1} />
            <span>Dr. Steven John</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon path={mdiClockTimeEightOutline} size={1} />
            <span>30 mins</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon path={mdiVideoOutline} size={1} />
            <span>Video call details provided upon successful confirmation</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon path={mdiHandCoinOutline} size={1} />
            <span>Fees: zt150</span>
          </div>
        </div>


        <div className="p-4">
          <h2 className="text-lg font-semibold">Select Date and Time</h2>
          <div className="flex justify-between items-center mt-4">
            <Calendar />
          </div>  
          <div className="mt-4 space-y-2">
            <div className="space-x-3 grid grid-cols-5 gap-1">
              <button className="border rounded-lg px-4 py-2">10:30am</button>
              <button className="border rounded-lg px-4 py-2">11:30am</button>
              <button className="border rounded-lg px-4 py-2 bg-blue-100 border-blue-500">02:30pm</button>
              <button className="border rounded-lg px-4 py-2">03:00pm</button>
              <button className="border rounded-lg px-4 py-2">03:30pm</button>
              <button className="border rounded-lg px-4 py-2">04:30pm</button>
              <button className="border rounded-lg px-4 py-2">05:00pm</button>
              <button className="border rounded-lg px-4 py-2">05:30pm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}