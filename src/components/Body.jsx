import React, { createContext, useState } from 'react'
import PublicNavbar from './navbar/PublicNavbar'
import { Outlet, useSearchParams } from 'react-router'
import Footer from './footer/Footer'
import {UserProvider} from '../context/UserContext'

const Body = () => {
  

  return (
    <UserProvider>
    <div className='min-w-screen flex flex-col'>
        <PublicNavbar/>
        <div className='flex-1'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
    </UserProvider>
  )
}

export default Body