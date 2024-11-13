import Icon from '@mdi/react';
import { mdiMapMarkerOutline } from '@mdi/js';

export default function CardNearbyDoctor() {
  return (
    <div className="border border-slateBorder rounded-xl p-5 w-full relative">
        <div className="flex after:content-[''] after:block after:absolute after:h-px after:bg-gray_3 after:w-11/12 after:bottom-16 after:left-1/2 after:transform after:-translate-x-1/2">
            <div className="w-[68px] h-[60px] overflow-hidden rounded-md">
                <img className="w-full h-full object-cover" src="./nearby_doctors/1.webp" alt="foto doctor" />
            </div>
            <div className="ml-4 my-auto">
                <p className="block text-sm font-medium">Aline Carvalho</p>
                <p className="block text-sm font-normal text-gray_2">Heart health</p>
            </div>
        </div>

        <div className="flex mt-8">
            <div className="flex w-full">
                <div className="flex gap-2 items-center">
                    <Icon path={mdiMapMarkerOutline} size={'20px'} className='text-gray_2'/>
                    <p className="block text-xs font-normal text-gray_2">1 km<span className='block'>Rua São Salvador 57, Braga</span></p>
                </div>
            </div>


        </div>
    </div>
  )
}
