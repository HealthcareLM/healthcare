import Icon from '@mdi/react';
import { mdiMagnify, mdiMapMarkerOutline, mdiBellOutline, mdiBellBadgeOutline } from '@mdi/js';

export default function Barra() {
  return (
    <div className="w-full mb-6 flex justify-between items-center gap-14">
        <h1 className="font-bold text-4xl block mr-8"><span className="font-medium text-xl text-gray_1 block">Hi, Stevan dux</span>Welcome Back</h1>

        <form className='flex items-center bg-gray_4 rounded-md h-fit flex-grow '>
            <div className="w-full relative after:content-[''] after:block after:absolute after:top-2 after:right-0 after:h-3/4 after:bg-gray_3 after:w-px">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none"><Icon path={mdiMagnify} size='20px' className='text-gray_2'/></div>
                <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Find doctors"
                    className="w-full p-3 ps-10 text-sm text-gray_2 border border-gray_4 rounded-lg bg-gray_4"
                />
            </div>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none flex-grow"><Icon path={mdiMapMarkerOutline} size='20px' className='text-gray_2'/></div>
                <input 
                    type="text" 
                    name="location" 
                    id="location" 
                    placeholder="Location"
                    className="w-52 p-3 ps-10 text-sm text-gray_2 border border-gray_4 rounded-lg bg-gray_4"
                />
            </div>

            <input type="submit" value="Search" className='text-white bg-primary hover:bg-cyan-700 py-2 px-4 text-sm font-medium text-center rounded-md mx-2'/>
        </form>

        <div className='flex items-center justify-center gap-5'>
            <select name="" id="" className='font-normal text-sm uppercase'>
                <option value="EN">EN</option>
                <option value="SP">SP</option>
            </select>

            <Icon path={mdiBellOutline} size='24px'/>

            <div className="flex justify-center items-center">
                <div className="w-9 h-9 mr-2">
                    <img className='rounded-full' src="./users/user.png" alt="imagen usuario"/>
                </div>
                <p className='text-base font-semibold'>Stevan dux</p>
            </div>
        </div>
    </div>
  )
}