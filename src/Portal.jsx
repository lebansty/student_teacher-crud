import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'

function Portal() {
  return (
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id='content-wrapper' className="d-flex flex-column">
        <div className='content'>

        <Topbar></Topbar>
        <Outlet/>
      
      {/* <div className='container-fluid'></div> */}
    </div>
    </div>
        </div>
  )
}

export default Portal