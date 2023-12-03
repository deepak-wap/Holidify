import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Button, Card, Menu } from 'antd'
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
          category: 'Trending Holiday Packages This Season',
          slidesPerView: 4,
          places: [
            {
                key: 'maldives',
                label: 'Maldives',
                src: '/images/UDAIPUR.jpg',
                rating: 4.5,
            },
            {
                key: 'india',
                label: 'India',
                src: '/images/JAIPUR.jpg',
                rating: 4.5,
            },
            {
                key: 'sri-lanka',
                label: 'Sri Lanka',
                src: '/images/BIR.jpg',
                rating: 4.3,
            },
            {
                key: 'bhutan',
                label: 'Bhutan',
                src: '/images/CHIANG-MAI.jpg',
                rating: 4.5,
            },
            {
                key: 'udaipur1',
                label: 'Udaipur',
                src: '/images/UDAIPUR.jpg',
                rating: 4.5,
            },
            {
                key: 'jaipur1',
                label: 'Jaipur',
                src: '/images/JAIPUR.jpg',
                rating: 4.3,
            },
            {
                key: 'bir1',
                label: 'Bir',
                src: '/images/BIR.jpg',
                rating: 4.5,
            },
            {
                key: 'chiang-mai1',
                label: 'Chiang Mai',
                src: '/images/CHIANG-MAI.jpg',
                rating: 4.5,
            },
          ],
          menu: false,
          rating: true,
        },
        {
          key: 2,
          label: 'West Asia',
          category: 'Top States in India for Tour Packages',
          slidesPerView: 4,
          places: [
            {
                key: 'udaipur',
                label: 'Udaipur',
                src: '/images/UDAIPUR.jpg',
                rating: 4.0,
            },
            {
                key: 'jaipur',
                label: 'Jaipur',
                src: '/images/JAIPUR.jpg',
                rating: 4.0,
            },
            {
                key: 'bir',
                label: 'Bir',
                src: '/images/BIR.jpg',
                rating: 4.5,
            },
            {
                key: 'chiang-mai',
                label: 'Chiang Mai',
                src: '/images/CHIANG-MAI.jpg',
                rating: 4.5,
            },
          ],
          menu: false,
          rating: false,
        },
        {
          key: 3,
          label: 'South-East Asia',
          category: 'Top places in India by months',
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
                src: '/images/CHIANG-MAI.jpg',
            },
          ],
          menu: true,
          rating: false,
        },
        {
          key: 4,
          label: 'Others',
          category: 'Top places for international vacation by months',
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
          menu: true,
          rating: false,
        },
        {
          key: 5,
          label: 'Africa',
          category: 'Top places by duration',
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
          menu: true,
          rating: true,
        },
        {
            key: 6,
            label: 'Africa',
            category: 'Top International Places For Honeymoon Packages',
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
          rating: true,
        },
        {
            key: 7,
            label: 'Africa',
            category: 'Top States in India For Honeymoon Packages',
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

    return (
        <>
            <div className="pl-[8.9%] pr-[8.9%]">
                <div className="grid grid-cols-1 mt-[46px]">
                    <div>
                        {
                            countries.map((country)=>{
                                return (
                                    <div> {/*repeat*/}
                                        <div className="mb-4 pr-4">
                                            <div className="mb-[-10px]">
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
                                                                    <div className={`${place.rating ? '' : 'hidden'} absolute right-[10px] text-[14px] text-white font-[manrope] font-bold bg-[#247C2A] flex items-center px-[10px] py-1 rounded-[4px]`}>
                                                                        {place.rating}
                                                                    </div>
                                                                    <Image src={place.src} width={268} height={130} key={place.key} className="h-[130px] rounded-[4px] mb-[6px]"/>
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
                    <div className="py-16">
                        <div className="bg-gradient-to-r from-[#191925] to-[#3B3A49] w-full rounded-[4px] px-4 pt-7 pb-12">
                            <div className="px-2">
                                <h1 className="text-white text-[21px] font-[manrope] font-bold tracking-[0.3px] mb-1">
                                    Not sure which package to pick for ?
                                </h1>
                                <p className="text-white text-[14.5px] font-[manrope] tracking-[0.23px] mb-4">
                                    Talk to our trip experts now to get the best deal
                                </p>
                            </div>
                            <form className="bg-white w-full rounded-[4px] h-[143px] flex items-center px-4 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="font-[manrope] outline-none border border-[0.5px] rounded-[4px] w-[253px] py-[10px] px-4  text-[14.6px] tracking-[0.3px] placeholder:text-slate-700 font-bold"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="font-[manrope] outline-none border border-[0.5px] rounded-[4px] w-[253px] py-[10px] px-4  text-[14.6px] tracking-[0.3px] placeholder:text-slate-700 font-bold"
                                />
                                <input
                                    type="text"
                                    name="mobile"
                                    className="font-[manrope] outline-none border border-[0.5px] rounded-[4px] w-[253px] py-[10px] px-4  text-[14.6px] tracking-[0.3px] placeholder:text-slate-700 font-bold"
                                    placeholder="Mobile"
                                />
                                <Button
                                    className="px-5 h-[45px] font-[manrope] text-[14.6px] text-white bg-gradient-to-r from-[#ff433a] to-[#ff577c] tracking-[0.3px] font-bold"
                                >
                                    Get Callback
                                </Button>
                            </form>
                        </div>
                    </div>
                    <div>
                        {
                            countries.map((country)=>{
                                return (
                                    <div> {/*repeat*/}
                                        <div className="mb-4 pr-4">
                                            <div className="mb-[-10px]">
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
                                                                    <div className={`${place.rating ? '' : 'hidden'} absolute right-[10px] text-[14px] text-white font-[manrope] font-bold bg-[#247C2A] flex items-center px-[10px] py-1 rounded-[4px]`}>
                                                                        {place.rating}
                                                                    </div>
                                                                    <Image src={place.src} width={268} height={130} key={place.key} className="h-[130px] rounded-[4px] mb-[6px]"/>
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
                    <div className="mt-[-36px]">
                        <h1 className="text-[21px] text-[#333333] font-[manrope] font-bold tracking-[0.3px] mb-[6px]">
                            Book packages with Holidify
                        </h1>
                        <p className="text-[14.9px] text-[#212529] font-[manrope] mb-5">
                            Get the Best Deals on Tour Packages
                        </p>
                        <div className="flex items-center gap-2 mb-8">
                            {
                                [
                                    {src: '/images/customer-support.png',label: 'Verified Travel Agents'},
                                    {src: '/images/waypoint-map.png',label: 'Customised Itinerary'},
                                    {src: '/images/gift.png',label: 'Upto 3 Free Quotes'},
                                ].map((items)=>{
                                    return(
                                    <>
                                        <Card className="w-[265px] h-[115px] mb-5 shadow-md">
                                            <div className="flex gap-2">
                                                <Image src={items.src} 
                                                    width={55} 
                                                    height={55}
                                                    className="ml-[-10px]"
                                                />
                                                <span className="text-[16.7px] text-[#212529] font-[manrope] font-bold tracking-[0.3]">
                                                    {items.label}
                                                </span>
                                            </div>
                                        </Card>
                                    </>
                                    )
                                })
                            }
                            <Button
                                className="px-16 h-[90px] font-[manrope] text-[18px] text-white bg-gradient-to-r from-[#ff433a] to-[#ff577c] tracking-[0.3px] font-bold"
                            >
                                Get Callback
                            </Button>
                        </div>
                        <div>
                        {
                            countries.map((country)=>{
                                return (
                                    <div> {/*repeat*/}
                                        <div className="mb-4 pr-4">
                                            <div className="mb-[-10px]">
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
                                                                    <div className={`${place.rating ? '' : 'hidden'} absolute right-[10px] text-[14px] text-white font-[manrope] font-bold bg-[#247C2A] flex items-center px-[10px] py-1 rounded-[4px]`}>
                                                                        {place.rating}
                                                                    </div>
                                                                    <Image src={place.src} width={268} height={130} key={place.key} className="h-[130px] rounded-[4px] mb-[6px]"/>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore