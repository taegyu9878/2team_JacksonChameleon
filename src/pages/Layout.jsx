import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Jacksonsub from './Jacksonsub'


const Layout = () => {
  return (
    <div>
      <Jacksonsub/>
      <Outlet/>
      <Footer/>
     
    </div>
  )
}

export default Layout