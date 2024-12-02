import { mdiViewDashboardOutline, mdiCalendarBlankOutline, mdiAccountCircleOutline, mdiHelpCircleOutline, mdiLogout, mdiNoteMultipleOutline, mdiVideoOutline  } from '@mdi/js';

import { LinksSidebar } from '../types/LinksSidebar';

export const SidebarLinks : LinksSidebar = {
  pacientes: {
    links: [
        {icono: mdiViewDashboardOutline, title: 'Dashboard', ruta: '/dashboard'},
        {icono: mdiCalendarBlankOutline, title: 'Calendar', ruta: '/available'},
        {icono: mdiAccountCircleOutline, title: 'Profile', ruta: '/profile'},
        {icono: mdiHelpCircleOutline, title: 'Help', ruta: '/help'},
    ]
  },
  doctores: {
    links: [
      {icono: mdiViewDashboardOutline, title: 'Dashboard', ruta: '/dashboard'},
      {icono: mdiNoteMultipleOutline, title: 'Patient Records', ruta: '/patientrecords'},
      {icono: mdiCalendarBlankOutline, title: 'My Availability', ruta: '/available'},
      {icono: mdiAccountCircleOutline, title: 'My Consults', ruta: '/MenuConsults'},
      {icono: mdiVideoOutline , title: 'Online Consult', ruta: '/'},
      {icono: mdiHelpCircleOutline, title: 'Help', ruta: '/'},
    ]
  },
  profile: {
    redirects: [
      {title: 'General', ruta: '/profile'},
      {title: 'Consultation History', ruta: '/profile/history'},
      {title: 'Patient Documents', ruta: '/profile/documents'},
    ]
  }
}