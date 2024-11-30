import Sidebar from "../components/Sidebar";
import Barra from "../components/Barra";
import {useState} from "react"

import { Outlet } from "react-router-dom";


export default function Header() {

  const [menu, setMenu] = useState(false);

  return (
    <>
        <div className="flex">
          <Sidebar menu={menu} />
          <main className="w-full h-screen p-5 overflow-scroll overflow-x-hidden">
            <Barra setMenu={setMenu}/>
            <Outlet/>
          </main>
        </div>
    </>
  )
}
