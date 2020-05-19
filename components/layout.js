import React from 'react'
import Atas from './navbar'
import Sidebar from './sidebar'
import Head from 'next/head'
// import Link from 'next/link'

const Dasboardawal = (prop) => (
<>
<Head>
<meta charSet="utf-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="description" content=""/>
    <meta name="author" content=""/>

    <title>Tani Pintar - Nutrisi</title>
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"/>
    <link href="vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet"/>
    <link href="css/sb-admin.css" rel="stylesheet"/>

        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

        <script src="vendor/chart.js/Chart.min.js"></script>
        <script src="vendor/datatables/jquery.dataTables.js"></script>
        <script src="vendor/datatables/dataTables.bootstrap4.js"></script>

        <script src="js/sb-admin.min.js"></script>

        <script src="js/demo/datatables-demo.js"></script>
        <script src="js/demo/chart-area-demo.js"></script>
</Head>
<div id="page-top">

  <Atas/>
  <div id="wrapper">

    <Sidebar/>
    <div id="content-wrapper">

      <div class="container-fluid">

        {prop.children}
      </div>
      <footer class="sticky-footer">
        <div class="container my-auto">
          <div class="copyright text-center my-auto"> 
            <span>©TaniPintar 2020</span>
          </div>
        </div>
      </footer>

    </div>

  </div>
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <div class="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Anda Yakin Ingin Logout?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="modal-body">Pilih "Logout" Jika Anda Yakin</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Kembali</button>
          <a class="btn btn-primary" href='/index'>Keluar</a>
        </div>
        
      </div>
    </div>
  </div>

</div>      
</>

)
export default Dasboardawal