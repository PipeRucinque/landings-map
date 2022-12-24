import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Layouts() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer />
    </>
  )
}

export default Layouts