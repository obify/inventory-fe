import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  const pathname = window.location.pathname;
  const isLogin = pathname == '/login';

  return (
    <div className='w-full'>
        <div className='flex ml-16'>
            <Sidebar/>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout