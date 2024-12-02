import Icon from '@mdi/react';
import { mdiStarOutline, mdiDotsVertical } from '@mdi/js';

export default function ProfileDocuments() {
  return (
    <>
      <div className="h-screen flex flex-col p-4 md:grid md:grid-cols-5 md:grid-rows-8 gap-4">
        <div className="col-span-5 row-span-8">
          <div className="h-full grid grid-cols-1 md:grid-cols-5 md:grid-rows-8 gap-4">
            <div className="col-span-5 row-span-7 mx-4 md:mx-20">
              <div className="h-full bg-white shadow-md rounded-lg p-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                  <h3 className="font-bold text-xl md:text-2xl">Documents</h3>
                  <a
                    href="/PatientStep2"
                    className="text-base font-medium text-white px-6 py-2 bg-primary rounded-md hover:bg-cyan-800 mt-4 md:mt-0"
                  >
                    New Document
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Array(8)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        key={index}
                        className="grid grid-rows-6 text-center rounded border border-gray-300 p-4"
                      >
                        <div className="flex justify-between">
                          <Icon path={mdiStarOutline} size={1} />
                          <Icon path={mdiDotsVertical} size={1} />
                        </div>
                        <div className="row-span-3 my-4 rounded border border-gray-300 flex items-center justify-center">
                          <span className="text-lg">6</span>
                        </div>
                        <div className="border-t-2 border-gray-200 pt-2">
                          <h4 className="text-lg font-bold">Blood report</h4>
                          <p className="text-sm text-gray-500">
                            May 14, 2023, 13:45
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
