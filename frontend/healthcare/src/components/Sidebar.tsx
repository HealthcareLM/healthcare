import { Link } from 'react-router-dom'
import Icon from '@mdi/react';
import { mdiViewDashboardOutline, mdiCalendarBlankOutline, mdiAccountCircleOutline, mdiHelpCircleOutline, mdiLogout } from '@mdi/js';

export default function Sidebar() {
  return (
    <aside className="flex flex-col border-slateBorder border w-60 items-center px-5">

        <div className="flex mt-11">
            <img className='w-7 mr-1' src="./logo.svg" alt="logo" />
            <h2 className='text-primary text-3xl'>Healthi</h2>
        </div>

        <nav className="w-full mt-14">
            <ul className='flex flex-col gap-3'>
              <li>
                <Link className='flex  items-center text-slate-500 p-3 rounded-md hover:bg-primary hover:text-white' to="/dashboard"><Icon path={mdiViewDashboardOutline} size={'16px'} className='mr-2 hover:fill-white'/>Dashboard</Link>
              </li>
              <li>
                <Link className='flex  items-center text-slate-500 p-3 rounded-md hover:bg-primary hover:text-white' to="/calendar"><Icon path={mdiCalendarBlankOutline} size={'16px'} className='mr-2 hover:fill-white'/>Calendar</Link>
              </li>
              <li>
                <Link className='flex  items-center text-slate-500 p-3 rounded-md hover:bg-primary hover:text-white' to="/calendar"><Icon path={mdiAccountCircleOutline } size={'16px'} className='mr-2 hover:fill-white'/>Profile</Link>
              </li>
              <li>
                <Link className='flex  items-center text-slate-500 p-3 rounded-md hover:bg-primary hover:text-white' to="/calendar"><Icon path={mdiHelpCircleOutline } size={'16px'} className='mr-2 hover:fill-white'/>Help</Link>
              </li>
              <li>
                <Link className='flex  items-center text-slate-500 p-3 rounded-md hover:bg-primary hover:text-white' to="/calendar"><Icon path={mdiLogout} size={'16px'} className='mr-2 hover:fill-white'/>Logout</Link>
              </li>
            </ul>
        </nav>

        <div className="mt-auto mb-5 relative">
          <img className='absolute bottom-24 left-4 w-10/12' src="./image_7.png" alt="img"/>
          <div className="relative">
            <img className='' src="./figura_1.png" alt="img"/>
            <div className="w-full absolute bottom-0 px-4 mb-4">
              <p className='text-white text-base text-center pb-3'>Get faster <br></br> and better <br></br> Healthcare</p>
              <div 
                className="text-white bg-primary hover:bg-primary dark focus:ring-4 text-center font-normal rounded-lg text-xs px-5 py-2.5"
              >Go Pro</div>
            </div>
          </div>
        </div>
    </aside>
  )
}
