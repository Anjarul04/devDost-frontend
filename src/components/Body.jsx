import React from 'react'
import PublicNavbar from './navbar/PublicNavbar'
import { Outlet } from 'react-router'
import Footer from './footer/Footer'

const Body = () => {
  return (
    <div className='min-w-screen flex flex-col'>
        <PublicNavbar/>
        <div className='flex-1'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Body