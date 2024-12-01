import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { mdiStethoscope } from '@mdi/js';
import { mdiClockTimeThreeOutline } from '@mdi/js';
import { mdiVideoOutline } from '@mdi/js';
import { mdiHandCoinOutline } from '@mdi/js';
import { Dispatch } from "react";


export default function PatientStep2({setStep} : {setStep: Dispatch<React.SetStateAction<number>>}){

  return (
    <>
    <div className="bg-bgPatient h-screen">
      <div className="h-screen grid grid-cols-5 grid-rows-6 gap-2">
        <div className="bg-white col-span-3 row-span-5 col-start-2 row-start-1 grid grid-cols-3 grid-rows-4 gap-2 mt-10">
          <div className="row-span-3 border-r m-5 border-gray-200">
            <div className="m-5 rounded-ful">
              <button onClick={() => setStep(1)}>
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
          <div className="col-span-2 row-span-3 m-5 ">
            <h3 className="m-10 font-bold"> Enter Details</h3>
            <form action="" className="items-center">
              <div className="grid w-[85%] m-5">
                <label htmlFor="email" className="">Email address</label>
                <input type="email" id="email" placeholder="steve.madden@gmail.com" className="w-4/3 p-2 border rounded" required />
              </div>

              <div className="grid w-[85%] m-5">
                <label htmlFor="number" className="">Phone Number</label>
                <input type="number" id="number" placeholder="1234567890" className="w-4/3 p-2 border rounded" required />
              </div>
              <div className="grid w-[85%] m-5">
                <label htmlFor="" className="block text-sm font-semibold">Problem:</label>
                <select id="problem" name="problem" className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Fever</option>
                  <option>Cough</option>
                  <option>Headache</option>
                </select>
              </div>
            </form>
            <div className="grid grid-cols-3 gap-4 m-5 ">
              <form className="">
                <div className="space-y-4">
                  <h2 className="text-lg font-medium text-gray-800">Payment Details</h2>
                  
                  <div className="flex items-center space-x-3">
                    <input id="paypal" name="payment" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                    <label htmlFor="paypal" className="text-gray-700">Paypal</label>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <input id="paytm" name="payment" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                    <label htmlFor="paytm" className="text-gray-700">Paytm</label>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <input id="credit-card" name="payment" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                    <label htmlFor="credit-card" className="text-gray-700">Credit Card</label>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
        <div className="col-start-4 row-start-6 justify-items-end">
          <a href="/" className="text-base font-medium text-white px-[75px] py-[14px] bg-primary rounded-md hover:bg-cyan-800 grid">Confirm</a>
        </div>
        
      </div>
    </div>


    </>
  )
}