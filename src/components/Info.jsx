import React from 'react'

const Info = () => {
    return (
        <>
            <div className='mt-4 w-full py-3'>
                <div className='text-[1.4rem] mb-3 font-semibold text-left md:text-center '>
                    How it <span className=' text-cartNumBg'>Works..?</span>
                </div>
                <div className='flex w-full flex-wrap gap-5 justify-center py-4'>
                    <div className='w-full md:max-w-[23rem] border rounded-lg shadow-md'>
                        <div className='flex justify-center gap-3 md:gap-0 items-center p-4 px-6 md:flex-col rounded-lg'>
                            <div>
                                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.19.2/images/pdp/place-order.svg" alt="work" />
                            </div>
                            <div className='md:text-center'>
                                <p className='font-medium py-2'>Place an order</p>
                                <p className='text-textColor'>Choose from a wide range of daily essentials</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:max-w-[23rem] border rounded-lg shadow-md'>
                        <div className='flex justify-center gap-3 md:gap-0 items-center p-4 px-6 md:flex-col rounded-lg'>
                            <div>
                                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.19.2/images/pdp/do-not-blink.svg" alt="work" />
                            </div>
                            <div className='md:text-center'>
                                <p className='font-medium py-2'>Don't Blink</p>
                                <p className='text-textColor'>Our delivery partner will be at your door</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:max-w-[23rem] border rounded-lg shadow-md '>
                        <div className='flex justify-center gap-3 md:gap-0 items-center p-4 px-6 md:flex-col rounded-lg'>
                            <div>
                                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.19.2/images/pdp/enjoy.svg" alt="work" />
                            </div>
                            <div className='md:text-center'>
                                <p className='font-medium py-2'>Enjoy</p>
                                <p className='text-textColor'>Boom! You’ll never have to wait for groceries again</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info