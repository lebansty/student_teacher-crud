import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
   
<div id="wrapper">
<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

   
<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</Link>


<hr className="sidebar-divider my-0"/>


<li className="nav-item active">
    <a className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
</li>


<hr className="sidebar-divider"/>

<li className="nav-item active">
    <Link className="nav-link" to="teachers">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Teacher</span></Link>
</li>


<hr className="sidebar-divider"/>

<li className="nav-item active">
    <Link className="nav-link" to="students">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Students</span></Link>
</li>


<hr className="sidebar-divider"/>




</ul>

</div>

   
  )
}

export default Sidebar