

type Link = {
    icono: string,
    title: string,
    ruta: string
}

type Redirect = {
    title: string,
    ruta: string
}

export type LinksSidebar = {
    pacientes: {
        links: Link[]
    },
    doctores : {
      links: Link[]
    },
    profile : {
        redirects: Redirect[]
    }
}