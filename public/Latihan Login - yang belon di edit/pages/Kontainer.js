import React, {Component} from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Isi from '../components/isi'
import Footer from '../components/footer'

class kontainer extends Component{ //variabel yang dapat dirubah 
    constructor(props){
        super(props);
        this.state = {konten:"Konten Awal",}

    }
    handleChange = (e) => //
    {
        this.setState({ //
            [e.target.name] : e.target.value
        })
    }
    render(){
        //let konten = "isi"
        return(
            <div style={{padding:"50px"}}>
                <Layout
                header ={<Header/>}
        isi={<Isi konten={this.state.konten} />}
        />
        <input type="text" name="konten" onChange={this.handleChange}placeholder="ubah konten"/>
            <Layout

            footer={<Footer/>}
            />
            </div>
        )
    }
}
export default kontainer