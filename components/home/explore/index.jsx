import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Card, Menu } from 'antd'
import { DownOutlined } from "@ant-design/icons";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";

const Explore = ()=>{
    const countries = [
        {
          key: 1,
          label: 'South Asia',
          category: 'Countries you can explore',
          slidesPerView: 4,
          places: [
            {
                key: 'maldives',
                label: 'Maldives',
                src: '/images/UDAIPUR.jpg'
            },
            {
                key: 'india',
                label: 'India',
                src: '/images/JAIPUR.jpg'
            },
            {
                key: 'sri-lanka',
                label: 'Sri Lanka',
                src: '/images/BIR.jpg'
            },
            {
                key: 'bhutan',
                label: 'Bhutan',
                src: '/images/CHIANG-MAI.jpg'
            },
            {
                key: 'udaipur1',
                label: 'Udaipur',
                src: '/images/UDAIPUR.jpg'
            },
            {
                key: 'jaipur1',
                label: 'Jaipur',
                src: '/images/JAIPUR.jpg'
            },
            {
                key: 'bir1',
                label: 'Bir',
                src: '/images/BIR.jpg'
            },
            {
                key: 'chiang-mai1',
                label: 'Chiang Mai',
                src: '/images/CHIANG-MAI.jpg'
            },
          ],
          menu: true,
          rating: false,
        },
        {
          key: 2,
          label: 'West Asia',
          category: 'Top places near metro cities',
          slidesPerView: 3,
          places: [
            {
                key: 'udaipur',
                label: 'Udaipur',
                src: '/images/UDAIPUR.jpg'
            },
            {
                key: 'jaipur',
                label: 'Jaipur',
                src: '/images/JAIPUR.jpg'
            },
            {
                key: 'bir',
                label: 'Bir',
                src: '/images/BIR.jpg'
            },
            {
                key: 'chiang-mai',
                label: 'Chiang Mai',
                src: '/images/CHIANG-MAI.jpg'
            },
          ],
          menu: false,
          rating: false,
        },
        {
          key: 3,
          label: 'South-East Asia',
          category: 'Countries to visit in upcoming months',
          slidesPerView: 3,
          places: [
            {
                key: 'udaipur',
                label: 'Udaipur',
                src: '/images/UDAIPUR.jpg'
            },
            {
                key: 'jaipur',
                label: 'Jaipur',
                src: '/images/JAIPUR.jpg'
            },
            {
                key: 'bir',
                label: 'Bir',
                src: '/images/BIR.jpg'
            },
            {
                key: 'chiang-mai',
                label: 'Chiang Mai',
                src: '/images/CHIANG-MAI.jpg'
            },
          ],
          menu: false,
          rating: false,
        },
        {
          key: 4,
          label: 'Others',
          category: 'Places to visit in upcoming months',
          slidesPerView: 3,
          places: [
            {
                key: 'udaipur',
                label: 'Udaipur',
                src: '/images/UDAIPUR.jpg'
            },
            {
                key: 'jaipur',
                label: 'Jaipur',
                src: '/images/JAIPUR.jpg'
            },
            {
                key: 'bir',
                label: 'Bir',
                src: '/images/BIR.jpg'
            },
            {
                key: 'chiang-mai',
                label: 'Chiang Mai',
                src: '/images/CHIANG-MAI.jpg'
            },
          ],
          menu: false,
          rating: false,
        },
        {
          key: 5,
          label: 'Africa',
          category: 'Packages in demand',
          slidesPerView: 3,
          places: [
            {
                key: 'udaipur',
                label: 'Udaipur',
                src: '/images/UDAIPUR.jpg'
            },
            {
                key: 'jaipur',
                label: 'Jaipur',
                src: '/images/JAIPUR.jpg'
            },
            {
                key: 'bir',
                label: 'Bir',
                src: '/images/BIR.jpg'
            },
            {
                key: 'chiang-mai',
                label: 'Chiang Mai',
                src: '/images/CHIANG-MAI.jpg'
            },
          ],
          menu: false,
          rating: true,
        },
        {
            key: 6,
            label: 'Africa',
            category: 'Discover the best places on Holidify',
            slidesPerView: 3,
            places: [
              {
                  key: 'udaipur',
                  label: 'Udaipur',
                  src: '/images/UDAIPUR.jpg'
              },
              {
                  key: 'jaipur',
                  label: 'Jaipur',
                  src: '/images/JAIPUR.jpg'
              },
              {
                  key: 'bir',
                  label: 'Bir',
                  src: '/images/BIR.jpg'
              },
              {
                  key: 'chiang-mai',
                  label: 'Chiang Mai',
                  src: '/images/CHIANG-MAI.jpg'
              },
            ],
            menu: true,
          rating: true,
        },
        {
            key: 7,
            label: 'Africa',
            category: 'Themes you can explore',
            slidesPerView: 4,
            places: [
              {
                  key: 'udaipur',
                  label: 'Udaipur',
                  src: '/images/UDAIPUR.jpg'
              },
              {
                  key: 'jaipur',
                  label: 'Jaipur',
                  src: '/images/JAIPUR.jpg'
              },
              {
                  key: 'bir',
                  label: 'Bir',
                  src: '/images/BIR.jpg'
              },
              {
                  key: 'chiang-mai',
                  label: 'Chiang Mai',
                  src: '/images/CHIANG-MAI.jpg'
              },
            ],
            menu: false,
          rating: false,
        },
        
    ];

    const recentArtical = [
        {
            key : 1,
            label: 'Head Over to the Spectacular Pushkar Fair in November',
            src : '/images/UDAIPUR.jpg',
            href: '/',
        },
        {
            key : 2,
            label: 'Must Visit Places To Visit In November In India',
            src : '/images/UDAIPUR.jpg',
            href: '/',
        },
        {
            key : 3,
            label: 'Sri Lanka is Visa-free for Indians! Book your Packages Now.',
            src : '/images/UDAIPUR.jpg',
            href: '/',
        },
        {
            key : 4,
            label: 'Camping Sites Near Bangalore for a Perfect Weekend Getaway!',
            src : '/images/UDAIPUR.jpg',
            href: '/',
        },
        {
            key : 5,
            label: 'Celebrate the Festival of Lights in Emirates Style!',
            src : '/images/UDAIPUR.jpg',
            href: '/',
        },
        {
            key : 6,
            label: 'Get Ready for a Snowy Winter Getaway!',
            src : '/images/UDAIPUR.jpg',
            href: '/',
        },
    ]

    return (
        <>
            <div className="pl-[8.9%] pr-[8.9%]">
                <div className="grid grid-cols-12 mt-[46px]">
                    <div className="col-span-8">
                        <div className="mb-[45px]">
                            <h1 className="mb-1 w-full text-[#333333] text-[21.7px] font-[manrope] font-bold tracking-[0px]">
                                Explore the world with Holidify
                            </h1>
                            <Link href="/" legacyBehavior>
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
                            </Link>
                        </div>
                        {
                            countries.map((country)=>{
                                return (
                                    <div> {/*repeat*/}
                                        <div className="mb-4 pr-4">
                                            <div>
                                                <h1 className={`${country.menu ? 'border-b border-gray-300 pb-[7px]' : ''} w-full text-[#333333] text-[21px] font-[manrope] font-bold tracking-[0.3px]`}>
                                                    {country.category}
                                                </h1>
                                            </div>
                                            <div className={`${country.menu ? '' : 'hidden'} border-b border-gray-300 pt-[18px] pb-[23px]`}>
                                                <div className="flex gap-6">
                                                    {
                                                        countries.map((country)=>{
                                                            return (
                                                                <span 
                                                                    className={`text-[16.5px] text-[#333] font-mono border-[#3D81BB] tracking-[0.5px] underline-offset-[24px] decoration-[6px] ${country.key === 1 ? 'text-[#3d81bb] font-bold underline':'hover:text-[#3d81bb] hover:underline'}`}
                                                                >
                                                                    {country.label}
                                                                </span>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pr-4 mb-14">
                                            <Swiper
                                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                                spaceBetween={0}
                                                slidesPerView={country.slidesPerView}
                                                navigation
                                                // pagination={{ clickable: true }}
                                                // scrollbar={{ draggable: true }}
                                                // onSwiper={(swiper) => console.log(swiper)}
                                                // onSlideChange={() => console.log('slide change')}
                                                className="rounded-[4px]"
                                            >
                                            {
                                                    countries[0].places.map((place)=>{
                                                        return (
                                                            <SwiperSlide>
                                                                <Link href={'/'} className="hover:underline">
                                                                <div className="relative">
                                                                    <div className={`${country.rating ? '' : 'hidden'} absolute right-[10px] text-[14px] text-white font-[manrope] font-bold bg-[#247C2A] flex items-center px-[10px] py-1 rounded-[4px]`}>
                                                                        4.5
                                                                    </div>
                                                                    <Image src={place.src} width={country.slidesPerView === 4 ? 171 : 232} height={130} key={place.key} className="h-[130px] rounded-[4px] mb-[6px]"/>
                                                                </div>
                                                                <span href="/" className="text-[#333333] font-[manrope] text-[16.7px] tracking-[0.1]">{place.label}</span>
                                                                </Link>
                                                            </SwiperSlide>
                                                        )
                                                    })
                                            }
                                            </Swiper>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-span-4 pl-4">
                        <h1 className="w-full text-black text-[21.7px] font-[manrope] font-bold tracking-[0px]">Recent Articles</h1>
                        {
                            recentArtical.map((artical)=>{
                                return (
                                    <div className="flex gap-2" key={artical.key}>
                                        <Image 
                                            src={artical.src} 
                                            width={151} height={110} 
                                            className="rounded-[4px] mt-[10px]"
                                        />
                                        <a href={artical.href} className="mt-[10px] text-gray-900 text-[15.3px] font-[manrope] tracking-[0.4px] leading-[25px] hover:underline">
                                            {artical.label}
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore