import React from "react";
import Sidebar from "../components/Sidebar";
import Barra from "../components/Barra";
import {useState} from "react"

type HeaderProps = {
    children: React.ReactNode
}

export default function Header({children} : HeaderProps) {

  const [menu, setMenu] = useState(false);

  return (
    <>
        <div className="flex">
          <Sidebar menu={menu} />
          <main className="w-full h-screen p-5 overflow-scroll overflow-x-hidden">
            <Barra setMenu={setMenu}/>
            {children}
          </main>
        </div>
    </>
  )
}
