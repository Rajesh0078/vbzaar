import React, { useEffect } from 'react'

const Products = () => {

    useEffect(() => {
        document.title = "Products - VBzaar"
    }, [])

    return (
        <div className='min-h-screen -mt-20 pt-20'>Products</div>
    )
}

export default Products