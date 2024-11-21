import { mdiViewDashboardOutline, mdiCalendarBlankOutline, mdiAccountCircleOutline, mdiHelpCircleOutline, mdiLogout } from '@mdi/js';

import { LinksSidebar } from '../types/LinksSidebar';

export const SidebarLinks : LinksSidebar = {
    pacientes: {
        links: [
            {icono: mdiViewDashboardOutline, title: 'Dashboard', ruta: '/dashboard'},
            {icono: mdiCalendarBlankOutline, title: 'Calendar', ruta: '/calendar'},
            {icono: mdiAccountCircleOutline, title: 'Profile', ruta: '/profile'},
            {icono: mdiHelpCircleOutline, title: 'Help', ruta: '/help'},
            {icono: mdiLogout, title: 'Logout', ruta: '/logout'}
        ]
    }
}