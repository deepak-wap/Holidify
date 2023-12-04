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
import {
  Button,
  Card,
  Menu,
  Input,
  DatePicker,
  Checkbox,
  Breadcrumb,
} from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";

const Hotels = () => {
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
      <Structure title="hotels">
        <div className="grid grid-cols-12 px-[8.8%] py-8">
          <div className="col-span-3">
            <Card className="p-0 m-0 shadow-md w-[263px]">
              <div className="w-full ml-[-9px] mt-[-2px]">
                <div className="w-full flex justify-between mb-[18px]">
                  <span className="text-[#212529] text-[16px] font-[manrope] font-bold tracking-[0.3px]">
                    Filter By
                  </span>
                  <span className="text-[#949494] text-[16.45px] font-[manrope] tracking-[0.3px] mr-[-24px] mt-[-1px] hover:underline cursor-pointer">
                    Reset All
                  </span>
                </div>

                <div className="main pl-2 ml-[-9px]">
                  <div className="mb-7">
                    {" "}
                    {/* repeat */}
                    <div className="mb-4">
                      <h2 className="text-[#212529] text-[16.3px] font-[manrope] font-bold tracking-[0.3px]">
                        Popular Filters
                      </h2>
                    </div>
                    <div className="flex gap-2 mb-2">
                      {" "}
                      {/* repeat */}
                      <Checkbox
                        defaultChecked={true}
                        className="text-[#212529]"
                      />
                      <div className="w-full flex justify-between">
                        <span className="text-[#212529] text-[14.6px] font-[manrope]">
                          Breakfast Included
                        </span>
                        <span className="text-[#949494] text-[14.6px] font-[manrope] mr-[-19px]">
                          363
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-span-8">
            <div className="px-2">
              <div className="absolute h-[355px] w-[825px] bg-black bg-opacity-[0.5] hover:bg-opacity-[0.6] rounded-[4px] z-20"></div>
              <div className="h-[355px] w-[825px] rounded-[5px] overflow-hidden relative mb-10">
                <Image
                  src={"/images/package-1.jpg"}
                  width={720}
                  height={480}
                  className="w-full h-[437px]"
                />
                <Breadcrumb
                  items={[
                    {
                      title: (
                        <a href="/" className="text-white">
                          Home
                        </a>
                      ),
                    },
                    {
                      title: <a href="/">Goa Hotels</a>,
                    },
                  ]}
                  className="absolute text-[13px] top-[16px] left-[16px] tracking-[0.4px] z-20"
                />
                <div className="top-[130px] px-[20px] z-20 absolute w-fit flex flex-col">
                  <h1 className="text-[24.6px] text-white font-[manrope] tracking-[0.3px] font-bold mt-[-12px] mb-4">
                    50 Hotels In Goa
                  </h1>
                  <p className="text-[16px] text-white font-[manrope] font-bold tracking-[0.4px] mb-4">
                    Search Availability of For Your Dates
                  </p>
                  <div className="w-[775px] flex justify-center gap-2 mb-5">
                    <div className="ml-[-7px] pl-[3px] w-[198px] h-[48px] bg-[#4F9CD8]  rounded-[5px] shadow-lg shadaw-[red] shadow-inner overflow-hidden">
                      <div className="w-[195px] h-[48px] rounded-[4px] bg-white">
                        <DatePicker
                          className="check-in border-0"
                          placeholder="Check In"
                        />
                      </div>
                    </div>
                    <div className="pl-[3px] w-[198px] h-[48px] bg-[#FF433E] rounded-[5px] shadow-lg shadow-inner overflow-hidden">
                      <div className="w-[195px] h-[48px] rounded-[4px] bg-white">
                        <DatePicker
                          className="check-out border-0"
                          placeholder="Check Out"
                        />
                      </div>
                    </div>
                    <div className="relative flex gap-2">
                      <Image
                        src={"/images/user.png"}
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
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button className="w-[400px] h-[54px] font-[manrope] text-[16px] text-white bg-gradient-to-r from-[#ff433a] to-[#ff577c] tracking-[0.3px] font-bold">
                      Search For Your Dates
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-[825px] mb-9">
                <h1 className="text-[#212529] text-[16.3px] font-[manrope] font-bold tracking-[0.3px] mb-3">
                  Guide for booking hotels in Goa:
                </h1>
                <p className="texxt-[#212529] text-[14.6px] text-justify font-[manrope]">
                  Goa’s rich Portuguese heritage and magnificent coastline have
                  given this scenic destination a landscape that offers its
                  guests plenty of options for picking the best hotels in Goa.
                  Explore the serene beaches and watch stunning sunsets from the
                  comfort of your room at the offbeat beach-side cottages and
                  hotels in <b>South Goa.</b> <br /> <br />
                  Parties are unmatched at the many spots near <b>
                    Baga
                  </b> and <b>Anjuna Beach</b>, with some of the best resorts
                  just a hop, skip and jump away. If you’re a person hunting for
                  culture and heritage, Panjim is the place to explore. Check
                  out the hotels in <b>Old Goa</b> or <b>Fontainhas</b>, a
                  neighbourhood frozen in time with endless shopping
                  opportunities. If you are planning a family vacation, pick
                  exotic Portuguese-style villas to great homestays, all without
                  burning a hole in your pocket in the stunning beach getaway of
                  Goa.
                  <br />
                  <br /> When travelling for work, the <b>Vasco</b> near the
                  airport is the right pick. It has several stay options,
                  including luxury hotels, budget hotels and homestays. The
                  hotels are easily accessible and the neighbourhood has
                  frequent buses operating from Panjim to the airport.
                </p>
              </div>
              <div className="w-[825px]">
                <h1 className="text-[#212529] text-[16.3px] font-[manrope] font-bold tracking-[0.3px] mb-3">
                  Top hotels in Goa by theme
                </h1>
                <div className="col-span-8 flex gap-10 mb-5">
                  {[
                    "Resorts",
                    "Beach Resorts",
                    "5-star Hotels",
                    "Villas",
                    "Best Hotels",
                    "Near Beaches",
                  ].map((name) => {
                    return (
                      <div className="flex flex-col items-start">
                        <a
                          href="/"
                          className="flex flex-col items-center hover:underline"
                        >
                          <div className="w-[65px] h-[65px] rounded-[50%] overflow-hidden mb-1">
                            <Image
                              src={"/images/package-1.jpg"}
                              width={65}
                              height={65}
                              className="w-[65px] h-[65px] rounded-[50%]"
                            />
                          </div>
                          <p className="px-[6px] text-[#333333] text-[14.3px] font-[manrope]">
                            {name}
                          </p>
                        </a>
                      </div>
                    );
                  })}
                </div>
                <div className="w-full grid grid-cols-2 items-center">
                  <h1 className="text-[#212529] text-[16.3px] font-[manrope] font-bold tracking-[0.3px]">
                    Showing all Hotels in Goa
                  </h1>
                  <div className="flex items-center ml-[90px]">
                    <i class="bx bx-sort-alt-2 text-[28px]"></i>
                    <h1 className="text-[#212529] text-[16.3px] font-[manrope] font-bold tracking-[0.3px] mr-2">
                      Sort By:
                    </h1>
                    <select
                      name="qty"
                      className="outline-none border border-[1px] border-[#212529] text-[#000000] font-[manrope] font-medium tracking-[0.5px] text-[16px] w-[219px] h-[49px] rounded-[4px] shadow-lg shadow-inner"
                    >
                      <option value="1">Popularity</option>
                      <option value="1">Lowset Price First</option>
                      <option value="1">Highest Price First</option>
                      <option value="1">Review Score</option>
                      <option value="1">Distance From City Centre</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  <DatePicker
                    className="check-in border-0"
                    placeholder="Check In"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="ml-[-7px] pl-[3px] w-[198px] h-[48px] bg-[#4F9CD8] rounded-[5px] shadow-lg shadow-inner overflow-hidden">
                  <div className="w-[195px] h-[48px] rounded-[4px] bg-white">
                    <DatePicker
                      className="check-out border-0"
                      placeholder="Check Out"
                    />
                  </div>
                </div>
                <div className="relative flex gap-2">
                  <Image
                    src={"/images/user.png"}
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

export default Hotels;
