import { mdiViewDashboardOutline, mdiCalendarBlankOutline, mdiAccountCircleOutline, mdiHelpCircleOutline, mdiLogout, mdiNoteMultipleOutline, mdiVideoOutline  } from '@mdi/js';

import { LinksSidebar } from '../types/LinksSidebar';

export const SidebarLinks : LinksSidebar = {
  pacientes: {
    links: [
        {icono: mdiViewDashboardOutline, title: 'Dashboard', ruta: '/dashboard'},
        {icono: mdiCalendarBlankOutline, title: 'Calendar', ruta: '/available'},
        {icono: mdiAccountCircleOutline, title: 'Profile', ruta: '/profile'},
        {icono: mdiHelpCircleOutline, title: 'Help', ruta: '/help'},
        {icono: mdiLogout, title: 'Logout', ruta: '/logout'}
    ]
  },
  doctores: {
    links: [
      {icono: mdiViewDashboardOutline, title: 'Dashboard', ruta: '/dashboard'},
      {icono: mdiNoteMultipleOutline, title: 'Patient Records', ruta: '/'},
      {icono: mdiCalendarBlankOutline, title: 'My Availability', ruta: '/available'},
      {icono: mdiAccountCircleOutline, title: 'My Consults', ruta: '/'},
      {icono: mdiVideoOutline , title: 'Onlinea Consult', ruta: '/'},
      {icono: mdiHelpCircleOutline, title: 'Help', ruta: '/'},
      {icono: mdiLogout, title: 'Logout', ruta: '/logout'}
    ]
  }
}