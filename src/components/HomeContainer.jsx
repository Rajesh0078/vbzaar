import React from 'react'
import Delivery from "../assets/delivery.png"
import HeroBg from "../assets/heroBg.png"
import { homeData } from '../utils/data'

const HomeContainer = () => {
    return (
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 pb-4 mt-3'>
            <div className=" flex flex-col items-start justify-center py-2 gap-2">
                <div className='flex items-center gap-2 bg-orange-100 px-2 py-1 rounded-full '>
                    <span className='text-base font-semibold text-orange-500'>Bike Delivery</span>
                    <div className='w-8 h-8 overflow-hidden bg-white rounded-full shadow-2xl'>
                        <img src={Delivery} alt="delivery" className='w-full object-contain' />
                    </div>
                </div>
                <p className='text-[2.5rem] lg:text-[4.15rem] tracking-wide font-bold  '>The Fastest Delivery in <span className='text-orange-600 '>Your City</span></p>
                <p className='text-base text-textColor text-center md:text-left md:w-[80%] '>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt aspernatur quod incidunt doloremque, ab qui, ratione illum, omnis
                    inventore saepe sit? Provident mollitia molestias incidunt rem ipsam debitis autem illum?
                </p>
                <button type='button' className='shadow-xl bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto py-2 px-4 my-2 font-medium rounded-xl'>Order Now</button>
            </div>
            <div className="relative ">
                <div className='md:h-[35.5rem] h-[26rem] ml-auto w-full'>
                    <img src={HeroBg} alt="Hero" className='h-full w-full lg:w-auto ml-auto' />
                </div>
                <div className='absolute w-full top-10 md:w-auto  md:top-[10%] lg:left-[29%] justify-center lg:justify-normal flex gap-5 flex-wrap drop-shadow-lg  '>
                    {homeData.map((i) => {
                        return <div key={i.id} className=' lg:w-190 w-[10rem] card bg-cardOverlay backdrop-blur-md rounded-md p-4 text-center mt-8 mb-6'>
                            <img src={i.img} alt="ice-cream" className='-mt-20' />
                            <p className='text-base text-textcolor font-semibold'>{i.name}</p>
                            <p className='text-gray-600 text-sm'>{i.desc}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomeContainer