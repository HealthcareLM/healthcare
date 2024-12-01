import { Link, useLocation } from 'react-router-dom'
import Icon from '@mdi/react';
import { mdiLogout } from '@mdi/js';
import { SidebarLinks } from '../data/SidebarData';
import { useAuth } from '../hooks/useAuth';


export default function Sidebar({menu}: {menu:boolean}) {

  const { logout } = useAuth()

  const location = useLocation().pathname.split('/')[1];
  

  return (
    <aside className={`md:flex md:flex-col border-slateBorder border w-60 items-center px-5 h-screen ${menu ? 'fixed flex flex-col' : 'hidden'}  md:relative bg-white z-[60] justify-end`}>

        <div className='w-full h-full flex flex-col justify-between'>
          <div>
            <Link className="flex mt-11 cursor-pointer" to='/'>
                <img className='w-7 mr-1' src="/logo.svg" alt="logo" />
                <h2 className='text-primary text-3xl'>Healthi</h2>
            </Link>

            <nav className="w-full mt-14">
                <ul className='flex flex-col gap-3'>
                  {SidebarLinks.pacientes.links.map((link) => (
                    <li key={link.title}>
                      <Link className={`flex items-center text-slate-500 p-3 rounded-md hover:bg-primary hover:text-white ${location === link.ruta.split('/')[1] ? 'bg-primary text-white' : ''}`} to={link.ruta}><Icon path={link.icono} size={'16px'} className='mr-2 hover:fill-white'/>{link.title}</Link>
                    </li>
                  ))}
                  <li>
                      <div className='flex items-center text-slate-500 p-3 rounded-md hover:bg-primary hover:text-white cursor-pointer' onClick={logout}><Icon path={mdiLogout} size={'16px'} className='mr-2 hover:fill-white'/>Logout</div>
                  </li>
                </ul>

                {/* <ul className='flex flex-col gap-5'>
                  {SidebarLinks.doctores.links.map((link) => (
                    <li key={link.title}>
                      <Link className={`flex items-center text-slate-500 p-3 rounded-md hover:bg-primary hover:text-white ${location === link.ruta.split('/')[1] ? 'bg-primary text-white' : ''}`} to={link.ruta}><Icon path={link.icono} size={'16px'} className='mr-2 hover:fill-white'/>{link.title}</Link>
                    </li>
                  ))}
                </ul> */}
            </nav>
          </div>

        <div className="mt-auto mb-5 relative">
          <img className='absolute bottom-24 left-4 w-10/12' src="/image_7.png" alt="img"/>
          <div className="relative">
            <img className='' src="/figura_1.png" alt="img"/>
            <div className="w-full absolute bottom-0 px-4 mb-4">
              <p className='text-white text-base text-center pb-3'>Get faster <br></br> and better <br></br> Healthcare</p>
              <div 
                className="text-white bg-primary hover:bg-primary dark focus:ring-4 text-center font-normal rounded-lg text-xs px-5 py-2.5"
              >Go Pro</div>
            </div>
          </div>
        </div>
        </div>
    </aside>
  )
}
