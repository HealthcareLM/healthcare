import Icon from '@mdi/react'; // Cambiar importación
import { mdiStethoscope } from '@mdi/js';
import { mdiClockTimeThreeOutline } from '@mdi/js';
import { mdiVideoOutline } from '@mdi/js';
import { mdiHandCoinOutline } from '@mdi/js';
import { Doctor } from '../types/Usuarios';

type ScheduleDoctorProps = {
  doctor: Doctor
}


export default function ScheduleDoctor ({doctor} : ScheduleDoctorProps ) {
  return (
  <>
    <div className="m-4 flex">
      <Icon className="text-gray_5 m-2" path={mdiStethoscope} size={1} /> <p className="text-gray_5 m-2">Dr.{doctor.nombre}</p>
    </div>
    <div className="m-4 flex">
      <Icon className="text-gray_5 m-2" path={mdiClockTimeThreeOutline} size={1} />
      <p className="text-gray_5 m-2">30 mins</p>
    </div>
    <div className="m-4 flex">
      <Icon className="text-gray_5 m-2" path={mdiVideoOutline} size={2} />
      <p className="text-gray_5 m-2">
        Video call details provided upon
        succesful confirmation
      </p>
    </div>
    <div className="m-4 flex">
      <Icon className="text-gray_5 m-2" path={mdiHandCoinOutline} size={1} />
      <p className="text-gray_5 m-2">{doctor.costo}</p>
    </div>
  </>

  )
}
