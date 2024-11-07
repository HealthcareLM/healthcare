import React from "react";

type HeaderProps = {
    children: React.ReactNode
}

export default function Header({children} : HeaderProps) {
  return (
    <>
        <header>Hola</header>
        <main>{children}</main>
    </>
  )
}
