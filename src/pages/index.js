import React, { useState } from 'react'
// import Content from '../components/Contents'
// import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SidebarCart from '../components/SidebarCart'

const Home = () => {

    const [isOpenCart, setIsOpenCart] = useState(false)
    const toggleShow = () => {
        setIsOpenCart(!isOpenCart)
        //
        console.log(!isOpenCart)
    };

   
    return (
        <>
        <SidebarCart isOpentoxxx={isOpenCart} />
        <Navbar showSidebarCart={toggleShow} showMsg="TongSiripath" />
            {/* <Content />
            <Footer /> */}
            
        </>
    )
}

export default Home
