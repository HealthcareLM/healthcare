import Icon from '@mdi/react';
import { mdiMagnify, mdiMapMarkerOutline, mdiBellOutline, mdiMenu } from '@mdi/js';
import { Link, useLocation } from 'react-router-dom';
import { titles } from '../data/TitlesData';
import { useAuth } from "../hooks/useAuth";



export default function Barra({setMenu}: {setMenu:React.Dispatch<React.SetStateAction<boolean>>}) {

    const location = useLocation().pathname.split('/')[1];

    const { user } = useAuth()

    return (
        <div className="w-full mb-6 flex justify-between items-center xl:gap-14 flex-col md:flex-row">
            <div className='md:hidden w-full flex justify-between items-center'>
                <div className="flex my-4 md:my-0">
                    <img className='w-7 mr-1' src="/logo.svg" alt="logo" />
                    <h2 className='text-primary font-medium text-3xl'>Healthi</h2>
                </div>

                <div className='flex justify-center items-center cursor-pointer' onClick={() => setMenu(prevState => !prevState)}>
                    <Icon path={mdiMenu} size={'30px'}/>
                </div>
            </div>

            <div className='w-full flex items-center  md:w-auto'>
                <div className="w-14 h-14 mr-2 md:hidden">
                    <img className='rounded-full' src="/users/user.png" alt="imagn"/>
                </div>
                <h1 className="font-bold text-4xl block md:mr-8"><span className="font-medium text-xl text-gray_1 block text-nowrap">Hi, {user.nombre} </span>{titles[location] || ''}</h1>
            </div>

            <form className='flex items-center bg-gray_4 rounded-md h-fit flex-grow mt-4 md:mt-0'>
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
                        className="w-32 xl:w-52 p-3 ps-10 text-sm text-gray_2 border border-gray_4 rounded-lg bg-gray_4"
                    />
                </div>

                <input type="submit" value="Search" className='text-white bg-primary hover:bg-cyan-700 py-2 px-4 text-sm font-medium text-center rounded-md mx-2'/>
            </form>

            <div className=' items-center justify-center gap-5 hidden md:flex ml-5'>
                <select name="" id="" className='font-normal text-sm uppercase'>
                    <option value="EN">EN</option>
                    <option value="SP">SP</option>
                </select>

                <Icon path={mdiBellOutline} size='24px' className=''/>

                <Link to={'/profile'} className="flex justify-center items-center">
                    <div className="w-9 h-9 mr-2 rounded-full overflow-hidden">
                        <img className='object-cover h-full' src={`./users/${user.imagen}`} alt="imagen usuario"/>
                    </div>
                    <p className='text-base font-semibold whitespace-nowrap'> {user.nombre} </p>
                </Link>
            </div>
        </div>
    )
}
