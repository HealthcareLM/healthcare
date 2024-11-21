import { Carousel } from "@material-tailwind/react";
import info_slider1 from '../assets/info_slider-1.png'
import elipse from '../assets/ellipse_slider-1.png'
import doctores from '../assets/img_2.png'

export default function Carrusel() {
    return (
        <Carousel className="rounded-xl h-[262px] w-full">
            <div className="w-full h-full">
                <div className="h-full w-full bg-gradient-to-r from-[#B0B9BC] to-[#568392] relative">
                    <img
                        src={info_slider1}
                        alt="image 1"
                        className="pt-6 pl-6"
                    />            
                    <div className="absolute bottom-0 right-0 flex">
                        <img
                            src={elipse}
                            alt="image 1"
                            className="h-full"
                        />
                    </div>
                </div>
                <div className="absolute top-0 right-[-10px] h-full items-end">
                    <img
                        src={doctores}
                        alt="image 1"
                        className="h-full"
                    />
                </div>
            </div>
            <div className="w-full h-full">
                <div className="h-full w-full bg-gradient-to-r from-[#B0B9BC] to-[#568392] relative">
                    <img
                        src={info_slider1}
                        alt="image 1"
                        className="pt-6 pl-6"
                    />            
                    <div className="absolute bottom-0 right-0 flex">
                        <img
                            src={elipse}
                            alt="image 1"
                            className="h-full"
                        />
                    </div>
                </div>
                <div className="absolute top-0 right-[-10px] flex h-full items-end">
                    <img
                        src={doctores}
                        alt="image 1"
                        className="h-full"
                    />
                </div>
            </div>
            <div className="w-full h-full">
                <div className="h-full w-full bg-gradient-to-r from-[#B0B9BC] to-[#568392] relative">
                    <img
                        src={info_slider1}
                        alt="image 1"
                        className="pt-6 pl-6"
                    />            
                    <div className="absolute bottom-0 right-0 flex">
                        <img
                            src={elipse}
                            alt="image 1"
                            className="h-full"
                        />
                    </div>
                </div>
                <div className="absolute top-0 right-[-10px] flex h-full items-end">
                    <img
                        src={doctores}
                        alt="image 1"
                        className="h-full"
                    />
                </div>
            </div>
        </Carousel>
    )
}

