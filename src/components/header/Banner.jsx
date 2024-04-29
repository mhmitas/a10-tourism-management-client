import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import BannerTypeWriter from '../typeWriter/TypeWriter';


const Banner = () => {
    return (
        <>
            <div className='rounded-xl relative' >
                <Swiper
                    className='h-96 md:h-[600px]'
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                >
                    <SwiperSlide
                        className='bg-cover bg-no-repeat bg-bottom'
                        style={{ backgroundImage: 'url(https://i.ibb.co/0VSWsqt/earth.jpg)' }}
                    ></SwiperSlide>
                    <SwiperSlide
                        className='bg-cover bg-no-repeat bg-center'
                        style={{ backgroundImage: 'url(https://i.ibb.co/zR6kD88/ha-long.jpg)' }}
                    ></SwiperSlide>
                    <SwiperSlide
                        className='bg-cover bg-no-repeat bg-center'
                        style={{ backgroundImage: 'url(https://i.ibb.co/YX751Ds/boats.jpg)' }}
                    ></SwiperSlide>
                </Swiper>
                <div className='text-2xl md:text-3xl p-3 md:p-8 lg:text-5xl text-slate-100 md:w-2/3 absolute bottom-5 left-5 z-10 shadow-2xl bg-slate-900 rounded-sm bg-opacity-20 mr-3 font-bold'
                >
                    RedKnot: Your travel community, wherever you roam. <br />
                    <span className='inline-block'><BannerTypeWriter></BannerTypeWriter></span>
                </div>
            </div>
        </>
    );
};

export default Banner;

// https://i.ibb.co/zR6kD88/ha-long.jpg