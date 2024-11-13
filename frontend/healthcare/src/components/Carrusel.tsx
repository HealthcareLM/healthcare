import { Carousel } from "@material-tailwind/react";
import slider_1 from '../assets/slider_1.png'
import img_2 from '../assets/img_2.png'

export default function Carrusel() {
    return (
        <Carousel className="rounded-xl h-fit">
            <div className="h-full w-full">
                <img
                    src={slider_1}
                    alt="image 1"
                    className="h-full w-full object-contain relative"
                />
                <div className="absolute top-0 right-[-10px] flex h-full items-end ">
                    <img
                        src={img_2}
                        alt="image 1"
                        className="h-full"
                    />
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={slider_1}
                    alt="image 1"
                    className="h-full w-full object-contain relative"
                />
                <div className="absolute top-0 right-[-10px] flex h-full items-end ">
                    <img
                        src={img_2}
                        alt="image 1"
                        className="h-full"
                    />
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={slider_1}
                    alt="image 1"
                    className="h-full w-full object-contain relative"
                />
                <div className="absolute top-0 right-[-10px] flex h-full items-end ">
                    <img
                        src={img_2}
                        alt="image 1"
                        className="h-full"
                    />
                </div>
            </div>
        </Carousel>
    )
}

