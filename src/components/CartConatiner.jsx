import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCart } from '../utils/firebaseFunctions'
import cart from '../assets/emptyCart.svg'
import { getCartData } from '../store/actions/userAction'
import { Link } from 'react-router-dom'

const CartConatiner = () => {

    const { cartData } = useSelector(state => state.getCartDatareducer)
    const { user } = useSelector((state) => state.userReducer);

    const dispatch = useDispatch()


    const addQuantity = (e, des) => {
        const { parentElement } = e.target
        const { innerText } = parentElement.childNodes[1]
        if (des === "add") {
            parentElement.childNodes[1].innerText = parseInt(innerText) + 1
        } else {
            if (parseInt(innerText) >= 2) {
                parentElement.childNodes[1].innerText = parseInt(innerText) - 1
            }
        }
    }

    useEffect(() => {
        if (user) {
            dispatch(getCartData(user.email))
        }
    }, [addQuantity])

    return (
        <div className='md:w-[30%] sm:w-[50%] w-[85%] bg-white min-h-screen'>
            <p className='p-4 font-semibold text-gray-700 text-xl'>Cart Conatiner</p>
            <div className='flex flex-col h-full'>
                <div className='border flex flex-col gap-4 py-5 px-4 md:h-[68%] h-[70%] cart_scroll overflow-y-auto'>
                    {cartData.cart && cartData.cart.length ? cartData.cart.map((item, index) => (
                        <div className='flex gap-4 border-b-[1px] pb-4' key={index}>
                            <div className='w-[9rem] rounded-xl flex justify-center items-center border h-[6.5rem] p-2 '>
                                <img src={item.img_url} alt={item.name} className='object-contain w-full h-full' />
                            </div>
                            <div className='flex justify-between w-full'>
                                <div className='flex flex-col'>
                                    <p className='text-base text-headingColor font-semibold pb-2 text-clip w-[10rem] overflow-hidden whitespace-nowrap'>{item.name}</p>
                                    <p className='text-gray-400 my-auto'>{item.category}</p>
                                    <div className='flex gap-3'>
                                        <p className=' cursor-pointer text-xl select-none' onClick={(e) => addQuantity(e, "remove")}>-</p>
                                        <p className='border w-7 h-full text-center select-none'>{1}</p>
                                        <p className=' cursor-pointer text-xl select-none' onClick={(e) => addQuantity(e, "add")}>+</p>
                                    </div>
                                </div>
                                <div className=' flex flex-col'>
                                    <p className='font-medium text-right'> ₹{item.price}</p>
                                    <button className='mt-auto text-cartNumBg' onClick={() => updateCart(item, user.email, "remove")}>remove</button>
                                </div>
                            </div>
                        </div>
                    )) : <>
                        <div className='p-10'>
                            <img src={cart} alt="empty cart" />
                            <p className='text-center pt-10 font-medium text-xl'>Cart is Empty
                                <span
                                >😞</span></p>
                        </div>
                    </>
                    }
                </div>
                <div className='py-2 px-4'>
                    <div className='flex flex-col '>
                        <div className='flex justify-between text-xl'>
                            <p>Subtotal</p>
                            <p className=' font-semibold'>₹{cartData.cart && cartData.cart.reduce((acc, next) => { return acc + next.price }, 0)}</p>
                        </div>
                        <div className='mt-2 text-sm'>
                            Address: KING habvhugcvghc   gcyc
                        </div>
                        <button className='text-center w-full  py-[.3rem] mt-3 rounded-lg text-md bg-cartNumBg text-primary'>CheckOut</button>
                        <span className='text-center mt-1 '>or</span>
                        <Link to={'/'} className='text-center text-sm text-blue-900 font-semibold'>Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartConatiner