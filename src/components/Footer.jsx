import React from 'react'
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='md:px-16 px-4 py-6 md:py-5 border-t-2 border-gray-300 bg-primary'>
            <div className='flex flex-col md:items-start md:flex-row md:justify-between pt-2 gap-4 pb-6'>
                <div className=' items-center flex justify-between md:w-[50%] '>
                    <div className="flex items-center gap-2">
                        <img src={Logo} alt="logo" className="w-8 object-cover" />
                        <Link to={"/"} className="text-xl font-bold text-cartNumBg">
                            VBzaar
                        </Link>
                    </div>
                    <div className='md:mt-1 my-auto'>
                        <p className='text-headingColor hidden md:block font-semibold '>Join Our Social Community </p>
                        <div className='flex gap-3 md:mt-2 text-textColor'>
                            <FaInstagram className='cursor-pointer p-1 text-3xl rounded-sm' />
                            <FaTwitter className='cursor-pointer p-1 text-3xl rounded-sm' />
                            <FaLinkedin className='cursor-pointer p-1 text-3xl rounded-sm' />
                            <FaFacebook className='cursor-pointer p-1 text-3xl rounded-sm' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between gap-12 text-textColor'>
                    <div className='flex flex-col gap-1'>
                        <p>Home</p>
                        <p>Top Products</p>
                        <p>Delivery Areas</p>
                        <p>Contact Support</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                        <p>Responsinble Disclosure</p>
                        <p>Our Blogs</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <p className='text-center border-t-2 text-black font-semibold border-gray-200 pt-2 md:pt-5 w-full md:w-[80%]'>😃 Designed by <span className=' text-cartNumBg'>Rajesh</span> 😃</p>
            </div>
        </footer>
    )
}

export default Footer