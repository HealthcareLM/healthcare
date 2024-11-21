import React from "react";
import Sidebar from "../components/Sidebar";
import Barra from "../components/Barra";


type HeaderProps = {
    children: React.ReactNode
}

export default function Header({children} : HeaderProps) {
  return (
    <>
        <div className="flex">
          <Sidebar />
          <main className="w-full h-screen p-5 overflow-scroll overflow-x-hidden">
            <Barra />
            {children}
          </main>
        </div>
    </>
  )
}
