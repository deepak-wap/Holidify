import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import Structure from "../shared/layout";
import { Button, Card, Menu, Input, DatePicker } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";

const HotelsPlaces = () => {
  const countries = [
    {
      key: 1,
      label: "South Asia",
      category: "Stay Collections Near You",
      slidesPerView: 4,
      places: [
        {
          key: "maldives",
          label: "Maldives",
          src: "/images/UDAIPUR.jpg",
          rating: 4.5,
        },
        {
          key: "india",
          label: "India",
          src: "/images/JAIPUR.jpg",
          rating: 4.5,
        },
        {
          key: "sri-lanka",
          label: "Sri Lanka",
          src: "/images/BIR.jpg",
          rating: 4.3,
        },
        {
          key: "bhutan",
          label: "Bhutan",
          src: "/images/CHIANG-MAI.jpg",
          rating: 4.5,
        },
        {
          key: "udaipur1",
          label: "Udaipur",
          src: "/images/UDAIPUR.jpg",
          rating: 4.5,
        },
        {
          key: "jaipur1",
          label: "Jaipur",
          src: "/images/JAIPUR.jpg",
          rating: 4.3,
        },
        {
          key: "bir1",
          label: "Bir",
          src: "/images/BIR.jpg",
          rating: 4.5,
        },
        {
          key: "chiang-mai1",
          label: "Chiang Mai",
          src: "/images/CHIANG-MAI.jpg",
          rating: 4.5,
        },
      ],
      menu: false,
      rating: true,
    },
    {
      key: 2,
      label: "West Asia",
      category: "Top Beach Destinations",
      slidesPerView: 4,
      places: [
        {
          key: "udaipur",
          label: "Udaipur",
          src: "/images/UDAIPUR.jpg",
          rating: 4.0,
        },
        {
          key: "jaipur",
          label: "Jaipur",
          src: "/images/JAIPUR.jpg",
          rating: 4.0,
        },
        {
          key: "bir",
          label: "Bir",
          src: "/images/BIR.jpg",
          rating: 4.5,
        },
        {
          key: "chiang-mai",
          label: "Chiang Mai",
          src: "/images/CHIANG-MAI.jpg",
          rating: 4.5,
        },
      ],
      menu: false,
      rating: false,
    },
    {
      key: 3,
      label: "South-East Asia",
      category: "Top Destinations for Honeymoon",
      slidesPerView: 4,
      places: [
        {
          key: "udaipur",
          label: "Udaipur",
          src: "/images/UDAIPUR.jpg",
        },
        {
          key: "jaipur",
          label: "Jaipur",
          src: "/images/JAIPUR.jpg",
        },
        {
          key: "bir",
          label: "Bir",
          src: "/images/BIR.jpg",
        },
        {
          key: "chiang-mai",
          label: "Chiang Mai",
          src: "/images/CHIANG-MAI.jpg",
        },
      ],
      menu: false,
      rating: false,
    },
    {
      key: 4,
      label: "Top Hill Stations",
      category: "Top places for international vacation by months",
      slidesPerView: 4,
      places: [
        {
          key: "udaipur",
          label: "Udaipur",
          src: "/images/UDAIPUR.jpg",
        },
        {
          key: "jaipur",
          label: "Jaipur",
          src: "/images/JAIPUR.jpg",
        },
        {
          key: "bir",
          label: "Bir",
          src: "/images/BIR.jpg",
        },
        {
          key: "chiang-mai",
          label: "Chiang Mai",
          src: "/images/CHIANG-MAI.jpg",
        },
      ],
      menu: false,
      rating: false,
    },
    {
      key: 5,
      label: "Africa",
      category: "Stay Collections in top states",
      slidesPerView: 4,
      places: [
        {
          key: "udaipur",
          label: "Udaipur",
          src: "/images/UDAIPUR.jpg",
        },
        {
          key: "jaipur",
          label: "Jaipur",
          src: "/images/JAIPUR.jpg",
        },
        {
          key: "bir",
          label: "Bir",
          src: "/images/BIR.jpg",
        },
        {
          key: "chiang-mai",
          label: "Chiang Mai",
          src: "/images/CHIANG-MAI.jpg",
        },
      ],
      menu: false,
      rating: true,
    },
    {
      key: 6,
      label: "Africa",
      category: "Stay Collections in top countries",
      slidesPerView: 4,
      places: [
        {
          key: "udaipur",
          label: "Udaipur",
          src: "/images/UDAIPUR.jpg",
        },
        {
          key: "jaipur",
          label: "Jaipur",
          src: "/images/JAIPUR.jpg",
        },
        {
          key: "bir",
          label: "Bir",
          src: "/images/BIR.jpg",
        },
        {
          key: "chiang-mai",
          label: "Chiang Mai",
          src: "/images/CHIANG-MAI.jpg",
        },
      ],
      menu: false,
      rating: true,
    },
  ];

  return (
    <>
      <Structure title="hotels-places">
        <div className="mt-5 px-[8.8%]">
          <h1 className="text-[25px]  font-[manrope] tracking-[0.3px] font-bold mb-2">
            Hotels & places to stay
          </h1>
          <p className="text-[16.5px] text-[#212529] font-[manrope] tracking-[0.6px] mb-4">
            Top stay options curated by Holidify for your travel needs
          </p>
          <Card className="shadow-lg pt-4 pb-11">
            <Input
              prefix={<SearchOutlined className="text-[#020202] text-[20px]" />}
              placeholder="Enter City Name"
              className="ml-[-7px] w-[697px] py-[17px] text-[#495057] text-[17px] font-[manrope] mb-4"
            />
            <div className="flex gap-9">
              <div className="ml-[-7px] pl-[3px] w-[198px] h-[48px] bg-[#4F9CD8]  rounded-[5px] shadow-lg shadaw-[red] shadow-inner overflow-hidden">
                <div className="w-[195px] h-[48px] rounded-[4px] bg-white">
                  <DatePicker className="check-in border-0" placeholder="Check In" />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="ml-[-7px] pl-[3px] w-[198px] h-[48px] bg-[#FF433E] rounded-[5px] shadow-lg shadow-inner overflow-hidden">
                  <div className="w-[195px] h-[48px] rounded-[4px] bg-white">
                    <DatePicker className="check-out border-0" placeholder="Check Out" />
                  </div>
                </div>
                <div className="relative flex gap-2">
                  <Image src={"/images/user.png"} 
                    width={20} 
                    height={22} 
                    className="absolute h-[22px] top-[13px] left-[8px]"
                  />
                  <select
                    name="qty"
                    className="pl-10 outline-none text-[#495057] font-[manrope] font-medium tracking-[0.5px] text-[16px] w-[205px] h-[49px] rounded-[5px] shadow-lg shadow-inner"
                  >
                    <option value="1">1 Adult</option>
                    <option value="1">2 Adult</option>
                    <option value="1">3 Adult</option>
                    <option value="1">4 Adult</option>
                    <option value="1">5 Adult</option>
                    <option value="1">6 Adult</option>
                    <option value="1">7 Adult</option>
                    <option value="1">8 Adult</option>
                    <option value="1">9 Adult</option>
                    <option value="1">10 Adult</option>
                    <option value="1">11 Adult</option>
                    <option value="1">12 Adult</option>
                    <option value="1">13 Adult</option>
                    <option value="1">14 Adult</option>
                    <option value="1">15 Adult</option>
                    <option value="1">16 Adult</option>
                    <option value="1">17 Adult</option>
                    <option value="1">18 Adult</option>
                    <option value="1">19 Adult</option>
                    <option value="1">20 Adult</option>
                    <option value="1">21 Adult</option>
                    <option value="1">22 Adult</option>
                    <option value="1">23 Adult</option>
                    <option value="1">24 Adult</option>
                    <option value="1">25 Adult</option>
                    <option value="1">26 Adult</option>
                    <option value="1">27 Adult</option>
                    <option value="1">28 Adult</option>
                    <option value="1">29 Adult</option>
                    <option value="1">30 Adult</option>
                  </select>
                  <Button className="px-4 h-[54px] font-[manrope] text-[16px] text-white bg-gradient-to-r from-[#ff433a] to-[#ff577c] tracking-[0.3px] font-bold">
                    Search For Your Dates
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="pl-[8.9%] pr-[8.9%]">
          <div className="grid grid-cols-1 mt-[46px]">
            <div>
              {countries.map((country) => {
                return (
                  <div>
                    {" "}
                    {/*repeat*/}
                    <div className="mb-4 pr-4">
                      <div className="mb-[-10px]">
                        <h1
                          className={`${
                            country.menu
                              ? "border-b border-gray-300 pb-[7px]"
                              : ""
                          } w-full text-[#333333] text-[21px] font-[manrope] font-bold tracking-[0.3px]`}
                        >
                          {country.category}
                        </h1>
                      </div>
                      <div
                        className={`${
                          country.menu ? "" : "hidden"
                        } border-b border-gray-300 pt-[18px] pb-[23px]`}
                      >
                        <div className="flex gap-6">
                          {countries.map((country) => {
                            return (
                              <span
                                className={`text-[16.5px] text-[#333] font-mono border-[#3D81BB] tracking-[0.5px] underline-offset-[24px] decoration-[6px] ${
                                  country.key === 1
                                    ? "text-[#3d81bb] font-bold underline"
                                    : "hover:text-[#3d81bb] hover:underline"
                                }`}
                              >
                                {country.label}
                              </span>
                            );
                          })}
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
                        {countries[0].places.map((place) => {
                          return (
                            <SwiperSlide>
                              <Link href={"/"} className="hover:underline">
                                <div className="relative">
                                  <div
                                    className={`${
                                      place.rating ? "" : "hidden"
                                    } absolute right-[10px] text-[14px] text-white font-[manrope] font-bold bg-[#247C2A] flex items-center px-[10px] py-1 rounded-[4px]`}
                                  >
                                    {place.rating}
                                  </div>
                                  <Image
                                    src={place.src}
                                    width={268}
                                    height={130}
                                    key={place.key}
                                    className="h-[130px] rounded-[4px] mb-[6px]"
                                  />
                                </div>
                                <span
                                  href="/"
                                  className="text-[#333333] font-[manrope] text-[16.7px] tracking-[0.1]"
                                >
                                  {place.label}
                                </span>
                              </Link>
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Structure>
    </>
  );
};

export default HotelsPlaces;
