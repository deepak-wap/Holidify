import Structure from "../shared/layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Card } from 'antd'
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
                </Swiper>
                <div className="mt-[-150px] z-10 absolute w-[1110px] flex flex-col items-center justify-center">
                        <h1 className="text-[42px] text-white font-[manrope] tracking-[0.43px] font-bold mt-[-12px]">Holidify With Us</h1>
                        <p className="text-[22.58px] text-white font-[manrope] tracking-[0.4px] mt-1 mb-5">Discover your next holiday destination</p>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                                <i className="bx bx-search text-[23px] text-gray-500"></i>
                            </div>
                            <input
                                type="search"
                                className="mt-[2px] outline-none border border-[1px] border-slate-300 rounded-[4px] w-[540px] h-[46px] py-[29px] ps-[43px] text-[17px] tracking-[0.3px] placeholder:text-slate-500"
                                placeholder="Try 'Manali'"
                            />
                        </div>
                </div>
                <div className="grid grid-cols-12 mt-[46px]">
                    <div className="col-span-8 h-[500px]">
                        <div className="mb-[45px]">
                            <h1 className="mb-1 w-full text-[#333333] text-[21.7px] font-[manrope] font-bold tracking-[0px]">
                                Explore the world with Holidify
                            </h1>
                            <a href="/">
                                <Card
                                    // title="Card title"
                                    // bordered={true}
                                    className="w-[724px] h-[110px] px-[54.5px] shadow-[0_2px_4px_0_rgba(178,178,178,0.5)]"
                                >
                                <div className="flex gap-[174px] mt-[-3px]">
                                    <div>
                                        <a href="/" className="flex flex-col gap-[7px] hover:text-[#333333] hover:underline">
                                            <Image src={'/images/traveller.png'} width={33} height={33} className="ml-5"/>
                                            <span className="text-[#333333] text-[16.5px] font-[manrope] font-bold tracking-[0.5px]">
                                                Packages
                                            </span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="flex flex-col gap-[7px] hover:text-[#333333] hover:underline">
                                            <Image src={'/images/sleeping.png'} width={33} height={33} className="ml-[7px]"/>
                                            <span className="text-[#333333] text-[16.5px] font-[manrope] font-bold tracking-[0.2px]">
                                                Hotels
                                            </span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="flex flex-col gap-[7px] hover:text-[#333333] hover:underline">
                                            <Image src={'/images/explore.png'} width={33} height={33} className="ml-[22px]"/>
                                            <span className="text-[#333333] text-[16.5px] font-[manrope] font-bold tracking-[0.5px] ml-[10px]">
                                                Explore
                                            </span>
                                        </a>
                                    </div>
                                </div>                            
                                </Card>
                            </a>
                        </div>
                        <div>
                            <h1 className="pb-[7px] w-full text-[#333333] text-[21px] font-[manrope] font-bold tracking-[0.3px] border-b border-gray-300">
                                Countries you can explore
                            </h1>
                        </div>

                    </div>
                    <div className="col-span-4 px-4 h-[500px]">
                        <h1 className="w-full text-[#333333] text-[21.7px] font-[manrope] font-bold tracking-[0px]">Recent Articles</h1>
                    </div>
                </div>
            </div>
        </Structure>
    )
}

export default Home