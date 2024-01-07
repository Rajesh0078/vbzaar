import React, { useEffect } from 'react'
import { Info, HomeConatainer, CategoryContainer } from '../components'


const MainConatiner = () => {
    useEffect(() => {
        document.title = "VBzaar - The Fastest Delivery"
        window.scrollTo(0, 0)
        window.onload = () => {
            console.log("hi")
        }
    }, [])
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <HomeConatainer />
            {/* <CategoryContainer /> */}
            <Info />
        </div>
    )
}

export default MainConatiner