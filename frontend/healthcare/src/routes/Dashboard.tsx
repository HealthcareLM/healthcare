import Header from "../layouts/Header"
import Carrusel from "../components/Carrusel"
import Calendar from "../components/Calendar";

import CardDoctor from "../components/CardDoctor";
import CardNearbyDoctor from "../components/CardNearbyDoctor";

import Icon from '@mdi/react';
import { mdiMapMarker, mdiChevronRight, mdiCalendarMonthOutline  } from '@mdi/js';
import { useState } from "react";

export default function Dashboard() {

  const [ubicacion, setUbicacion] = useState(true)

  return (
    <Header>
        <div className="">
          <div className="flex gap-5 flex-col xl:flex-row">
            <div className="w-full lx:w-3/5">
              <div className="h-72">
                <Carrusel/>
              </div>
              <div className="mt-7">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold mb-3">Nearby Doctors</h3>
                  { ubicacion ? (
                    <div className="flex items-center">
                      <p className="text-[#4CB269] text-sm font-bold cursor-pointer">View All</p>
                      <Icon path={mdiChevronRight} size={'16px'} className="text-[#4CB269]"/>
                    </div>
                  ) : ('')}
                </div>
                { !ubicacion ? (
                  <div className="flex border border-slateBorder rounded-xl items-center justify-center">
                    <div className="flex flex-col justify-center items-center gap-3 py-8 w-full">
                      <Icon path={mdiMapMarker} size={'42px'} />
                      <p className="text-sm text-['#4E4E4E']">Please enable your location, so we can find nearby doctors. <span className="text-primary underline cursor-pointer text-sm">Enable Now</span></p>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4 flex-col md:flex-row">
                    <CardNearbyDoctor/>
                    <CardNearbyDoctor/>
                    <CardNearbyDoctor/>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full xl:w-2/5 border border-slateBorder rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold">Upcoming Appointments</h3>
                <div className="flex items-center">
                  <p className="text-primary text-sm font-bold cursor-pointer">View All</p>
                  <Icon path={mdiChevronRight} size={'16px'} className="text-primary"/>
                </div>
              </div>
              <div className="">
                <Calendar/>

                <div className="flex flex-col justify-center items-center mt-6">
                  <Icon path={mdiCalendarMonthOutline} size={'48px'} className="text-primary"/>
                  <p>No upcoming appointments</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 border border-slateBorder rounded-xl p-5">
            <h3 className="text-2xl font-semibold mb-5">Recommended Doctors</h3>

            <div className="flex justify-between gap-4 flex-col md:flex-row">
              <CardDoctor/>
              <CardDoctor/>
              <CardDoctor/>
            </div>
          </div>
        </div>
    </Header>
  )
}

