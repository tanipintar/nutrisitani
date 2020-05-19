import React, {Component} from 'react'

class Statefull extends Component{
    constructor(props){
        super(props);
        this.state = {
            nutrisi: "kalsium",
            harga: 0,
            pekerjaan : ""
        }
    }
    handleChange = (e) => 
    {
        this.setState({ 
            [e.target.name] : e.target.value
        })
    }
    //disini tempat menulis method, render adalah menampilkan
    render(){
        return(
            <div style={{padding:"20px" }}>
                <input type="text" name="nutrisi"
                onChange={this.handleChange}
                /><br></br><br></br>
                <label>Nutrisi : {this.state.nutrisi} </label>

            <br></br> <br></br>

                <input type="number" name="harga"
                onChange={this.handleChange}
                /><br></br><br></br>
                <label>Harga : {this.state.harga} </label>

            <br></br> <br></br>

                <input type="string" name="pekerjaan"
                onChange={this.handleChange}
                /><br></br><br></br>
                <label>pekerjaan : {this.state.pekerjaan} </label>
            </div>
        )
    }
}
export default Statefull