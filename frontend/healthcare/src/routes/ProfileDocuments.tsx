import Icon from '@mdi/react';
import { mdiBellOutline, mdiStarOutline, mdiDotsVertical  } from '@mdi/js';

export default function profiledocuments() {

  //const [date, setDate] = useState<Date | null>(new Date());
  return(
    <>
    <div className="h-screen grid grid-cols-6 grid-rows-8 gap-4">
        <div className="col-span-5 row-span-8 col-start-2 bg-gray_4">
          <div className="h-screen grid grid-cols-5 grid-rows-8 gap-2">
            <div className="col-span-5 col-start-1 grid grid-rows-5">
              <div className="row-start-2 flex justify-between items-center">
                <div className="m-4">
                <h1 className="font-bold text-2xl block mr-7"><span className="font-medium text-lg text-gray_1 block m-1">Hi, Stevan dux</span>Profile</h1>
                </div>
                  <div className='flex gap-5 m-'>
                    <select name="" id="" className='font-normal text-sm uppercase'>
                      <option value="EN">EN</option>
                      <option value="SP">SP</option>
                    </select>
                    <Icon path={mdiBellOutline} size='24px'/>

                    <div className="flex justify-center items-center">
                        <div className="w-9 h-9 mr-2">
                            <img className='rounded-full' src="./users/user.png" alt="imagen usuario"/>
                        </div>
                        <p className='text-base font-semibold m-2'>Stevan dux</p>
                    </div>
                  </div>
              </div>
              <div className="row-start-4 flex items-center m-5">
                <div className="m-0.5 p-0.5 pl-16 pr-14 border border-gray-500 hover:bg-white rounded"> <p>General</p> </div>
                <div className="m-0.5 p-0.5 border border-gray-500 hover:bg-white rounded"> <p>Consultation History</p> </div>
                <div className="m-0.5 p-0.5 border border-gray-500 hover:bg-white rounded"> <p>Patient Documents</p></div>
              </div>
            </div>
            <div className="col-span-5 row-span-7 row-start-2 ml-36 mr-36 mb-5">
              <div className=" grid grid-cols-1 grid-rows-1 gap-1 h-full bg-white">
                <div className="col-span-4 grid grid-cols-2 grid-rows-4 gap-4">
                <div className="col-span-4 flex justify-between items-center">
                  <h3 className="font-bold text-2xl m-5">Documents</h3>
                  <div className=" justify-items-center m-5">
                    <a href="/PatientStep2" className="text-base font-medium text-white px-[75px] py-[14px] bg-primary rounded-md hover:bg-cyan-800 grid">New Document</a>
                  </div>
                </div>
                <div className="col-span-4 row-span-3 row-start-2 grid grid-cols-4 grid-rows-2 ">
                    <div className="grid grid-rows-6 text-center m-4 rounded border border-gray-500">
                      <div className="flex justify-between m-1">
                        <Icon path={mdiStarOutline} size={1} />
                        <Icon path={mdiDotsVertical} size={1} />
                      </div>
                      <div className="row-span-3 row-start-2 rounded border border-gray-500 ml-10 mr-10">6</div>
                      <div className="border-t-2 border-t-gray_3 m-1">
                        <h4 className="text-lg font-bold m-0 p-0">Blood report</h4>
                        <p className="text-sm text-gray_1 m-0 p-0 ">May 14, 2023, 13:45</p>
                      </div>
                    </div>
                    <div className="grid grid-rows-6 text-center m-4 rounded border border-gray-500">
                      <div className="flex justify-between m-1">
                        <Icon path={mdiStarOutline} size={1} />
                        <Icon path={mdiDotsVertical} size={1} />
                      </div>
                      <div className="row-span-3 row-start-2 rounded border border-gray-500 ml-10 mr-10">6</div>
                      <div className="border-t-2 border-t-gray_3 m-1">
                        <h4 className="text-lg font-bold m-0 p-0">Blood report</h4>
                        <p className="text-sm text-gray_1 m-0 p-0 ">May 14, 2023, 13:45</p>
                      </div>
                    </div>
                    <div className="grid grid-rows-6 text-center m-4 rounded border border-gray-500">
                      <div className="flex justify-between m-1">
                        <Icon path={mdiStarOutline} size={1} />
                        <Icon path={mdiDotsVertical} size={1} />
                      </div>
                      <div className="row-span-3 row-start-2 rounded border border-gray-500 ml-10 mr-10">6</div>
                      <div className="border-t-2 border-t-gray_3 m-1">
                        <h4 className="text-lg font-bold m-0 p-0">Blood report</h4>
                        <p className="text-sm text-gray_1 m-0 p-0 ">May 14, 2023, 13:45</p>
                      </div>
                    </div>
                    <div className="grid grid-rows-6 text-center m-4 rounded border border-gray-500">
                      <div className="flex justify-between m-1">
                        <Icon path={mdiStarOutline} size={1} />
                        <Icon path={mdiDotsVertical} size={1} />
                      </div>
                      <div className="row-span-3 row-start-2 rounded border border-gray-500 ml-10 mr-10">6</div>
                      <div className="border-t-2 border-t-gray_3 m-1">
                        <h4 className="text-lg font-bold m-0 p-0">Blood report</h4>
                        <p className="text-sm text-gray_1 m-0 p-0 ">May 14, 2023, 13:45</p>
                      </div>
                    </div>
                    <div className="grid grid-rows-6 text-center m-4 rounded border border-gray-500">
                      <div className="flex justify-between m-1">
                        <Icon path={mdiStarOutline} size={1} />
                        <Icon path={mdiDotsVertical} size={1} />
                      </div>
                      <div className="row-span-3 row-start-2 rounded border border-gray-500 ml-10 mr-10">6</div>
                      <div className="border-t-2 border-t-gray_3 m-1">
                        <h4 className="text-lg font-bold m-0 p-0">Blood report</h4>
                        <p className="text-sm text-gray_1 m-0 p-0 ">May 14, 2023, 13:45</p>
                      </div>
                    </div>
                    <div className="grid grid-rows-6 text-center m-4 rounded border border-gray-500">
                      <div className="flex justify-between m-1">
                        <Icon path={mdiStarOutline} size={1} />
                        <Icon path={mdiDotsVertical} size={1} />
                      </div>
                      <div className="row-span-3 row-start-2 rounded border border-gray-500 ml-10 mr-10">6</div>
                      <div className="border-t-2 border-t-gray_3 m-1">
                        <h4 className="text-lg font-bold m-0 p-0">Blood report</h4>
                        <p className="text-sm text-gray_1 m-0 p-0 ">May 14, 2023, 13:45</p>
                      </div>
                    </div>
                    <div className="grid grid-rows-6 text-center m-4 rounded border border-gray-500">
                      <div className="flex justify-between m-1">
                        <Icon path={mdiStarOutline} size={1} />
                        <Icon path={mdiDotsVertical} size={1} />
                      </div>
                      <div className="row-span-3 row-start-2 rounded border border-gray-500 ml-10 mr-10">6</div>
                      <div className="border-t-2 border-t-gray_3 m-1">
                        <h4 className="text-lg font-bold m-0 p-0">Blood report</h4>
                        <p className="text-sm text-gray_1 m-0 p-0 ">May 14, 2023, 13:45</p>
                      </div>
                    </div>
                    <div className="grid grid-rows-6 text-center m-4 rounded border border-gray-500">
                      <div className="flex justify-between m-1">
                        <Icon path={mdiStarOutline} size={1} />
                        <Icon path={mdiDotsVertical} size={1} />
                      </div>
                      <div className="row-span-3 row-start-2 rounded border border-gray-500 ml-10 mr-10">6</div>
                      <div className="border-t-2 border-t-gray_3 m-1">
                        <h4 className="text-lg font-bold m-0 p-0">Blood report</h4>
                        <p className="text-sm text-gray_1 m-0 p-0 ">May 14, 2023, 13:45</p>
                      </div>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}