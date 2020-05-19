import React from 'react'
import Link from 'next/link'

const Sidebar = () => (

  <ul className="sidebar navbar-nav">
    <li className="nav-item active">
      <a className="nav-link" href='/dasboardnya'>
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </a>
    </li>

    <li className="nav-item dropdown">
      <a className="nav-link" href='/notifikasi' >
        <i className="fas fa-fw fa-bell"></i>
        <span>Notifikasi</span>
      </a>
    </li>

    <li className="nav-item">
      {/* <Link href='Admin/tabelstok'> */}
      <a className="nav-link" href='/tabelstok'>
        <i className="fas fa-fw fa-chart-area"></i>
        <span>Stok</span>
      </a>
      {/* </Link> */}
    </li>
    <li className="nav-item">
      {/* <Link href='Admin/'> */}
      <a className="nav-link" href='/laporan'>
        <i className="fas fa-fw fa-table"></i>
        <span>Laporan <a href></a></span>
      </a>
      {/* </Link> */}
    </li>
  </ul>


)
export default Sidebar