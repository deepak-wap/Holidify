import Structure from "../shared/layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";


const Home = ()=>{
    return (
        <Structure>
            <div className="pl-[8.9%] pr-[8.9%]">
                <Swiper
                    // install Swiper modules
                    modules={[Pagination, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className="rounded-[4px]"
                >
                    <SwiperSlide>
                        <div className="h-[460px] w-[1110] bg-black bg-opacity-40 absolute"></div>
                        <div className="h-[460px] w-[110] overflow-hidden">
                            <Image src={'/images/UDAIPUR.jpg'} width={1110} height={460}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-[460px] w-[1110px] bg-black bg-opacity-40 absolute"></div>
                        <div className="h-[460px] overflow-hidden">
                            <Image src={'/images/JAIPUR.jpg'} width={1110} height={460}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-[460px] w-[1110px] bg-black bg-opacity-40 absolute"></div>
                        <div className="h-[460px] overflow-hidden">
                            <Image src={'/images/UDAIPUR.jpg'} width={1110} height={460}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-[460px] w-[1110px] bg-black bg-opacity-40 absolute"></div>
                        <div className="h-[460px] overflow-hidden">
                            <Image src={'/images/UDAIPUR.jpg'} width={1110} height={460}/>
                        </div>
                    </SwiperSlide>
                    <div>
                        <h1>Holidify With Us</h1>
                        <p>Discover your next holiday destination</p>
                    </div>
                </Swiper>
            </div>
        </Structure>
    )
}

export default Home