import Structure from "../shared/layout";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Card, Menu } from 'antd'
import { DownOutlined } from "@ant-design/icons";
import Hero from "./hero";
import Explore from "./explore";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";


const Home = ()=>{
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
        <Structure>            
            <Hero />
            <Explore />
        </Structure>
    )
}

export default Home