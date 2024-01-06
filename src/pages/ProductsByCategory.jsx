import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdFilterAlt, MdMoveDown, MdOutlineSearch, MdShoppingBasket } from "react-icons/md"
import { getItems, updateCart } from '../utils/firebaseFunctions'
import Loader from "../components/Loader"
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { getCartData } from '../store/actions/userAction'

const ProductsByCategory = () => {
    const { pathname } = useLocation()
    const [data, setdata] = useState([])
    const [searchData, setSearchData] = useState([])
    const { user } = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()

    const fetchData = async () => {
        setdata([])
        await getItems(pathname.split('/')[2]).then((data) => {
            setdata(data)
        })
    }

    const searchHandler = (e) => {
        if (data.length) {
            const { value } = e.target
            if (value.length) {
                const filteredData = data.filter((i) => i.name.toLowerCase().includes(value.toLowerCase()))
                setSearchData(filteredData)
            } else {
                setSearchData([])
            }
        }
    }

    const cartAddHandler = (data) => {
        if (user) {
            updateCart(data, user.email, "add")
        } else {
            toast.warn('Please Login')
        }
        if (user) {
            dispatch(getCartData(user.email))
        }
    }

    useEffect(() => {
        document.title = `${pathname.split('/')[2]} - VBzaar`
        fetchData()
    }, [pathname])

    return (
        <div className='min-h-screen -mt-20 pt-[5.8rem] w-full md:pt-[5.5rem]'>
            <div className='w-full flex md:justify-between items-center'>
                <div className=' text-textColor text-md md:block hidden'>
                    <Link to={'/'}>Home</Link> &gt; categories &gt; {pathname.split('/')[2]}
                </div>
                <div className='flex w-full md:w-[38%] justify-center  items-center border rounded-full drop-shadow-md backdrop-blur-md bg-cardOverlay'>
                    <input type="text" className='w-full p-2 px-5 bg-transparent outline-none' name='search' id='search' placeholder={`Search here for ${pathname.split('/')[2]}`} onChange={searchHandler} autoComplete='off' />
                    <label htmlFor="search"><MdOutlineSearch className='text-3xl text-gray-700 me-2' /></label>
                </div>
            </div>
            <div className='w-full flex mt-4 items-center gap-1 md:hidden'>
                <span className='text-base font-semibold text-headingColor me-1'> Filters:</span>
                <div className='flex gap-1 overflow-x-auto overflow-y-hidden hx2 py-2 w-full'>
                    <select name="sort" id="sort" className='outline-none p-1 shadow bg-primary rounded-full border text-sm font-medium text-textColor'>
                        <option value="other">Sort</option>
                        <option value="lth">Low to High</option>
                        <option value="htl">High to Low</option>
                    </select>
                    <input type="checkbox" name="discount" id="discount" value={"discount"} className='w-0 h-0' onChange={(e) => console.log(e.target.value)} />
                    <label htmlFor="discount" className=' min-w-[7.5rem] text-center p-1 px-3 shadow bg-primary rounded-full border text-sm font-medium text-textColor'>10% discount</label>

                    <input type="checkbox" name="delivery" id="delivery" value={"free delivery"} className='w-0 h-0' onChange={(e) => console.log(e.target.value)} />
                    <label htmlFor="delivery" className='p-1 px-3 shadow min-w-[7.5rem] bg-primary rounded-full text-center border text-sm font-medium text-textColor '>Free Delivery</label>

                    <input type="checkbox" name="selling" id="selling" value={"selling"} className='w-0 h-0' onChange={(e) => console.log(e.target.value)} />
                    <label htmlFor="selling" className='p-1 px-3 shadow min-w-[7.5rem] bg-primary text-center rounded-full border text-sm font-medium text-textColor '>Top Selling</label>
                </div>

            </div>
            <div className='w-full mt-10 flex justify-center gap-8'>
                <div className='hidden md:block basis-1/4 lg:basis-1/5 shadow-sm drop-shadow-lg rounded-md bg-primary '>
                    <div>
                        <p className='text-xl font-semibold text-black border-b-2 p-3 flex justify-between'>Filters : <MdFilterAlt className='text-2xl text-cartNumBg' /></p>
                        <p className='text-md text-black font-medium w-full pt-3 px-3 pb-2 flex items-center '>Select Category <MdMoveDown className='inline ml-auto text-xl' /></p>
                        <div className='ms-4 text-textColor text-sm flex flex-col gap-2'>
                            <Link to={'/categories/chocolates'}  >Chocolates</Link>
                            <Link to={'/categories/fruits'}  >Fruits</Link>
                            <Link to={'/categories/vegetables'}  >Vegetables</Link>
                            <Link to={'/categories/ice-creams'} >Ice Creams</Link>
                            <Link to={'/categories/drinks'}  >Drinks</Link>
                        </div>
                    </div>
                    <div>
                        <p className='text-md text-black font-medium w-full pt-3 px-3 flex items-center '>Sort : <MdMoveDown className='inline ml-auto text-xl' /></p>
                        <div className='p-3 flex flex-col gap-1 text-sm text-textColor'>
                            <div className='flex gap-2'>
                                <input type="radio" name='sort' id='relavence' value={"relevance"} defaultChecked={true} />
                                <label htmlFor="relavence">Relavence</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" name='sort' id='lth' value={"lth"} />
                                <label htmlFor="lth">Low to High</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" name='sort' id='htl' value={"htl"} />
                                <label htmlFor="htl">High to Low</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-full md:w-auto md:basis-3/4 lg:basis-4/5'>
                    {
                        !searchData.length ? data && !data.length ? <Loader /> : <>
                            <div className="flex flex-wrap justify-between mt-5 ">
                                {
                                    data && data.map((item, index) => (
                                        <div key={index} className='border cardx mb-14 w-full bg-primary drop-shadow-lg rounded-lg backdrop-blur-lg hover:shadow-xl'>
                                            <div className='w-full flex justify-between items-center relative'>
                                                <div className='absolute sm:w-[9rem] w-[7.6rem]'>
                                                    <img src={item.img_url} alt="king" className='object-cover w-full h-full -mt-3 -ms-5 ' />
                                                </div>
                                                <span className='text-right ms-auto cursor-pointer pt-5'>
                                                    <MdShoppingBasket className='text-3xl text-right me-2 bg-cartNumBg text-white p-1 rounded-full' />
                                                </span>
                                            </div>
                                            <div className='flex items-center px-4 py-1 flex-col mt-10'>
                                                <p className='text-md font-semibold text-headingColor text-center textx w-full'>{item.name}</p>
                                                <p className='text-[.57rem] text-center py-1 text-textColor'>{item.description}</p>
                                                <p>₹ {item.price}</p>
                                                <button className='w-full py-1 bg-cartNumBg text-white rounded-full my-2 text-sm' onClick={() => cartAddHandler(item)}>Add to cart</button>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </> : searchData && !searchData.length ? <><p>no data found</p></> : <>
                            <div className="flex flex-wrap justify-between mt-5 ">
                                {
                                    searchData && searchData.map((item, index) => (
                                        <div key={index} className='border cardx mb-14 w-full bg-primary drop-shadow-lg rounded-lg backdrop-blur-lg hover:shadow-xl'>
                                            <div className='w-full flex justify-between items-center relative'>
                                                <div className='absolute sm:w-[9rem] w-[7.6rem]'>
                                                    <img src={item.img_url} alt="king" className='object-cover w-full h-full -mt-3 -ms-5 ' loading='lazy' />
                                                </div>
                                                <span className='text-right ms-auto cursor-pointer pt-5'>
                                                    <MdShoppingBasket className='text-3xl text-right me-2 bg-cartNumBg text-white p-1 rounded-full' />
                                                </span>
                                            </div>
                                            <div className='flex items-center px-4 py-1 flex-col mt-10'>
                                                <p className='text-md font-semibold text-headingColor text-center textx w-full'>{item.name}</p>
                                                <p className='text-[.57rem] text-center py-1 text-textColor'>{item.description}</p>
                                                <p>₹ {item.price}</p>
                                                <button className='w-full py-1 bg-cartNumBg text-white rounded-full my-2 text-sm'>Add to cart</button>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </>
                    }

                </div>
            </div>
        </div>
    )
}

export default ProductsByCategory