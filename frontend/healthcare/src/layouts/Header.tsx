import Sidebar from "../components/Sidebar";
import Barra from "../components/Barra";
import {ReactNode, useState} from "react"

import { Outlet } from "react-router-dom";


interface HeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {

  const [menu, setMenu] = useState(false);

  return (
    <>
        <div className="flex">
          <Sidebar menu={menu} />
          <main className="w-full h-screen p-5 overflow-scroll overflow-x-hidden">
            <Barra setMenu={setMenu}/>
            { children || <Outlet/> }
          </main>
        </div>
    </>
  )
}
