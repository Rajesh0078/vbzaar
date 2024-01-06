import React, { useEffect } from 'react'
import { CreateConatainer, Header, MainContainer } from './components'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import '.pp.css'
import { Offers, Products, ProductsByCategory } from './pages'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    useEffect(() => {
        let title = document.title
        document.onvisibilitychange = () => {
            if (document.visibilityState === "hidden") {
                document.title = "Please visit us again"
            } else {
                document.title = title
            }
        }
    }, [])
    return (
        <AnimatePresence>
            <div className='flex flex-col bg-primary'>
                <Header />
                <ToastContainer autoClose={1500} />
                <main className='mt-[4.5rem] md:mt-20 w-full md:px-16 px-4'>
                    <Routes>
                        <Route path='/' element={<MainContainer />} />
                        <Route path='/createitem' element={<CreateConatainer />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/offers' element={<Offers />} />
                        <Route path='/categories/:category' element={<ProductsByCategory />} />
                    </Routes>
                </main>
            </div>
        </AnimatePresence>
    )
}

export default App