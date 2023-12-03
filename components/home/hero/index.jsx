import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/effect-fade';

const Hero = ()=>{
    return (
        <>
            <div className="">
                <div className="absolute h-[400px] w-full bg-black bg-opacity-[0.5] hover:bg-opacity-[0.6] rounded-[4px] z-20"></div>
                <div className="w-full h-[400px] overflow-hidden">
                    <Image 
                        src={'/images/package-1.jpg'} 
                        width={720} 
                        height={480} 
                        className='w-full h-[437px] rounded-[4px]'
                    />
                </div>           
                <div className="mt-[-180px] px-[120px] z-20 absolute w-fit flex flex-col">
                        <h1 className="text-[42px] text-white font-[manrope] tracking-[0.43px] font-bold mt-[-12px]">
                            Holiday Tour Packages
                        </h1>
                        <p className="text-[22.58px] text-white font-[manrope] tracking-[0.4px] mt-1 mb-5">
                            Get the Best Travel & Tour Package Deals via 3,000+ Trusted Agents
                        </p>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                                <i className="bx bx-search text-[23px] text-gray-500"></i>
                            </div>
                            <input
                                type="search"
                                className="mt-[2px] outline-none border border-[1px] border-slate-300 rounded-[4px] w-[1110px] h-[46px] py-[29px] ps-[43px] text-[17px] tracking-[0.3px] placeholder:text-slate-500"
                                placeholder="Search 'Package in Manali'"
                            />
                        </div>
                </div>
            </div>
        </>
    )
}

export default Hero