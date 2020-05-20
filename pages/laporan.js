import React, { Component } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Layout from '../components/layout';
import firebase from '../lib/db'

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dtpr: [],
      Sop : [],
      nm :"",
    }   
     this.handleChange = this.handleChange.bind(this)
    this.buttonClick=this.buttonClick.bind(this);
  }  

  GetData = async function () {
    firebase.firestore().collection("Projek").where("Nama_Projek","==",this.state.nm)
       .onSnapshot((snapshot) => {
         var data = []
         //tambahan
         var SOP = []
        snapshot.docs.map(async(doc) => {
           var dt = {
            data: doc.data(),
             id: doc.id
          }
          this.setState({
            idData: doc.id
          })
          //tambahan
          var doksop = []
          doc.ref.collection("SOP").get()
          .then((sop) => {
            sop.docs.map(dok => {
              doksop = dok.data()
              doksop.hst = dok.id
              dt.sop = doksop;
              //console.log(dt)
              //console.log(doksop)
              //tambahan
              SOP.push(doksop)
            })
            data.push(dt)
            
            console.log(data)
            console.log(SOP)
            this.setState({
              dtpr: data,
              Sop : SOP
            })
          })
      });
    })
}

handleChange(event) {
 
  this.setState({
      [event.target.name]: event.target.value,
  });
}
componentDidMount() {
  this.GetData()
}

buttonClick (){
  this.GetData()
}
  render() {
    return (
      
  <Layout>
 <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li class="breadcrumb-item active"> Data Laporan</li>
        </ol>
        <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div class="input-group"></div>
                <input type="text" value={this.state.nm} name="nm" onChange={this.handleChange}/>
               
                <button class="btn btn-primary" type="button" onClick={this.buttonClick}>
                cari
                </button>     
                </form>
          <div className="row">
            <div className="col-lg-12">
                <div className="ibox float-e-margins">
                    <div className="ibox-tools">
                        </div>
                          </div>
                          </div>
                          </div>

          <div class="card mb-3">
          <div class="card-header">
            <i class="fas fa-table"></i>
            Data Laporan</div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">

                <tbody>
                {
                    this.state.dtpr.length != 0 ?
                      this.state.dtpr.map((dt, key) => {
                        return (

                      <tr>    
                       <label> Nama Pemilik</label> : <label>{dt.data.Nama_Pemilik_Lahan}</label>
                       <br></br>
                       <label>Nama Projek</label> : <label>{dt.data.Nama_Projek}</label>
                      <br></br>
                       <label>Rincian
                        <ul>
                          <li>HST-10 : {typeof this.state.Sop[0].Nutrisi == 'undefined' ? 0 : this.state.Sop[0].Nutrisi.NamaNutrisi}</li>
                          <li>HST-15 : {typeof this.state.Sop[1].Nutrisi == 'undefined' ? 0 : this.state.Sop[1].Nutrisi.NamaNutrisi}</li>
                          <li>HST-16 : {typeof this.state.Sop[2].Nutrisi == 'undefined' ? 0 : this.state.Sop[2].Nutrisi.NamaNutrisi}</li>
                          <li>HST-17 : {typeof this.state.Sop[3].Nutrisi == 'undefined' ? 0 : this.state.Sop[3].Nutrisi.NamaNutrisi}</li>
                          <li>HST-23 : {typeof this.state.Sop[4].Nutrisi == 'undefined' ? 0 : this.state.Sop[4].Nutrisi.NamaNutrisi}</li>
                          <li>HST-25 : {typeof this.state.Sop[5].Nutrisi == 'undefined' ? 0 : this.state.Sop[5].Nutrisi.NamaNutrisi}</li>
                          <li>HST-30 : {typeof this.state.Sop[6].Nutrisi == 'undefined' ? 0 : this.state.Sop[6].Nutrisi.NamaNutrisi}</li>
                          <li>HST-33 : {typeof this.state.Sop[7].Nutrisi == 'undefined' ? 0 : this.state.Sop[7].Nutrisi.NamaNutrisi}</li>
                          <li>HST-37 : {typeof this.state.Sop[8].Nutrisi == 'undefined' ? 0 : this.state.Sop[8].Nutrisi.NamaNutrisi}</li>
                          <li>HST-40 : {typeof this.state.Sop[9].Nutrisi == 'undefined' ? 0 : this.state.Sop[9].Nutrisi.NamaNutrisi}</li>
                          <li>HST-45 : {typeof this.state.Sop[10].Nutrisi == 'undefined' ? 0 : this.state.Sop[10].Nutrisi.NamaNutrisi}</li>
                          <li>HST-60 : {typeof this.state.Sop[11].Nutrisi == 'undefined' ? 0 : this.state.Sop[11].Nutrisi.NamaNutrisi}</li>
                          <li>HST-65 : {typeof this.state.Sop[12].Nutrisi == 'undefined' ? 0 : this.state.Sop[12].Nutrisi.NamaNutrisi}</li>
                          <li>HST-75 : {typeof this.state.Sop[13].Nutrisi == 'undefined' ? 0 : this.state.Sop[13].Nutrisi.NamaNutrisi}</li>
                          <li>HST-90 : {typeof this.state.Sop[14].Nutrisi == 'undefined' ? 0 : this.state.Sop[14].Nutrisi.NamaNutrisi}</li>
                        </ul>
                        </label>
                  </tr>
                        )
                       }
                      )
                      : (
                        <tr><td colSpan="7" className="text-center">Tidak ada data Nutrisi</td></tr>
                      )
                      }
                    
                </tbody>
              </table>
             
            </div>
          </div>
          <div class="card-footer small text-muted"></div>
        </div>
  </Layout>
)
}
}

