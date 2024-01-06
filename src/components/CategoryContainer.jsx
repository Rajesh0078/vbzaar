import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules"
import Ice from "../assets/i1.png"
import Berry from '../assets/berry.png'
import Veg from '../assets/veg.png'
import Drinks from '../assets/drinks.png'
import Chocolate from '../assets/chocolate.png'
import 'swiper/css';
import 'swiper/css/navigation';
import CU3 from "../assets/cu3.png"
import { NavLink } from 'react-router-dom';

const CategoryContainer = () => {
    return (
        <div className='w-full category flex flex-col justify-start  my-3'>
            <p className='text-2xl font-medium text-textColor pb-[6rem] md:text-center'>Our Top <span className='text-2xl text-cartNumBg font-semibold'>Categories</span></p>
            <Swiper className='w-full h-[10rem] mySwiper'
                slidesPerView={2}
                spaceBetween={25}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
            >
                <SwiperSlide className='shadow-md rounded-lg h-[10rem] drop-shadow-lg'>
                    <NavLink to={'/categories/ice-creams'}>
                        <div whileTap={{ scale: 0.96 }} className='flex flex-col gap-1 backdrop-blur-md bg-cardOverlay h-full rounded-lg'>
                            <div className='sm:w-36 w-28'>
                                <img src={Ice} alt="" className='-mt-14 -ms-2 -rotate-[12deg] image' loading='lazy' />
                            </div>
                            <div className=' text-right px-4 pt-3 sm:pt-0'>
                                <p className='text-xl font-semibold text-gray-800'>Ice Cream</p>
                                <p className='text-sm text-gray-600'>Chocolate & Vanilla</p>
                            </div>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide className='border h-[10rem] shadow-md rounded-lg  drop-shadow-lg'>
                    <NavLink to={'/categories/fruits'}>
                        <div whileTap={{ scale: 0.96 }} className='flex flex-col gap-1 backdrop-blur-md bg-cardOverlay h-full rounded-lg'>
                            <div className='sm:w-48 w-40'>
                                <img src={Berry} alt="fruits" className='-mt-[3.5rem] -ms-6 rotate-[20deg]' loading='lazy' />
                            </div>
                            <div className=' text-right px-4 md:pt-0 pt-5'>
                                <p className='text-xl font-semibold text-gray-800'>Fruits</p>
                                <p className='text-sm text-gray-600'>Fresh & Healthy</p>
                            </div>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide className='border h-[10rem] shadow-md rounded-lg  drop-shadow-lg'>
                    <NavLink to={'/categories/chocolates'}>
                        <div whileTap={{ scale: 0.96 }} className='flex justify-end relative flex-col gap-1 backdrop-blur-md bg-cardOverlay h-full rounded-lg'>
                            <div className='absolute w-[7rem] sm:w-[8.5rem] -top-[55%]'>
                                <img src={Chocolate} alt="chocolate" className=' h-full -ms-6 -rotate-[37deg] ' loading='lazy' />
                            </div>
                            <div className=' text-right px-4 pb-5'>
                                <p className='text-xl font-semibold text-gray-800'>Chocolates</p>
                                <p className='text-sm text-gray-600'>Sweet & Yummy</p>
                            </div>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide className='border h-[10rem] shadow-md rounded-lg drop-shadow-lg'>
                    <NavLink to={'/categories/vegetables'}>
                        <div whileTap={{ scale: 0.96 }} className='flex flex-col gap-1 backdrop-blur-md bg-cardOverlay h-full rounded-lg'>
                            <div className='w-[10.5rem] sm:w-48'>
                                <img src={Veg} alt="fruits" className='sm:-mt-[3.8rem] -mt-[3.1rem] -ms-6 -rotate-[16deg]' loading='lazy' />
                            </div>
                            <div className=' text-right px-4 pt-9 md:pt-4'>
                                <p className='text-xl font-semibold text-gray-800'>Vegetables</p>
                                <p className='text-sm text-gray-600'>Delicious & Tasty</p>
                            </div>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide className='border h-[10rem] shadow-md rounded-lg drop-shadow-lg'>
                    <NavLink to={'/categories/curries'}>
                        <div whileTap={{ scale: 0.96 }} className='flex flex-col gap-1 backdrop-blur-md bg-cardOverlay h-full rounded-lg'>
                            <div className=' w-32'>
                                <img src={CU3} alt="fruits" className='-mt-[2.7rem] -ms-2 -rotate-[16deg]' loading='lazy' />
                            </div>
                            <div className=' text-right px-4 '>
                                <p className='text-xl font-semibold text-gray-800'>Curries</p>
                                <p className='text-sm text-gray-600'>Delicious & Tasty</p>
                            </div>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide className='border h-[10rem] shadow-md rounded-lg drop-shadow-lg'>
                    <NavLink to={'/categories/drinks'}>
                        <div whileTap={{ scale: 0.96 }} className='flex flex-col gap-1 backdrop-blur-md bg-cardOverlay h-full rounded-lg'>
                            <div className=' w-32'>
                                <img src={Drinks} alt="fruits" className='-mt-[4.3rem]  -ms-6 rotate-[5deg]' loading='lazy' />
                            </div>
                            <div className=' text-right px-4'>
                                <p className='text-xl font-semibold text-gray-800'>Drinks</p>
                                <p className='text-sm text-gray-600'>Soft & Cool</p>
                            </div>
                        </div>
                    </NavLink>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CategoryContainer